FROM python:3.11-slim AS base
WORKDIR /app
RUN pip install poetry

FROM base AS development
COPY pyproject.toml poetry.lock* ./
RUN poetry install --no-root
COPY . .
CMD ["poetry", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

FROM base AS production
COPY pyproject.toml poetry.lock* ./
RUN poetry install --no-root --no-dev
COPY . .
CMD ["poetry", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
