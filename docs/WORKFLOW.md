# MJS - Journal Management System Workflow

## Overview

This document provides a comprehensive guide to the workflow and architecture of the Medical Journal System (MJS), a full-stack application for managing academic articles, peer reviews, and publications.

## Architecture

### Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Backend**: Rust with Actix-web framework
- **Database**: PostgreSQL with SQLx for type-safe queries
- **Authentication**: JWT-based authentication

### System Components

```
mjs/
├── frontend/          # Next.js application
│   ├── public/        # Static assets
│   └── src/
│       ├── app/       # Next.js app router pages
│       ├── components/# UI components
│       └── core/      # Shared utilities, services, and configs
├── backend/           # Rust backend service
│   ├── migrations/    # SQL migration files
│   └── src/
│       ├── models/    # Data models
│       ├── routes/    # API routes
│       ├── services/  # Business logic
│       └── utils/     # Utility functions
└── docs/              # Documentation
```

## Database Schema

The system uses PostgreSQL with the following tables:

### Custom Enum Types

- **user_role**: `ADMIN`, `EDITOR`, `REVIEWER`, `AUTHOR`
- **article_status**: `DRAFT`, `SUBMITTED`, `UNDER_REVIEW`, `ACCEPTED`, `REJECTED`, `PUBLISHED`
- **review_status**: `PENDING`, `IN_PROGRESS`, `COMPLETED`, `REJECTED`

### Tables

- **users**: Stores user information including authentication details and roles
- **articles**: Manages article metadata and content references
- **reviews**: Tracks review assignments, status, and feedback

## Development Workflow

### Setup Environment

1. **PostgreSQL Setup**:
   ```bash
   # Start PostgreSQL service
   sudo systemctl start postgresql@16-main

   # Connect to PostgreSQL
   sudo -u postgres psql

   # Create user and database
   CREATE USER mjs_user WITH PASSWORD 'your_password';
   CREATE DATABASE mjs_db OWNER mjs_user;
   GRANT ALL PRIVILEGES ON DATABASE mjs_db TO mjs_user;
   \q
   ```

2. **Configure Authentication**:
   ```bash
   # Edit pg_hba.conf to use MD5 authentication for local connections
   sudo vim /etc/postgresql/16/main/pg_hba.conf
   # Change: local all all scram-sha-256
   # To: local all all md5

   # Restart PostgreSQL
   sudo systemctl restart postgresql@16-main
   ```

3. **Environment Setup**:
   ```bash
   # Backend .env file
   cd backend
   echo "DATABASE_URL=postgres://mjs_user:your_password@localhost/mjs_db" > .env

   # Frontend .env file
   cd frontend
   echo "NEXT_PUBLIC_API_URL=http://localhost:8080/api" > .env.local
   ```

### Database Migrations

1. **Run migrations**:
   ```bash
   cd backend
   sqlx database create
   sqlx migrate run
   ```

2. **Manual Migration Check**:
   ```bash
   psql -U mjs_user -d mjs_db
   \dt
   \d+ users
   \d+ articles
   \d+ reviews
   ```

### Starting Development Servers

1. **Backend**:
   ```bash
   cd backend
   cargo run
   # Server runs on http://localhost:8080
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm run dev
   # Server runs on http://localhost:3000
   ```

## User Roles and Workflows

### Author Workflow

1. Register/Login
2. Create a new article (initially in DRAFT status)
3. Edit and complete the article
4. Submit the article for review (changing status to SUBMITTED)
5. Receive notifications about review outcomes
6. Make revisions based on reviewer feedback if necessary

### Reviewer Workflow

1. Login with reviewer credentials
2. View assigned articles for review
3. Accept/decline review requests
4. Provide detailed feedback and ratings
5. Submit final review (changing status to COMPLETED)

### Editor Workflow

1. Login with editor credentials
2. View all submitted articles
3. Assign reviewers to articles
4. Make final decisions based on reviews
5. Publish accepted articles

### Admin Workflow

1. Login with admin credentials
2. Manage user accounts and roles
3. Override system behaviors when necessary
4. Access analytics and reporting features

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Authenticate and receive JWT token
- `POST /api/auth/logout`: Invalidate current session

### Users

- `GET /api/users`: List all users (admin only)
- `GET /api/users/{id}`: Get specific user details
- `PUT /api/users/{id}`: Update user information
- `DELETE /api/users/{id}`: Remove a user

### Articles

- `GET /api/articles`: List all articles
- `GET /api/articles/{id}`: Get specific article details
- `POST /api/articles`: Create a new article
- `PUT /api/articles/{id}`: Update an existing article
- `DELETE /api/articles/{id}`: Remove an article

### Reviews

- `GET /api/reviews`: List all reviews
- `GET /api/reviews/{id}`: Get specific review details
- `GET /api/reviews/article/{article_id}`: Get reviews for a specific article
- `POST /api/reviews`: Create a new review
- `PUT /api/reviews/{id}`: Update an existing review

## Troubleshooting

### Common Issues

1. **PostgreSQL Authentication Errors**:
   - Check `pg_hba.conf` configuration
   - Verify correct username/password in connection string
   - Ensure PostgreSQL service is running with `systemctl status postgresql@16-main`

2. **Backend Compilation Errors**:
   - SQLx enum type issues: Ensure enum types in Rust models match database types
   - Missing dependencies: Run `cargo check` to identify missing crates

3. **Frontend API Connection Issues**:
   - Verify backend server is running
   - Check CORS settings in backend
   - Ensure correct API URL in frontend environment

## Development Best Practices

1. **Database Schema Changes**:
   - Always create new migration files (`sqlx migrate add <name>`)
   - Test migrations on development database before production

2. **API Development**:
   - Follow RESTful principles
   - Include proper error handling and validation
   - Document all endpoints with examples

3. **Frontend Components**:
   - Use shared UI components
   - Implement form validation
   - Follow responsive design principles

4. **Code Quality and Formatting**:
   - Install pre-commit hooks: `pre-commit install`
   - Install pre-push hooks: `pre-commit install --hook-type pre-push`
   - Required global dependencies:
     ```bash
     # Install Node.js (if not already installed)
     curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
     sudo apt-get install -y nodejs

     # Install Prettier and Tailwind CSS plugin
     npm install -g prettier prettier-plugin-tailwindcss
     ```
   - Pre-commit hooks include:
     - Frontend: Type checking, linting, and Prettier formatting
     - Backend: Rust formatting and Python code style
     - General: YAML validation, whitespace checks, and security checks
   - Heavy checks (tests, builds) run on push stage
   - Lightweight checks (formatting, linting) run on commit stage

5. **Security**:
   - Store sensitive data in environment variables
   - Implement proper authentication and authorization
   - Sanitize user inputs
   - Use HTTPS in production

## Deployment

1. **Database**:
   - Set up production PostgreSQL instance
   - Apply migrations with `sqlx migrate run`
   - Create database backups

2. **Backend**:
   - Build with `cargo build --release`
   - Deploy using systemd service or container

3. **Frontend**:
   - Build with `npm run build`
   - Deploy static files to CDN or hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test
4. Submit pull request with detailed description
5. Code review and approval process

## License

[Add appropriate license information]
