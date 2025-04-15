# Configuration Guide

This document describes all environment variables and configuration options for MJS services.

## General Principles
- Use `.env` files for local development.
- Use Docker/Kubernetes secrets for production.
- Never commit secrets to version control.
- See [SECURITY.md](./SECURITY.md) for secure configuration practices.

## Frontend (.env)
- `VITE_API_URL` — Base URL for backend API
- `VITE_AUTH_URL` — Keycloak or OAuth provider URL
- `VITE_FEATURE_FLAGS` — Enable/disable experimental features

## Backend (.env)
- `DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — Secret for signing JWT tokens
- `OAUTH_CLIENT_ID` / `OAUTH_CLIENT_SECRET` — OAuth2 credentials
- `MINIO_ENDPOINT` / `MINIO_ACCESS_KEY` / `MINIO_SECRET_KEY` — File storage
- `REDIS_URL` — Redis connection string
- `MEILISEARCH_URL` — Meilisearch endpoint
- `LOG_LEVEL` — Logging verbosity

## AI Service (.env)
- `MODEL_PATH` — Path to ML model
- `API_KEY` — API key for protected endpoints
- `ALLOWED_ORIGINS` — CORS settings

## Production Tips
- Always set `NODE_ENV=production` or `RUST_ENV=production` in production
- Use strong, unique secrets for all keys
- Restrict allowed origins and CORS settings
- Store secrets in Docker/Kubernetes secrets, not in `.env` files

## Updating Configuration
- After changing `.env` files, restart the affected service
- For Docker Compose, use `docker compose up -d --build`

## More Information
- See [DEVELOPMENT.md](./DEVELOPMENT.md) for setup
- See [SECURITY.md](./SECURITY.md) for secure configuration 