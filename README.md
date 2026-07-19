# Portfolio Software as a Service (SaaS) Platform - Complete Technical Documentation

## Executive Summary
This repository contains a full-stack, enterprise-grade Portfolio and Software as a Service (SaaS) platform. The application uses a decoupled architecture consisting of a Next.js multi-page frontend and a Django REST Framework (DRF) backend. The platform serves as a content management system for showcasing professional projects and handling "Hire Me" client requests.

The system is fully containerized using Docker, providing consistent environments across development, testing, and production deployments.

---

## Architecture and Technology Stack

The project utilizes a strict separation of concerns, divided into two distinct services communicating via REST APIs.

### Frontend Technology Stack
The frontend is a static multi-page application utilizing the Next.js App Router. It is not a Single Page Application (SPA), but rather a statically generated site that benefits from Next.js server-side routing concepts exported to static HTML/JS/CSS assets.

*   **Framework**: Next.js (Version 16.2.10) - Configured for static export (`output: 'export'`).
*   **Library**: React (Version 19.2.7) and React DOM (Version 19.2.7).
*   **Styling**: Tailwind CSS (Version 4.3.2) utilizing PostCSS.
*   **Internationalization**: i18next (Version 26.2.0) and react-i18next for multi-language support.
*   **Iconography**: lucide-react (Version 1.25.0).
*   **Web Server**: Nginx (Alpine variant) utilized for serving static files and reverse proxying API requests.

### Backend Technology Stack
The backend provides a secure, RESTful API architecture built upon Django. It handles database transactions, background task processing, and administration.

*   **Language**: Python (Version 3.13-slim).
*   **Core Framework**: Django (Version 5.2.16).
*   **API Framework**: Django REST Framework (Version 3.15.2).
*   **Database**: PostgreSQL (Version 18-alpine) accessed via psycopg (Version 3.1.18).
*   **Asynchronous Task Queue**: Celery (Version 5.6.3).
*   **Message Broker & Cache**: Redis (Version 8.8-alpine).
*   **Production Application Server**: Gunicorn (Version 22.0.0).
*   **Static Asset Delivery**: WhiteNoise (Version 6.8.2).
*   **API Documentation Generation**: drf-spectacular (Version 0.27.2).
*   **Rich Text Content Management**: django-ckeditor-5 (Version 0.2.14).
*   **Administration Interface**: django-unfold (Version 0.40.0).
*   **Database Translation**: django-modeltranslation (Version 0.20.3).

---

## Comprehensive Project Structure and Codebase Breakdown

The codebase is strictly separated into `/frontend` and `/backend` directories, alongside root-level configuration files.

### 1. Root Configuration Files
*   **`docker-compose.yml`**: The local development container orchestration file. It defines the `db` (PostgreSQL), `redis`, `backend` (Django runserver), `celery_worker`, and `frontend` (Next.js development server) services. It utilizes `.env.local` and maps local directories to the containers to enable hot-reloading.
*   **`docker-compose.prod.yml`**: The production container orchestration file. It differs from development by executing the backend via Gunicorn, running database migrations automatically, and compiling the static frontend assets via Nginx without mapping local source code volumes. It utilizes `.env.prod`.
*   **`.env.local` & `.env.prod`**: Environment variable configurations securely storing database credentials and Django secret keys.
*   **`README.md`**: The primary documentation file.
*   **`TASK_TRACKER.md`**: A task management tracking file.

### 2. Frontend Directory (`/frontend`)
The frontend leverages the Next.js App Router for constructing a statically generated, multi-page web application.

#### Core Configuration
*   **`package.json`**: Defines Node.js dependencies, scripts (`dev`, `build`, `start`, `lint`), and versioning.
*   **`next.config.mjs`**: Next.js configuration explicitly defining `output: 'export'` to generate static HTML, and disabling the Next.js Image Optimization API (`unoptimized: true`) which is incompatible with static exports.
*   **`eslint.config.mjs`**: ESLint configuration for code quality enforcement.
*   **`Dockerfile`**: A multi-stage Dockerfile. Stage 1 compiles the Next.js application using `npm run build`. Stage 2 copies the generated `/out` directory into an Nginx Alpine container.
*   **`nginx/default.conf`**: The Nginx configuration file. It serves the Next.js static files on port 80 and establishes reverse proxy rules directing `/api/`, `/admin/`, `/static/`, `/media/`, and `/ckeditor5/` to the `http://backend:8000` service.

#### Application Pages (`/frontend/src/app`)
This directory utilizes the App Router paradigm to construct individual static pages.
*   **`layout.jsx`**: The root layout component wrapping all pages, injecting common components like navigation headers and footers.
*   **`page.jsx`**: The main index/home page of the application.
*   **`not-found.jsx`**: The custom 404 error page.
*   **`projects/page.jsx`**: The page responsible for listing all available portfolio projects.
*   **`project/[slug]/page.jsx` (Dynamic Route)**: The detailed view for a specific project, queried by its unique slug identifier.
*   **`skills/page.jsx`**: A dedicated page showcasing technical skills and proficiencies.
*   **`work-with-me/page.jsx`**: The contact and lead generation form interfacing with the `HireMeRequest` backend endpoint.
*   **`legal/page.jsx`**: The page containing legal terms and conditions.

#### Components and Services (`/frontend/src`)
*   **`components/`**: Contains reusable UI elements.
    *   `Header.jsx` & `Footer.jsx`: Global navigation and footer components.
    *   `SocialIcons.jsx`: UI component for rendering social media links.
    *   `*.locales.js`: Colocated translation objects specific to their respective components.
