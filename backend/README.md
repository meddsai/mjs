# MJS Backend

This is the backend service for the Modern Journal System (MJS), a double-blind journal workflow application.

## Prerequisites

- Rust (latest stable version)
- PostgreSQL (version 12 or higher)
- SQLx CLI (for database migrations)

## Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and update the values as needed
3. Create the database:
   ```bash
   createdb mjs_db
   ```
4. Install SQLx CLI:
   ```bash
   cargo install sqlx-cli
   ```
5. Run database migrations:
   ```bash
   sqlx migrate run
   ```
6. Build and run the application:
   ```bash
   cargo run
   ```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Users
- GET `/api/users` - Get all users
- GET `/api/users/{id}` - Get user by ID
- PUT `/api/users/{id}` - Update user
- DELETE `/api/users/{id}` - Delete user

## Development

To run the application in development mode:

```bash
cargo watch -x run
```

## Testing

To run tests:

```bash
cargo test
```

## Project Structure

- `src/` - Source code
  - `models/` - Database models and types
  - `routes/` - API route handlers
  - `services/` - Business logic
  - `main.rs` - Application entry point
- `migrations/` - Database migrations
- `tests/` - Integration and unit tests
