# Contributing Guide

This document outlines the contribution guidelines for MOJS.

## Getting Started

### 1. Prerequisites
- Node.js 18+
- Rust 1.70+
- Python 3.9+
- Docker
- Git

### 2. Development Setup
```bash
# Clone the repository
git clone https://github.com/your-org/mojs.git
cd mojs

# Install dependencies
npm install          # Frontend
cargo build         # Backend
poetry install      # AI/ML

# Start development servers
npm run dev         # Frontend
cargo run           # Backend
poetry run dev      # AI/ML
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
- [ ] All checks passing

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

## Development Setup

1. Fork and clone the repository
2. Set up the development environment:
   ```bash
   # Install pre-commit hooks
   ./scripts/setup-hooks.sh

   # Install dependencies for each service
   cd frontend && npm install
   cd ../backend && cargo build
   cd ../ai-service && poetry install
   ```

## Code Quality

MJS uses pre-commit hooks to ensure code quality across all services. The hooks are automatically installed when you run `./scripts/setup-hooks.sh`. They will:

- Format Python code using Black
- Sort Python imports using isort
- Check Python types using mypy
- Format TypeScript/JavaScript code using Prettier
- Format Rust code using rustfmt
- Remove trailing whitespace
- Ensure files end with a newline

The pre-commit hooks will run automatically before each commit. If any checks fail, the commit will be blocked until you fix the issues.

You can also manually run the checks at any time:
```bash
pre-commit run --all-files
```

## Pull Request Process

1. Create a new branch for your feature/fix
2. Make your changes
3. Ensure all pre-commit checks pass
4. Write/update tests as needed
5. Update documentation
6. Submit a pull request

## Code Style Guidelines

- Python: Follow PEP 8, use Black for formatting
- TypeScript/JavaScript: Use Prettier for formatting
- Rust: Use rustfmt for formatting
- All code must pass the pre-commit checks

## Testing

- Frontend: `npm test`
- Backend: `cargo test`
- AI Service: `poetry run pytest`

## Documentation

- Update README.md if needed
- Add/update API documentation
- Include comments for complex logic
- Update CHANGELOG.md for significant changes

## Questions?

Feel free to open an issue or join our community discussions! 