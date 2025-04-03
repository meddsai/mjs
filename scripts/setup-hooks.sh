#!/bin/bash
set -e

# Install pre-commit if not already installed
if ! command -v pre-commit &> /dev/null; then
    echo "Installing pre-commit..."
    pip install pre-commit
fi

# Install Rust toolchain if not already installed
if ! command -v rustup &> /dev/null; then
    echo "Installing Rust toolchain..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source "$HOME/.cargo/env"
fi

# Install rustfmt component
echo "Installing rustfmt..."
rustup component add rustfmt

# Install Python dependencies
echo "Installing Python dependencies..."
cd ai-service
echo "Updating poetry lock file..."
poetry lock
echo "Installing dependencies..."
poetry install
cd ..

# Install the pre-commit hooks
echo "Installing pre-commit hooks..."
pre-commit install --hook-type pre-commit --hook-type pre-push

# Run pre-commit on all files
echo "Running pre-commit on all files..."
pre-commit run --all-files || {
    echo "Some pre-commit hooks failed. This is expected if there are formatting issues."
    echo "You can fix these issues by running: pre-commit run --all-files --hook-stage push"
}

echo "Pre-commit hooks setup complete!"
echo ""
echo "To run hooks manually:"
echo "  - Run all hooks: pre-commit run --all-files"
echo "  - Run specific hook: pre-commit run <hook-id>"
echo "  - Run on specific files: pre-commit run --files <file1> <file2>"
echo ""
echo "Hooks will run automatically on:"
echo "  - git commit (pre-commit)"
echo "  - git push (pre-push)"