*   **`locales/`**: Centralized translation definitions utilized by i18next for multi-language support.
*   **`services/api.js`**: Centralized fetch wrapper containing asynchronous functions (`fetchProjects`, `fetchProjectBySlug`, `fetchProjectCategories`, `submitHireRequest`) that communicate with the `/api/` endpoints.
*   **`services/techIcons.js`**: Utility configurations for rendering technology stack icons.
*   **`App.css` & `index.css`**: Global stylesheet definitions utilizing Tailwind directives.

### 3. Backend Directory (`/backend`)
The backend provides a monolithic REST API utilizing Django and Django REST Framework.

#### Core Configuration (`/backend/config`)
*   **`settings.py`**: The primary Django configuration file. It registers all `INSTALLED_APPS` (including third-party libraries like `unfold`, `drf_spectacular`, `corsheaders`), defines PostgreSQL database connections, Configures Redis caching, establishes Celery broker URLs, and sets up `WhiteNoiseMiddleware` for static file delivery.
*   **`urls.py`**: The root URL router mapping `/api/` to the `api` application, and `/admin/` to the django-unfold administration panel.
*   **`celery.py`**: Initializes the Celery instance for asynchronous task processing.
*   **`wsgi.py` / `asgi.py`**: Interface specifications for serving the Django application.
*   **`Dockerfile`**: Defines the Python 3.13-slim environment, installs system dependencies (`gcc`, `libpq-dev`), executes `pip install -r requirements.txt`, and sets the default command to Django's development `runserver`.
*   **`requirements.txt`**: The exact list of Python packages required for the project.

#### API Application (`/backend/api`)
This module contains the primary business logic and database interactions.

*   **`models.py`**: Defines the relational database schema:
    *   `ProjectCategory`: Categorization model utilizing predefined Lucide icons.
    *   `Project`: The primary portfolio model containing title, slug, category foreign key, CKEditor5 rich text description, JSON field for tech stacks, and URL fields for GitHub and Live links.
    *   `ProjectImage`: A related model storing multiple images per `Project`.
    *   `HireMeRequest`: A lead generation model storing client name, email, budget, CKEditor5 project description, and an administrative status (`pending`, `reviewed`, `contacted`).
*   **`views.py`**: Defines the API endpoints using DRF ViewSets:
    *   `ProjectCategoryViewSet`: Read-only endpoint for categories.
    *   `ProjectViewSet`: Read-only endpoint for projects, incorporating standard pagination and lookup by slug.
    *   `HireMeRequestViewSet`: Create-only endpoint utilizing `AnonRateThrottle` to prevent abuse. Upon successful creation, it triggers the asynchronous `process_hire_me_request` Celery task.
    *   `server_status`: A simple GET endpoint returning the API's operational status.
*   **`serializers.py`**: Converts Django QuerySets to JSON representations for `ProjectCategory`, `Project`, and `HireMeRequest`.
*   **`urls.py`**: Maps the DRF `DefaultRouter` to the ViewSets, exposing `/api/categories/`, `/api/projects/`, and `/api/hire-me/`.
*   **`tasks.py`**: Defines Celery background tasks, specifically `process_hire_me_request`, which handles post-submission logic asynchronously.
*   **`admin.py`**: Configures the django-unfold administration interface, registering models and customizing list displays and search fields.

---

## Deployment and Setup Instructions

### System Prerequisites
Ensure the host environment is equipped with the following:
*   Docker Engine
*   Docker Compose V2
*   Git Version Control

### Local Development Environment
The development environment maps local source code directly into the containers, allowing for immediate observation of code modifications.

1.  Clone the repository:
    `git clone <repository_url>`
2.  Ensure the `.env.local` file is present in the root directory.
3.  Execute the following command to build the images and initiate the containers:
    `docker-compose up -d --build`
4.  The application exposes the following endpoints locally:
    *   Frontend Application: Access via `http://localhost:5173` (or as dynamically mapped by Docker)
    *   Backend API Route: `http://localhost:8000/api/`
    *   Django Administration Panel: `http://localhost:8000/admin/`
    *   OpenAPI Documentation: `http://localhost:8000/api/schema/swagger-ui/`
5.  To terminate the local environment, execute:
    `docker-compose down`

### Production Deployment Environment
The production configuration isolates the application logic, utilizes specialized production servers, and serves pre-compiled assets.

1.  Provision the production server and clone the repository.
2.  Generate a highly secure `.env.prod` file. This must contain strong, randomly generated passwords for PostgreSQL and a unique, cryptographically secure Django Secret Key. You must set `DJANGO_DEBUG=False` and configure `DJANGO_ALLOWED_HOSTS` to include your production domain names.
3.  Deploy the infrastructure using the production orchestrator:
    `docker-compose -f docker-compose.prod.yml up -d --build`
4.  Deployment Pipeline Details:
    *   The `frontend` container will execute `npm run build` during the build phase to generate the static HTML pages, which are then served by Nginx.
    *   The `backend` container will automatically execute `python manage.py collectstatic --noinput` and `python manage.py migrate` upon initialization to prepare static assets and the database schema.
    *   The backend service uses `gunicorn` bound to port 8000, which is proxied by the frontend Nginx instance.
5.  Port Configuration: The application listens on port 80 natively. It is standard practice to place this architecture behind an edge proxy or load balancer configured for HTTPS termination.

## Licensing
This software is provided under the terms of the MIT License.
