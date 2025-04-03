#!/bin/bash
set -e

# Run pre-push hooks
echo "Running pre-push hooks..."

# Run Python tests
echo "Running Python tests..."
cd ai-service
poetry install
poetry run pytest --cov
cd ..

# Run Rust build
echo "Running Rust build..."
cd backend
cargo build
cd ..

# Run Docker builds
echo "Running Docker builds..."
docker build -t mjs-backend ./backend
docker build -t mjs-ai ./ai-service

echo "All pre-push checks passed!"
