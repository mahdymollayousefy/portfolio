# Portfolio SaaS

A robust, modern full-stack web application designed for portfolio and SaaS use cases. It features a React-based frontend and a Django REST framework backend, fully containerized with Docker for easy deployment and development.

## 🚀 Features

### Frontend
- **React 19 & Vite**: Fast development server and modern React features.
- **Tailwind CSS 4**: Utility-first styling for rapid UI development.
- **React Router**: Client-side routing.
- **i18next**: Built-in localization and internationalization support.
- **Lucide React**: Beautiful and consistent iconography.

### Backend
- **Django 5.2**: Powerful Python web framework.
- **Django REST Framework**: Fully-featured RESTful API.
- **PostgreSQL**: Robust relational database.
- **Celery & Redis**: Background task processing and caching.
- **drf-spectacular**: OpenAPI schema generation.

### Infrastructure
- **Docker & Docker Compose**: Unified development and production environments.
- **Nginx**: Production-ready web server and reverse proxy for the frontend.

## 📦 Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) & [pnpm](https://pnpm.io/) (for local frontend development)
- [Python 3.10+](https://www.python.org/) (for local backend development)

## 🛠️ Setup and Installation

### Running with Docker (Recommended)

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/mahdymollayousefy/portfolio.git
   cd portfolio
   ```

2. **Set up Environment Variables**:
   Ensure `.env.local` is present as it is used by `docker-compose.yml`.

3. **Start the containers**:
   ```bash
   docker-compose up -d --build
   ```

4. **Access the Application**:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

### Manual Local Setup

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### Frontend
```bash
cd frontend
pnpm install
pnpm dev
```

## 📁 Project Structure

```
.
├── backend/                # Django backend application
│   ├── api/                # DRF API applications
│   ├── config/             # Django project settings
│   ├── Dockerfile
│   └── requirements.txt    # Python dependencies
├── frontend/               # React frontend application
│   ├── src/                # React source code
│   ├── public/             # Static assets
│   ├── package.json        # Node dependencies
│   └── vite.config.js      # Vite configuration
├── docker-compose.yml      # Development Docker configuration
├── docker-compose.prod.yml # Production Docker configuration
└── README.md
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License.
