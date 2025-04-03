# MJS AI Service

The AI service component of Modern Journal Systems (MJS), providing intelligent features for scholarly publishing.

## Features

- Text analysis and content recommendations
- Automated metadata extraction
- Peer review matchmaking
- Citation analysis
- Plagiarism detection

## Development

### Prerequisites

- Python 3.12+
- Poetry for dependency management
- PostgreSQL 15+
- Pre-commit hooks (installed via `./scripts/setup-hooks.sh`)

### Setup

1. Install dependencies:
   ```bash
   poetry install
   ```

2. Set up pre-commit hooks:
   ```bash
   ./scripts/setup-hooks.sh
   ```

3. Run the service:
   ```bash
   poetry run uvicorn src.main:app --reload
   ```

### Testing

Run tests with:
```bash
poetry run pytest
```

### Code Quality

The service uses pre-commit hooks for code quality checks:
- Black for code formatting
- isort for import sorting
- mypy for type checking

These checks run automatically before each commit. You can also run them manually:
```bash
pre-commit run --all-files
```

## License

See the main project LICENSE file.
