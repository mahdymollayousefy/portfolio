# backend/Dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies required to compile psycopg from source
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Clean up build dependencies to keep the image incredibly small
RUN apt-get purge -y --auto-remove gcc python3-dev

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]