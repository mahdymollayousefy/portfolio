# 📋 Portfolio SaaS — Comprehensive Project Overview

> **Generated:** September 2026  
> **Project:** `portfolio-saas` — A full-stack, multi-language portfolio & mini-CRM application  
> **Author:** Mahdy Mollayousefy

---

## Table of Contents

1. [Tech Stack & Infrastructure Overview](#1-tech-stack--infrastructure-overview)
2. [Dependency & Package Audit](#2-dependency--package-audit)
3. [Database Architecture & ER Models](#3-database-architecture--er-models)
4. [API & Communication Flow](#4-api--communication-flow)
5. [Asynchronous Tasks & Caching](#5-asynchronous-tasks--caching)
6. [Project Structure & File Tree](#6-project-structure--file-tree)

---

## 1. Tech Stack & Infrastructure Overview

### 1.1 Core Technologies

| Layer              | Technology                          | Version / Image         | Purpose                                        |
|--------------------|-------------------------------------|-------------------------|-------------------------------------------------|
| **Backend**        | Python                              | 3.13                    | Runtime for the Django application              |
| **Backend**        | Django                              | 5.2.16                  | Web framework, ORM, admin panel                 |
| **Backend**        | Django REST Framework (DRF)          | 3.15.2                  | RESTful API layer                               |
| **Backend**        | Gunicorn                            | 22.0.0                  | WSGI HTTP server (production)                   |
| **Backend**        | Celery                              | 5.6.3                   | Distributed task queue for async jobs            |
| **Frontend**       | Next.js                             | ^16.2.10                | React framework (static export mode)            |
| **Frontend**       | React                               | ^19.2.7                 | UI component library                            |
| **Frontend**       | Tailwind CSS                        | ^4.3.2                  | Utility-first CSS framework                     |
| **Frontend**       | i18next + react-i18next             | ^26.2.0 / ^17.0.8      | Client-side internationalization (EN/DE/NL/FA)   |
| **Database**       | PostgreSQL                          | 18-alpine               | Primary relational database                     |
| **Cache / Broker** | Redis                               | 8.8-alpine              | Django cache backend + Celery message broker     |
| **Web Server**     | Nginx                               | alpine                  | Reverse proxy, static file serving              |
| **Containers**     | Docker + Docker Compose v2           | —                       | Service orchestration & containerization        |
| **Static Files**   | WhiteNoise                          | 6.8.2                   | Serves static files in production               |

### 1.2 Docker & Service Orchestration

The project uses **Docker Compose v2** with two compose files for separate environments:

| File                       | Environment  | Purpose                                              |
|----------------------------|-------------|------------------------------------------------------|
| `docker-compose.yml`       | Development | Hot-reloading, Django dev server (`runserver`)        |
| `docker-compose.prod.yml`  | Production  | Gunicorn, `collectstatic`, `migrate` at boot          |

#### Service Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                        Docker Compose Network                        │
│                                                                      │
│  ┌──────────┐      ┌────────────────┐      ┌──────────────────────┐  │
│  │          │      │                │      │                      │  │
│  │ Postgres │◄─────│  Django        │─────►│  Redis               │  │
│  │ (db)     │      │  (backend)     │      │  (redis)             │  │
│  │ :5432    │      │  :8000         │      │  :6379               │  │
│  │          │      │                │      │    ▲                  │  │
│  └──────────┘      └───────┬────────┘      │    │                  │  │
│                            │               │    │                  │  │
│                            │               │  ┌─┴──────────────┐   │  │
│                            │               │  │ Celery Worker  │   │  │
│                            │               │  │ (celery_worker)│   │  │
│                            │               │  └────────────────┘   │  │
│                            │               │                      │  │
│                            │               └──────────────────────┘  │
│                            │                                         │
│                    ┌───────┴────────┐                                │
│                    │                │                                │
│                    │  Nginx         │                                │
│                    │  (frontend)    │◄──── Port 80 (public)          │
│                    │  Static HTML   │                                │
│                    │                │                                │
│                    └────────────────┘                                │
└──────────────────────────────────────────────────────────────────────┘
```

#### Service Descriptions

| Service          | Container Name           | Image / Build Context | Key Details                                                                                                |
|------------------|--------------------------|----------------------|------------------------------------------------------------------------------------------------------------|
| **db**           | `portfolio_db`           | `postgres:18-alpine` | Persistent volume `postgres_data`, port `5434:5432`, healthcheck via `pg_isready`                          |
| **redis**        | `portfolio_redis`        | `redis:8.8-alpine`   | Port `6379:6379`, healthcheck via `redis-cli ping`                                                         |
| **backend**      | `portfolio_backend`      | `./backend`          | Dev: `runserver 0.0.0.0:8000`; Prod: `gunicorn config.wsgi:application --bind 0.0.0.0:8000` with migrate  |
| **celery_worker**| `portfolio_celery`       | `./backend`          | `celery -A config worker -l info`, depends on db + redis healthy                                           |
| **frontend**     | `portfolio_frontend`     | `./frontend`         | Multi-stage build: Node 24 → `next build` (static export) → Nginx serves from `/usr/share/nginx/html`     |

#### Nginx Reverse Proxy Configuration

Nginx (`frontend/nginx/default.conf`) handles the following routing:

| Location         | Destination              | Purpose                                      |
|------------------|--------------------------|----------------------------------------------|
| `/`              | Local static files       | Serves Next.js static export (HTML/JS/CSS)   |
| `/api/`          | `backend:8000`           | Proxies all API requests to Django            |
| `/admin/`        | `backend:8000`           | Proxies Django admin panel                    |
| `/static/`       | `backend:8000`           | Proxies Django static files (WhiteNoise)      |
| `/media/`        | `backend:8000`           | Proxies uploaded media files                  |
| `/ckeditor5/`    | `backend:8000`           | Proxies CKEditor 5 file uploads               |

---

## 2. Dependency & Package Audit

### 2.1 Backend Dependencies (`requirements.txt`)

| Package                    | Version    | Category            | Purpose                                                          |
|----------------------------|------------|---------------------|------------------------------------------------------------------|
| `Django`                   | `5.2.16`   | Core Framework      | Web framework, ORM, admin, auth                                  |
| `djangorestframework`      | `3.15.2`   | API                 | REST API endpoints, serializers, viewsets                         |
| `psycopg`                  | `3.1.18`   | Database Driver     | PostgreSQL adapter (psycopg v3, compiled from source)             |
| `django-cors-headers`      | `4.3.1`    | Security / CORS     | Cross-Origin Resource Sharing middleware                          |
| `drf-spectacular`          | `0.27.2`   | API Docs            | OpenAPI 3.0 schema generation + Swagger UI                        |
| `celery`                   | `5.6.3`    | Async Tasks         | Distributed task queue (broker: Redis)                            |
| `redis`                    | `5.0.4`    | Cache / Broker      | Python Redis client for cache + Celery broker                     |
| `requests`                 | `2.33.0`   | HTTP Client         | External HTTP requests (utility)                                  |
| `django-ckeditor-5`        | `0.2.14`   | Rich Text Editor    | CKEditor 5 integration for admin content editing                  |
| `django-modeltranslation`  | `0.20.3`   | i18n                | Model-level field translation (EN, DE, NL, FA)                    |
| `django-unfold`            | `0.40.0`   | Admin UI            | Modern, premium Django admin theme                                |
| `gunicorn`                 | `22.0.0`   | WSGI Server         | Production-grade WSGI HTTP server                                 |
| `whitenoise`               | `6.8.2`    | Static Files        | Serves static files directly from Django in production            |

### 2.2 Frontend Dependencies (`package.json`)

#### Production Dependencies

| Package                             | Version    | Purpose                                              |
|--------------------------------------|------------|------------------------------------------------------|
| `next`                              | `^16.2.10` | React framework (App Router, static export)           |
| `react`                             | `^19.2.7`  | UI component library                                  |
| `react-dom`                         | `^19.2.7`  | React DOM rendering                                   |
| `i18next`                           | `^26.2.0`  | Core internationalization framework                   |
| `react-i18next`                     | `^17.0.8`  | React bindings for i18next                            |
| `i18next-browser-languagedetector`  | `^8.2.1`   | Auto-detect user's browser language                   |
| `lucide-react`                      | `^1.25.0`  | Icon library (tree-shakeable SVG icons)                |
| `react-international-phone`         | `^4.8.0`   | International phone number input with country selector|
| `react-responsive-carousel`         | `^3.2.23`  | Image carousel/slider for project galleries           |

#### Dev Dependencies

| Package                  | Version    | Purpose                                          |
|--------------------------|------------|--------------------------------------------------|
| `tailwindcss`            | `^4.3.2`  | Utility-first CSS framework                      |
| `@tailwindcss/postcss`   | `^4.3.2`  | PostCSS plugin for Tailwind v4                    |
| `postcss`                | `^8.5.10` | CSS transformation tool                           |
| `autoprefixer`           | `^10.4.20`| Adds vendor prefixes to CSS                       |
| `eslint`                 | `^9`      | JavaScript/JSX linter                             |
| `eslint-config-next`     | `^16.2.10`| ESLint configuration for Next.js                  |
| `@eslint/eslintrc`       | `^3.3.5`  | ESLint config compatibility layer                 |
| `@types/node`            | `^20`     | TypeScript type definitions for Node.js           |
| `@types/react`           | `^19`     | TypeScript type definitions for React             |
| `@types/react-dom`       | `^19`     | TypeScript type definitions for React DOM         |

> **Note:** The frontend includes TypeScript type definitions (`@types/*`) for IDE support, but the application code itself is written in **JSX** (not TypeScript).

---

## 3. Database Architecture & ER Models

### 3.1 Entity Overview

The database is powered by **PostgreSQL 18** and managed through Django's ORM. There is one Django app (`api`) with **4 models** (database tables):

| Model             | Table Name (approx.)           | Purpose                                      |
|-------------------|--------------------------------|----------------------------------------------|
| `ProjectCategory` | `api_projectcategory`          | Classification/taxonomy for projects         |
| `Project`         | `api_project`                  | Portfolio project entries                     |
| `ProjectImage`    | `api_projectimage`             | Image gallery for individual projects         |
| `HireMeRequest`   | `api_hiremerequest`            | Contact/CRM form submissions from clients     |

### 3.2 Detailed Model Schemas

#### `ProjectCategory`

| Field   | Type            | Constraints                     | Description                   |
|---------|-----------------|----------------------------------|-------------------------------|
| `id`    | BigAutoField    | PK, auto-increment               | Primary key                   |
| `name`  | CharField(100)  | `unique=True`                    | Category name                 |
| `icon`  | CharField(50)   | `choices=LUCIDE_ICONS`, blank    | Lucide icon identifier        |

#### `Project`

| Field             | Type               | Constraints                                      | Description                          |
|-------------------|--------------------|--------------------------------------------------|--------------------------------------|
| `id`              | BigAutoField       | PK, auto-increment                                | Primary key                          |
| `title`           | CharField(200)     | Required                                          | Project title (translatable: EN/DE/NL/FA) |
| `slug`            | SlugField          | `unique=True`                                     | URL-friendly identifier              |
| `category`        | ForeignKey         | → `ProjectCategory`, `SET_NULL`, nullable         | Project classification               |
| `description`     | CKEditor5Field     | Required (translatable: EN/DE/NL/FA)              | Rich-text HTML description           |
| `tech_stacks`     | JSONField          | `default=list`, nullable                          | JSON array of tech names, e.g. `["React", "Django"]` |
| `icon`            | CharField(100)     | `choices=ALL_ICONS`, blank                        | Lucide or Devicon icon identifier    |
| `github_link`     | URLField           | Nullable, blank                                   | Link to source code                  |
| `live_link`       | URLField           | Nullable, blank                                   | Link to live demo                    |
| `estimated_price` | DecimalField(10,2) | Nullable, blank                                   | Estimated project price in USD       |
| `created_at`      | DateTimeField      | `auto_now_add=True`                               | Creation timestamp                   |

> **Translation Fields:** `django-modeltranslation` adds `title_en`, `title_de`, `title_nl`, `title_fa`, `description_en`, `description_de`, `description_nl`, `description_fa` columns automatically.

#### `ProjectImage`

| Field     | Type         | Constraints                            | Description                  |
|-----------|-------------|----------------------------------------|------------------------------|
| `id`      | BigAutoField | PK, auto-increment                      | Primary key                  |
| `project` | ForeignKey   | → `Project`, `CASCADE`                  | Parent project               |
| `image`   | ImageField   | `upload_to='project_images/'`           | Uploaded image file          |

#### `HireMeRequest`

| Field                 | Type               | Constraints                                | Description                          |
|-----------------------|--------------------|--------------------------------------------|--------------------------------------|
| `id`                  | BigAutoField       | PK, auto-increment                          | Primary key                          |
| `name`                | CharField(100)     | Required                                    | Client/Company name                  |
| `email`               | EmailField         | Required                                    | Contact email                        |
| `phone`               | CharField(30)      | Blank                                       | Phone number with intl. code         |
| `project_description` | CKEditor5Field     | Required                                    | Rich-text project description        |
| `budget`              | DecimalField(10,2) | Nullable, blank                             | Estimated budget in USD              |
| `status`              | CharField(20)      | `choices`, default `'pending'`              | Workflow status: pending/reviewed/contacted |
| `created_at`          | DateTimeField      | `auto_now_add=True`                         | Submission timestamp                 |

### 3.3 Entity-Relationship (ER) Diagram

```
┌──────────────────────┐        ┌──────────────────────────────────────┐
│   ProjectCategory    │        │              Project                  │
├──────────────────────┤        ├──────────────────────────────────────┤
│ PK  id               │        │ PK  id                               │
│     name (unique)     │◄──┐   │     title (+en/de/nl/fa)             │
│     icon              │   │   │     slug (unique)                    │
└──────────────────────┘   │   │ FK  category → ProjectCategory       │
                            └───│     description (+en/de/nl/fa)       │
                                │     tech_stacks (JSON)               │
                                │     icon                             │
                                │     github_link                      │
                                │     live_link                        │
                                │     estimated_price                  │
                                │     created_at                       │
                                └──────────┬───────────────────────────┘
                                           │
                                           │ 1:N (CASCADE)
                                           ▼
                                ┌──────────────────────┐
                                │    ProjectImage       │
                                ├──────────────────────┤
                                │ PK  id                │
                                │ FK  project → Project │
                                │     image             │
                                └──────────────────────┘


┌──────────────────────────────────┐
│        HireMeRequest             │  (Standalone — no FK relations)
├──────────────────────────────────┤
│ PK  id                           │
│     name                         │
│     email                        │
│     phone                        │
│     project_description          │
│     budget                       │
│     status (pending/reviewed/    │
│            contacted)            │
│     created_at                   │
└──────────────────────────────────┘
```

### 3.4 Relationship Summary

| Relationship                          | Type           | On Delete     | Description                                       |
|---------------------------------------|----------------|---------------|----------------------------------------------------|
| `Project.category` → `ProjectCategory`| Many-to-One    | `SET_NULL`    | Many projects can belong to one category; category deletion nullifies the FK |
| `ProjectImage.project` → `Project`    | Many-to-One    | `CASCADE`     | Each project can have many images; deleting a project removes all its images |
| `HireMeRequest`                       | Standalone     | —             | No foreign key relationships to other models        |

---

## 4. API & Communication Flow

### 4.1 Communication Architecture

The frontend and backend communicate via a **RESTful API** built with **Django REST Framework (DRF)**:

```
┌──────────────────┐    HTTP (Fetch API)     ┌──────────────────┐
│                  │  ─────────────────────►  │                  │
│  Next.js (SSG)   │   GET /api/projects/     │  Django DRF      │
│  Static HTML     │   GET /api/categories/   │  Viewsets        │
│  served by Nginx │   POST /api/hire-me/     │  + Serializers   │
│                  │  ◄─────────────────────  │                  │
│  (Browser JS)    │    JSON Responses        │  (Gunicorn)      │
└──────────────────┘                          └──────────────────┘
```

- **Protocol:** HTTP REST (JSON payloads)
- **API Base URL:** `/api/` (proxied by Nginx to `backend:8000`)
- **Schema Documentation:** OpenAPI 3.0 via `drf-spectacular`
- **CORS:** Fully open in dev (`CORS_ALLOW_ALL_ORIGINS=True`), restricted in production
- **CSRF Protection:** Token-based via `X-CSRFToken` header
- **Content Negotiation:** `Accept-Language` header for model translations (EN/DE/NL/FA)
- **Rate Limiting:** Anonymous: 50 requests/day; Authenticated: 100 requests/day

### 4.2 API Route Table

#### Root URL Configuration (`config/urls.py`)

| URL Pattern         | Handler                        | Purpose                              |
|---------------------|--------------------------------|--------------------------------------|
| `/admin/`           | Django Admin (Unfold theme)    | Admin panel                          |
| `/api/`             | `include('api.urls')`          | API router (all endpoints below)     |
| `/api/schema/`      | `SpectacularAPIView`           | Raw OpenAPI JSON/YAML schema         |
| `/api/docs/`        | `SpectacularSwaggerView`       | Interactive Swagger UI               |
| `/ckeditor5/`       | CKEditor 5 upload handler      | Rich-text editor file uploads        |
| `/media/<path>`     | Django media server             | User-uploaded files                  |

#### API Endpoints (`api/urls.py` — DRF Router)

| Method   | Endpoint                        | ViewSet / View               | Auth    | Purpose                                    |
|----------|----------------------------------|-------------------------------|---------|---------------------------------------------|
| `GET`    | `/api/categories/`               | `ProjectCategoryViewSet.list` | Public  | List all project categories                 |
| `GET`    | `/api/categories/{id}/`          | `ProjectCategoryViewSet.retrieve` | Public | Get a single category by ID             |
| `GET`    | `/api/projects/`                 | `ProjectViewSet.list`         | Public  | List all projects (paginated, ordered by `-created_at`) |
| `GET`    | `/api/projects/{slug}/`          | `ProjectViewSet.retrieve`     | Public  | Get a single project by slug                |
| `POST`   | `/api/hire-me/`                  | `HireMeRequestViewSet.create` | Public  | Submit a hire/contact request (rate-limited) |
| `GET`    | `/api/status/`                   | `server_status`               | Public  | Health check endpoint                        |

### 4.3 Serializer Details

| Serializer                  | Model              | Notes                                                                        |
|-----------------------------|--------------------|------------------------------------------------------------------------------|
| `ProjectCategorySerializer` | `ProjectCategory`  | All fields exposed                                                            |
| `ProjectSerializer`         | `Project`          | Includes nested `category_detail` (read-only) and `images` (read-only, many) |
| `ProjectImageSerializer`    | `ProjectImage`     | Fields: `id`, `image`                                                         |
| `HireMeRequestSerializer`   | `HireMeRequest`    | `status` and `created_at` are read-only; validates `project_description` for CKEditor HTML wrapping |

### 4.4 Pagination

Projects are paginated using `StandardResultsSetPagination`:

| Parameter       | Default | Max  |
|-----------------|---------|------|
| `page_size`     | 10      | 50   |
| `page_size_query_param` | `page_size` | — |

### 4.5 Frontend API Service Layer

The frontend API service (`src/services/api.js`) provides the following functions:

| Function                | Method   | Endpoint                     | Returns              |
|-------------------------|----------|------------------------------|----------------------|
| `fetchProjects()`       | `GET`    | `/api/projects/?page_size=50`| Array of projects    |
| `fetchProjectBySlug(slug)` | `GET` | `/api/projects/{slug}/`      | Single project or `null` |
| `fetchProjectCategories()` | `GET` | `/api/categories/`           | Array of categories  |
| `fetchSkills()`         | `GET`    | `/api/skills/`               | Array of skills (from i18n) |
| `submitHireRequest(data)` | `POST` | `/api/hire-me/`              | Created request object |

> **Note:** All requests include `Accept-Language` header based on `i18nextLng` from localStorage, enabling automatic model translation on the backend.

---

## 5. Asynchronous Tasks & Caching

### 5.1 Celery Configuration

Celery is configured in `config/celery.py` and loaded via `config/__init__.py`:

| Setting                  | Value                                  | Description                          |
|--------------------------|----------------------------------------|--------------------------------------|
| `CELERY_BROKER_URL`      | `redis://redis:6379/0`                 | Redis database 0 as message broker   |
| `CELERY_RESULT_BACKEND`  | `redis://redis:6379/0`                 | Redis database 0 for task results    |
| Namespace                | `CELERY`                               | All settings prefixed with `CELERY_` |
| Auto-discovery           | `app.autodiscover_tasks()`             | Scans all installed apps for `tasks.py` |

### 5.2 Celery Workers

The worker runs as a dedicated Docker container (`celery_worker`) with the command:

```bash
celery -A config worker -l info
```

### 5.3 Defined Tasks

| Task Name                     | Location          | Trigger                          | Behavior                                                                     |
|-------------------------------|-------------------|-----------------------------------|------------------------------------------------------------------------------|
| `process_hire_me_request`     | `api/tasks.py`    | `HireMeRequestViewSet.perform_create()` | Asynchronously processes new hire requests (simulates email/CRM push with a 2-second delay). Logs success. Gracefully handles Celery unavailability. |

**Task Signature:**
```python
@shared_task
def process_hire_me_request(request_id, name, email):
    time.sleep(2)  # Simulate processing
    logger.info(f"Successfully processed Hire Me Request #{request_id} for {name} ({email})")
    return f"Processed request {request_id}"
```

### 5.4 Redis Caching

Django's caching framework is configured to use Redis:

| Setting         | Value                                        | Description                              |
|-----------------|----------------------------------------------|------------------------------------------|
| `BACKEND`       | `django.core.cache.backends.redis.RedisCache`| Django's native Redis cache backend      |
| `LOCATION`      | `redis://redis:6379/1`                       | Redis **database 1** (separate from Celery's db 0) |

#### Cache Usage in Views

| View                      | Cache Duration | Decorator                            |
|---------------------------|----------------|--------------------------------------|
| `ProjectCategoryViewSet`  | 2 minutes      | `@method_decorator(cache_page(120))` |
| `ProjectViewSet`          | 2 minutes      | `@method_decorator(cache_page(120))` |
| `HireMeRequestViewSet`    | None           | Not cached (write-only endpoint)     |

### 5.5 Redis Database Allocation

| Redis DB | Purpose          |
|----------|------------------|
| `db 0`   | Celery Broker + Result Backend |
| `db 1`   | Django Cache     |

---

## 6. Project Structure & File Tree

```
portfolio-saas/
├── .env.local                          # Development environment variables
├── .env.prod                           # Production environment variables
├── .gitignore                          # Git ignore rules
├── README.md                           # Project README
├── TASK_TRACKER.md                     # Task tracking document
├── project_overview.md                 # ← This file
├── docker-compose.yml                  # Development orchestration
├── docker-compose.prod.yml             # Production orchestration
│
├── backend/                            # 🐍 Django Backend Application
│   ├── Dockerfile                      # Python 3.13-slim, psycopg from source
│   ├── .dockerignore                   # Docker build exclusions
│   ├── manage.py                       # Django CLI entry point
│   ├── requirements.txt                # Python dependencies (pinned)
│   │
│   ├── config/                         # Django Project Configuration
│   │   ├── __init__.py                 # Loads Celery app on startup
│   │   ├── settings.py                 # All Django settings (DB, cache, CORS, DRF, CKEditor, Unfold, i18n)
│   │   ├── urls.py                     # Root URL configuration (admin, api, schema, ckeditor)
│   │   ├── wsgi.py                     # WSGI application (Gunicorn entry point)
│   │   ├── asgi.py                     # ASGI application (unused currently)
│   │   └── celery.py                   # Celery application configuration
│   │
│   ├── api/                            # Django App — Core API
│   │   ├── __init__.py
│   │   ├── models.py                   # Database models: ProjectCategory, Project, ProjectImage, HireMeRequest
│   │   ├── serializers.py              # DRF serializers for all models
│   │   ├── views.py                    # DRF viewsets + health check view
│   │   ├── urls.py                     # DRF router registration
│   │   ├── admin.py                    # Unfold admin with custom TechStack widget
│   │   ├── tasks.py                    # Celery shared tasks (process_hire_me_request)
│   │   ├── pagination.py              # StandardResultsSetPagination (page_size=10, max=50)
│   │   ├── translation.py             # Model translation config (Project: title, description)
│   │   ├── apps.py                     # App configuration
│   │   ├── tests.py                    # Test file (placeholder)
│   │   └── migrations/                 # Database migration files (7 migrations)
│   │       ├── 0001_initial.py
│   │       ├── ...
│   │       └── 0007_alter_project_tech_stacks.py
│   │
│   ├── static/                         # Django static files
│   │   └── css/                        # Custom admin CSS
│   │
│   └── media/                          # User-uploaded media files
│       └── project_images/             # Project image uploads
│
└── frontend/                           # ⚛️ Next.js Frontend Application
    ├── Dockerfile                      # Multi-stage: Node 24 → Build → Nginx alpine
    ├── .dockerignore                   # Docker build exclusions
    ├── .gitignore                      # Frontend-specific git ignores
    ├── README.md                       # Frontend README
    ├── package.json                    # Node.js dependencies & scripts
    ├── package-lock.json               # Dependency lock file
    ├── next.config.mjs                 # Next.js config: static export, unoptimized images
    ├── postcss.config.mjs              # PostCSS + Tailwind v4 plugin
    ├── eslint.config.mjs               # ESLint config (next/core-web-vitals)
    │
    ├── nginx/
    │   └── default.conf                # Nginx reverse proxy config (API, admin, static, media, ckeditor)
    │
    ├── public/                         # Static assets (served as-is)
    │   ├── favicon.svg
    │   ├── hero.png
    │   ├── icons.svg
    │   ├── logo.jpg
    │   └── mahdy.jpg
    │
    └── src/                            # Application Source Code
        ├── index.css                   # Global CSS: Tailwind v4, custom theme, glass utilities, RTL fixes, scrollbar
        ├── App.css                     # Legacy/unused CSS (from initial scaffold)
        ├── i18n.js                     # i18next initialization, language merging, RTL direction handling
        │
        ├── app/                        # Next.js App Router (pages)
        │   ├── layout.jsx              # Root layout: I18nProvider, Header, Footer, ambient effects
        │   ├── page.jsx                # Home page: Hero, About, Stats, Services, Expertise, Work Process
        │   ├── not-found.jsx           # Custom 404 page
        │   ├── projects/
        │   │   └── page.jsx            # Projects listing: category filter, pagination, project cards
        │   ├── project/
        │   │   └── page.jsx            # Project detail: carousel, tech badges, rich description
        │   ├── skills/
        │   │   └── page.jsx            # Skills page: skills list, certs, tools, spoken languages
        │   ├── work-with-me/
        │   │   └── page.jsx            # Contact/CRM form: phone input, honeypot spam protection, pricing, FAQ
        │   └── legal/
        │       └── page.jsx            # Legal page: privacy, cookies, terms, payment policies
        │
        ├── components/                 # Shared UI Components
        │   ├── Header.jsx              # Navigation bar: desktop/mobile nav, language switcher, dark mode toggle
        │   ├── Header.locales.js       # Header translation strings
        │   ├── Footer.jsx              # Site footer: links, social icons, copyright
        │   ├── Footer.locales.js       # Footer translation strings
        │   └── SocialIcons.jsx         # SVG icon components: GitHub, LinkedIn, Telegram
        │
        ├── services/                   # API & Utility Services
        │   ├── api.js                  # API service layer: fetch wrappers, CSRF token handling, Accept-Language
        │   └── techIcons.js            # Tech name → Devicon CSS class mapping
        │
        └── locales/                    # Translation Files (EN, DE, NL, FA)
            ├── Home.locales.js         # Home page translations
            ├── Projects.locales.js     # Projects page translations
            ├── Skills.locales.js       # Skills page translations (includes skill data)
            ├── WorkWithMe.locales.js   # Work With Me page translations (includes FAQ)
            ├── Legal.locales.js        # Legal page translations
            └── NotFound.locales.js     # 404 page translations
```

### 6.1 Key Architectural Decisions

| Decision                               | Rationale                                                                                        |
|----------------------------------------|--------------------------------------------------------------------------------------------------|
| **Next.js Static Export** (`output: 'export'`) | No Node.js server needed in production; static HTML served via Nginx for maximum performance |
| **Nginx as reverse proxy**             | Single entry point (port 80) routes to static files or Django backend based on path              |
| **Client-side i18n (i18next)**         | Full 4-language support (EN/DE/NL/FA) with RTL handling for Persian, no SSR required            |
| **Django model translation**           | Backend returns translated content based on `Accept-Language` header                              |
| **CKEditor 5**                         | Rich-text editing for project descriptions and hire request details in the admin panel            |
| **Unfold admin theme**                 | Modern, polished admin UI with custom sidebar navigation                                         |
| **Celery with graceful fallback**      | Task dispatch wrapped in try/except — app continues working even if Celery/Redis is down         |
| **Honeypot spam protection**           | Invisible form field on the contact form to catch bots without CAPTCHAs                          |
| **Tailwind CSS v4**                    | Latest version with `@theme` directive, custom variant for dark mode, glass utility classes      |
| **JSON tech stacks field**             | Flexible schema-less storage with custom admin widget for comma-separated input                   |

### 6.2 Security Features

| Feature                            | Implementation                                                  |
|------------------------------------|-----------------------------------------------------------------|
| CORS restrictions (production)     | `CORS_ALLOWED_ORIGINS` whitelist                                |
| CSRF protection                    | `X-CSRFToken` header in API requests                            |
| Rate limiting                      | DRF `AnonRateThrottle` (50/day) on hire-me endpoint             |
| HSTS                               | `SECURE_HSTS_SECONDS=31536000` with subdomains + preload        |
| Secure cookies                     | `CSRF_COOKIE_SECURE=True`, `SESSION_COOKIE_SECURE=True`         |
| XSS protection                     | `SECURE_BROWSER_XSS_FILTER=True`                               |
| Content-type sniffing              | `SECURE_CONTENT_TYPE_NOSNIFF=True`                              |
| Clickjacking protection            | `X_FRAME_OPTIONS='DENY'`                                       |
| SSL proxy header                   | `SECURE_PROXY_SSL_HEADER` for Nginx SSL termination             |
| Honeypot spam protection           | Hidden `hp_field` in contact form                               |

### 6.3 Internationalization (i18n)

| Language   | Code | Direction | Font                                    |
|------------|------|-----------|------------------------------------------|
| English    | `en` | LTR       | System default (sans-serif)              |
| German     | `de` | LTR       | System default (sans-serif)              |
| Dutch      | `nl` | LTR       | System default (sans-serif)              |
| Persian    | `fa` | RTL       | Vazirmatn (Google Fonts, loaded via CDN) |

- **Backend:** `django-modeltranslation` for `Project.title` and `Project.description`
- **Frontend:** `i18next` with per-page locale files and browser language auto-detection
- **RTL Support:** Dynamic `dir` attribute on `<html>`, CSS logical properties (`ps-`, `pe-`, `text-start`, `border-s-`), RTL-specific CSS overrides

---

> **End of Document**
