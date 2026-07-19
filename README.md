# Portfolio SaaS Platform

A robust, modern full-stack web application designed for portfolio and SaaS use cases. This platform empowers you to showcase your projects, skills, and seamlessly handle incoming "Hire Me" requests with a beautifully designed frontend and a powerful administration panel.

---

## 🚀 Key Features

### Beautiful Frontend Experience
- **Next.js App Router**: Lightning-fast, statically exported React 19 frontend.
- **Tailwind CSS 4**: Modern, utility-first styling with custom UI components.
- **Internationalization (i18n)**: Fully supported multi-language interface out of the box (English, German, Dutch, Persian).
- **Responsive Design**: Works perfectly across all devices, from mobile phones to desktops.
- **Micro-interactions**: Smooth animations using modern CSS and React features.

### Powerful Backend & Admin Panel
- **Django 5.2 & DRF**: Solid, scalable Python backend with a fully featured RESTful API.
- **Beautiful Admin Dashboard**: Uses `django-unfold` to provide a premium, modern dashboard experience for managing projects, categories, and client requests.
- **Rich Text Editing**: Integrated CKEditor 5 for beautifully formatted project descriptions and blog posts.
- **Background Processing**: Celery and Redis handle async tasks efficiently.
- **OpenAPI Schema**: Automatic interactive API documentation powered by `drf-spectacular`.

---

## 🏗️ Architecture & Tech Stack

### Frontend Architecture (`/frontend`)
- **Framework**: Next.js 16 (Static Export mode)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Web Server**: Nginx (serves static files and proxies API requests)

### Backend Architecture (`/backend`)
- **Framework**: Django 5.2
- **API**: Django REST Framework (DRF) 3.15
- **Database**: PostgreSQL 16
- **Caching & Brokers**: Redis
- **Task Queue**: Celery
- **Production Server**: Gunicorn & WhiteNoise (for static file serving)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

*(Optional for manual setup without Docker: Node.js, Python 3.10+, PostgreSQL)*

---

## 💻 Local Development Setup

The easiest and recommended way to run this project locally is using Docker. This ensures consistency across different environments.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mahdymollayousefy/portfolio.git
   cd portfolio
   ```

2. **Configure Environment Variables**:
   The development environment relies on `.env.local`. Make sure it is present in the root directory.

3. **Start the containers**:
   ```bash
   docker-compose up -d --build
   ```

4. **Access the Application**:
   - **Frontend UI**: [http://localhost:5173](http://localhost:5173) (mapped via Docker or run locally)
     *(Note: If running Next.js outside docker, it usually defaults to 3000. In our docker setup, Nginx serves it on port 80, mapped to localhost:80. Please check `docker ps` for exact mappings).*
   - **Frontend via Nginx**: [http://localhost](http://localhost)
   - **Backend API Docs**: [http://localhost:8000/api/schema/swagger-ui/](http://localhost:8000/api/schema/swagger-ui/) (if spectacular is enabled)
   - **Django Admin Panel**: [http://localhost:8000/admin/](http://localhost:8000/admin/)

5. **Stop the containers**:
   ```bash
   docker-compose down
   ```

---

## 🌍 Production Deployment Guide

We provide a dedicated Docker Compose file (`docker-compose.prod.yml`) that optimizes the application for production deployment. It uses **Gunicorn** for the backend server and **WhiteNoise** for serving Django's static files securely and efficiently.

### 1. Setup the Server
SSH into your production server and clone the repository:
```bash
git clone https://github.com/mahdymollayousefy/portfolio.git
cd portfolio
```

### 2. Configure Production Secrets
Create and securely populate the `.env.prod` file. **Never commit real passwords to version control.**
```env
# .env.prod
POSTGRES_DB=portfolio_prod_db
POSTGRES_USER=portfolio_prod_sec_admin
POSTGRES_PASSWORD=YourHighlySecurePassword

DJANGO_SECRET_KEY=YourRandom64CharacterSecretKey
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com,127.0.0.1
```

### 3. Deploy the Containers
Run the production compose file. It automatically runs `collectstatic` and `migrate` before starting the Gunicorn server.

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### 4. Verify the Deployment
- Check if all containers are running:
  ```bash
  docker ps
  ```
- The application will be running on port `80`. Ensure your server's firewall (e.g., UFW) allows HTTP/HTTPS traffic.

---

## 📁 Project Structure Overview

```
.
├── backend/                # Django REST API application
│   ├── api/                # Core apps: Models, Views, Serializers
│   ├── config/             # Django settings, URLs, WSGI/ASGI
│   ├── Dockerfile          # Dev Dockerfile (also used as base for prod)
│   └── requirements.txt    # Python dependencies (includes gunicorn & whitenoise)
├── frontend/               # Next.js React application
│   ├── src/                # Components, Pages, Locales, API services
│   ├── nginx/              # Nginx reverse proxy configuration
│   ├── public/             # Static assets (images, icons)
│   └── Dockerfile          # Multi-stage build for Next.js static export
├── docker-compose.yml      # Development Docker configuration
├── docker-compose.prod.yml # Production Docker configuration
├── .env.local              # Local environment variables
└── README.md               # Project documentation
```

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is licensed under the MIT License.
