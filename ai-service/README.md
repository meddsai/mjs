# MJS AI Service

AI services for Modern Journal Systems.

## Description

This service provides AI capabilities for the Modern Journal Systems platform, including:

- Text analysis
- Content recommendations
- Automated metadata extraction
- Plagiarism detection

## Development

### Prerequisites

- Python 3.11+
- Poetry for dependency management

### Setup

1. Install dependencies:
   ```bash
   poetry install
   ```

2. Run the service:
   ```bash
   poetry run uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload
   ```

### Testing

Run tests with:
```bash
poetry run pytest
```

## License

See the main project LICENSE file. 