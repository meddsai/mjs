# API Reference

MJS exposes all core functionality via RESTful APIs, designed for extensibility and integration.

## Standards

- All endpoints follow REST conventions and are documented with OpenAPI/Swagger.
- API versioning is used to ensure backward compatibility (e.g., `/api/v1/...`).
- All responses use JSON format.
- Errors follow a consistent structure:
  ```json
  {
    "error": {
      "code": "string",
      "message": "string",
      "details": {}
    }
  }
  ```

## Authentication & Authorization

- OAuth2/OpenID Connect (Keycloak) is used for authentication.
- Most endpoints require a Bearer token (JWT) in the `Authorization` header.
- Scopes and roles control access to protected resources.

## Core Endpoints

- `POST /api/v1/auth/login` — Authenticate user
- `GET /api/v1/users/me` — Get current user profile
- `GET /api/v1/articles` — List articles
- `POST /api/v1/articles` — Submit new article
- `GET /api/v1/reviews` — List reviews
- ...and more (see auto-generated Swagger docs)

## Extending the API

- Plugins can register new endpoints by declaring them in their manifest and implementing handlers.
- API extensions must follow the same versioning and error format.
- See [PLUGINS.md](./PLUGINS.md) for extension guidelines.

## Example Usage

### Fetching Articles
```bash
curl -H "Authorization: Bearer <token>" https://your-mjs-instance/api/v1/articles
```

### Submitting an Article
```bash
curl -X POST -H "Authorization: Bearer <token>" -H "Content-Type: application/json" \
  -d '{"title": "My Article", "content": "..."}' \
  https://your-mjs-instance/api/v1/articles
```

## API Documentation

- The full OpenAPI/Swagger spec is available at `/api/docs` when the backend is running.
- For more details, see the [Development Guide](./DEVELOPMENT.md) and plugin extension docs. 