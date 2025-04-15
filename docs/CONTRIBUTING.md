# Contributing Guide

This document outlines the contribution guidelines for MJS.

## Getting Started

### 1. Prerequisites
- Node.js 18+
- Rust 1.70+
- Python 3.12+
- Docker
- Git
- Pre-commit hooks

### 2. Development Setup
```bash
# Clone the repository
git clone https://github.com/your-org/mjs.git
cd mjs

# Install pre-commit hooks
./scripts/setup-hooks.sh

# Install dependencies
cd frontend && npm install
cd ../backend && cargo build
cd ../ai-service && poetry install

# Start development servers
npm run dev         # Frontend
cargo run           # Backend
poetry run dev      # AI/ML
```

## Code Quality

MJS uses pre-commit hooks to ensure code quality across all services. The hooks are automatically installed when you run `./scripts/setup-hooks.sh`. They will:

### Python Code Quality
- Format code using Black (line length: 88)
- Sort imports using isort (Black profile)
- Remove trailing whitespace
- Fix end of files
- Check YAML files
- Detect large files
- Fix line endings
- Fix byte order markers
- Check for merge conflicts
- Detect private keys

### Rust Code Quality
- Format code using rustfmt (edition: 2021)
- Check for merge conflicts
- Detect private keys

### Pre-push Checks
- Run Python tests with coverage
- Build Rust code
- Build Docker images

The pre-commit hooks will run automatically before each commit. If any checks fail, the commit will be blocked until you fix the issues.

You can also manually run the checks at any time:
```bash
# Run all hooks
pre-commit run --all-files

# Run specific hook
pre-commit run <hook-id>

# Run on specific files
pre-commit run --files <file1> <file2>
```

## Contribution Workflow

### 1. Branch Strategy
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Create bugfix branch
git checkout -b fix/your-bugfix-name

# Create documentation branch
git checkout -b docs/your-docs-name
```

### 2. Commit Guidelines
```bash
# Commit message format
<type>(<scope>): <description>

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting
refactor: Code refactor
test:     Testing
chore:    Maintenance
```

## Code Standards

### 1. Frontend Standards
```typescript
// Example component
import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

export const Component: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};
```

### 2. Backend Standards
```rust
// Example function
pub fn process_data(data: &[u8]) -> Result<Vec<u8>, Error> {
    // Implementation
    Ok(vec![])
}
```

### 3. AI/ML Standards
```python
# Example function
def process_data(data: np.ndarray) -> np.ndarray:
    """Process input data.

    Args:
        data: Input array

    Returns:
        Processed array
    """
    return data
```

## Testing Requirements

### 1. Test Coverage
```bash
# Run tests
npm test             # Frontend
cargo test          # Backend
poetry run pytest   # AI/ML

# Check coverage
npm run coverage    # Frontend
cargo tarpaulin     # Backend
poetry run coverage # AI/ML
```

### 2. Quality Gates
- 80% test coverage
- No linting errors
- All tests passing
- Documentation updated
- All pre-commit checks passing

## Documentation

### 1. Code Documentation
```typescript
/**
 * Example function documentation
 * @param param1 - Description of param1
 * @param param2 - Description of param2
 * @returns Description of return value
 */
function example(param1: string, param2: number): boolean {
  return true;
}
```

### 2. API Documentation
```typescript
/**
 * @api {post} /api/submit Submit Article
 * @apiName SubmitArticle
 * @apiGroup Articles
 * @apiParam {String} title Article title
 * @apiParam {String} content Article content
 * @apiSuccess {String} id Article ID
 */
```

## Pull Request Process

### 1. PR Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Code follows standards
- [ ] All pre-commit checks passing
- [ ] All tests passing

### 2. Review Process
- Code review by maintainers
- Automated checks
- Manual testing
- Documentation review

## Community Guidelines

### 1. Communication
- Be respectful
- Be constructive
- Be patient
- Be helpful

### 2. Issue Reporting
```markdown
## Description
Detailed description of the issue

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 90]
- Version: [e.g. 1.0.0]
```

## Release Process

### 1. Versioning
```bash
# Version bump
npm version patch    # Frontend
cargo bump          # Backend
poetry version      # AI/ML
```

### 2. Release Checklist
- [ ] Version bumped
- [ ] Changelog updated
- [ ] Documentation updated
- [ ] Tests passing
- [ ] Release notes prepared

## Security

### 1. Vulnerability Reporting
- Use security@example.com
- Include detailed description
- Provide reproduction steps
- Suggest fixes if possible

### 2. Security Checklist
- [ ] Input validation
- [ ] Authentication
- [ ] Authorization
- [ ] Data protection

## Best Practices

### 1. Development
- Write clean code
- Follow standards
- Document changes
- Test thoroughly
- Run pre-commit checks

### 2. Collaboration
- Communicate clearly
- Be responsive
- Share knowledge
- Help others

## Getting Help

### 1. Resources
- Documentation
- Issue tracker
- Discussion forum
- Chat channel

### 2. Support
- Community support
- Maintainer support
- Professional support
- Emergency support

## Documentation Standards

- All public functions, classes, and modules should be documented with docstrings or JSDoc/Rustdoc style comments.
- API endpoints must be documented in [API.md](./API.md) using OpenAPI/Swagger format.
- Architectural changes should be reflected in [ARCHITECTURE.md](./ARCHITECTURE.md).
- Security-relevant changes must be documented in [SECURITY.md](./SECURITY.md).

## Writing and Updating Documentation

- Update or create relevant markdown files in `docs/` for new features, APIs, or workflows.
- Follow the style and structure of existing documentation.
- Add links to new docs in the main [README.md](../README.md) and [index.md](./index.md) if appropriate.
- For major changes, include diagrams or code samples as needed.
