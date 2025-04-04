# MJS Backend

The backend service for Modern Journal Systems, built with Rust and PostgreSQL.

## Prerequisites

- Rust (latest stable version)
- PostgreSQL
- sqlx-cli (for database migrations)

## Setup

1. Install dependencies:
```bash
cargo install sqlx-cli
```

2. Create a PostgreSQL database:
```bash
createdb mjs
```

3. Copy the environment file and update the values:
```bash
cp .env.example .env
```

4. Run database migrations:
```bash
sqlx migrate run
```

5. Start the development server:
```bash
cargo run
```

## Development

### Database Migrations

Create a new migration:
```bash
sqlx migrate add <migration_name>
```

Run migrations:
```bash
sqlx migrate run
```

### Testing

Run tests:
```bash
cargo test
```

### API Documentation

The API documentation will be available at `/api/v1/docs` when the server is running.

## Project Structure

- `src/` - Source code
  - `config.rs` - Configuration management
  - `database.rs` - Database connection and pool
  - `models/` - Database models
  - `routes/` - API routes
  - `services/` - Business logic
  - `utils/` - Utility functions

## License

MIT
