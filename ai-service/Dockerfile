FROM python:3.12-slim AS base

WORKDIR /app

# Install system dependencies and Poetry
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --no-cache-dir poetry==1.7.1

# Configure Poetry
ENV POETRY_VIRTUALENVS_CREATE=false \
    POETRY_NO_INTERACTION=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache \
    POETRY_HTTP_TIMEOUT=600 \
    PIP_DEFAULT_TIMEOUT=600 \
    PIP_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple

FROM base AS development

COPY pyproject.toml poetry.lock* ./

RUN poetry install --no-cache --no-root

COPY . .

CMD ["poetry", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

FROM base AS production

COPY pyproject.toml poetry.lock* ./

RUN poetry install --only main --no-cache --no-root

COPY . .

CMD ["poetry", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
