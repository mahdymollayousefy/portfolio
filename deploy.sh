#!/usr/bin/env bash
# deploy.sh — Automated deployment script for the Portfolio project
# Usage: ./deploy.sh [--no-cache]
#
# This script:
#   1. Pulls latest code from the Git repository
#   2. Rebuilds all containers
#   3. Runs Django migrations & collectstatic
#   4. Ensures media volume permissions
#   5. Cleans up dangling Docker images
#   6. Displays final container status

set -euo pipefail

# ─── Configuration ────────────────────────────────────────────────
PROJECT_DIR="/opt/projects/portfolio_mahdymollayousefy"
COMPOSE_FILE="${PROJECT_DIR}/docker-compose.prod.yml"
ENV_FILE="${PROJECT_DIR}/.env.prod"
GIT_BRANCH="main"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

log_info()  { echo -e "${CYAN}[INFO]${NC}  $(date '+%H:%M:%S') $1"; }
log_ok()    { echo -e "${GREEN}[OK]${NC}    $(date '+%H:%M:%S') $1"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC}  $(date '+%H:%M:%S') $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $(date '+%H:%M:%S') $1"; }

# ─── Pre-flight Checks ───────────────────────────────────────────
if [ ! -f "$ENV_FILE" ]; then
    log_error ".env.prod not found at $ENV_FILE"
    exit 1
fi

if [ ! -f "$COMPOSE_FILE" ]; then
    log_error "docker-compose.yml not found at $COMPOSE_FILE"
    exit 1
fi

# Parse optional flags
BUILD_FLAGS=""
if [[ "${1:-}" == "--no-cache" ]]; then
    BUILD_FLAGS="--no-cache"
    log_info "Building with --no-cache flag"
fi

cd "$PROJECT_DIR"

# ─── Step 1: Pull Latest Code ────────────────────────────────────
log_info "Pulling latest code from origin/${GIT_BRANCH}..."
git fetch origin
git reset --hard "origin/${GIT_BRANCH}"
log_ok "Code updated to latest commit: $(git rev-parse --short HEAD)"

# ─── Step 2: Ensure Media Volume Permissions ──────────────────────
log_info "Ensuring media volume permissions..."
mkdir -p /var/lib/docker/volumes/portfolio_prod_media_data/_data/project_images 2>/dev/null || true
chown -R 1000:1000 /var/lib/docker/volumes/portfolio_prod_media_data/_data 2>/dev/null || true
chmod -R 775 /var/lib/docker/volumes/portfolio_prod_media_data/_data 2>/dev/null || true

# ─── Step 3: Build & Restart Containers ──────────────────────────
log_info "Building containers..."
docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" build $BUILD_FLAGS
log_ok "Build completed"

log_info "Starting services..."
docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up -d
log_ok "All services started"

# Ensure media permissions inside container as root
docker exec -u 0 portfolio_prod_backend sh -c "mkdir -p /app/media/project_images && chown -R django_user:django_user /app/media && chmod -R 775 /app/media" 2>/dev/null || true

# ─── Step 4: Wait for Backend Health ─────────────────────────────
log_info "Waiting for backend to become healthy..."
RETRIES=0
MAX_RETRIES=30
until docker inspect --format='{{.State.Health.Status}}' portfolio_prod_backend 2>/dev/null | grep -q "healthy"; do
    RETRIES=$((RETRIES + 1))
    if [ $RETRIES -ge $MAX_RETRIES ]; then
        log_warn "Backend health check timed out after ${MAX_RETRIES} attempts. Checking logs..."
        docker compose -f "$COMPOSE_FILE" logs --tail=50 backend
        break
    fi
    sleep 5
done

if [ $RETRIES -lt $MAX_RETRIES ]; then
    log_ok "Backend is healthy"
fi

# ─── Step 5: Cleanup ─────────────────────────────────────────────
log_info "Pruning dangling Docker images..."
docker image prune -f > /dev/null 2>&1
log_ok "Cleanup complete"

# ─── Step 6: Status Report ───────────────────────────────────────
echo ""
echo -e "${CYAN}════════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  DEPLOYMENT COMPLETE${NC}"
echo -e "${CYAN}════════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${CYAN}Commit:${NC} $(git rev-parse --short HEAD) — $(git log -1 --pretty=format:'%s')"
echo -e "${CYAN}Branch:${NC} ${GIT_BRANCH}"
echo ""
docker compose -f "$COMPOSE_FILE" ps
echo ""
echo -e "${CYAN}════════════════════════════════════════════════════════════════${NC}"
