# backend/Dockerfile
FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies required to compile psycopg from source and curl for healthcheck
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    python3-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Clean up build dependencies to keep the image incredibly small
RUN apt-get update && apt-get purge -y --auto-remove gcc python3-dev && rm -rf /var/lib/apt/lists/*

# Copy the rest of the application
COPY . .

# Set up non-root user for security and ensure media/static directories exist with proper ownership
RUN useradd -m django_user
RUN mkdir -p /app/media/project_images /app/staticfiles /app/static &&     chown -R django_user:django_user /app
USER django_user

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]