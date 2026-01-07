# 🏢 Modern Company Showcase

> **A decoupled full-stack web application designed for managing corporate identity, services, and dynamic content.**

![React](https://img.shields.io/badge/React-18.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Django REST Framework](https://img.shields.io/badge/Django_REST-3.14-a30f2d?style=for-the-badge&logo=django&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## 📖 Overview

This project represents a modern approach to corporate web presence. Unlike traditional monolithic architectures, it utilizes a **decoupled structure**:
* **Backend:** A robust **Django REST Framework (DRF)** API that handles data persistence, authentication, and business logic.
* **Frontend:** A dynamic **React Single Page Application (SPA)** that consumes the API via custom hooks and Axios.

The system is designed to be scalable, maintainable, and SEO-friendly.

---

## 🏗️ Architecture & Key Features

### 🔌 Backend (Django API)
* **Service Layer Pattern:** Business logic is encapsulated in `services.py`, keeping views clean and testable.
* **RESTful Endpoints:** Standardized API endpoints for Services, Blog Posts, and Contact forms.
* **Scalable Models:** Database schema designed for extensibility (`models.py`).

### ⚛️ Frontend (React SPA)
* **Custom Hooks:** API interactions are managed via reusable hooks like `useFetch.jsx`.
* **Component-Based UI:** Modular components (`ServiceCard`, `HeroSection`) for reusability.
* **Centralized Config:** Global Axios configuration for interceptors and base URL management.

---

## 📂 Project Structure

```bash
corporate-brand-portal/
├── marka_backend/          # Django API Source
│   ├── api/
│   │   ├── services.py     # Business Logic Layer 🌟
│   │   ├── serializers.py  # Data Transformation
│   │   └── views.py        # API Controllers
│   └── config/             # Project Settings
│
└── marka_frontend/         # React Application
    ├── src/
    │   ├── api/            # Axios Configuration
    │   ├── components/     # UI Components
    │   ├── hooks/          # Custom React Hooks
    │   └── pages/          # Route Views
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone [https://github.com/muzafferbulut/corporate-brand-portal.git](https://github.com/muzafferbulut/modern-company-showcase.git)
cd modern-company-showcase
```

### 2. Backend Setup (Django)

```bash
cd marka_backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run Migrations & Server
python manage.py migrate
python manage.py runserver
# API will run at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
```

### 3. Frontend Setup (React)

```bash
cd ../marka_frontend

# Install dependencies
npm install

# Start the application
npm start
# Client will run at http://localhost:3000/
```
