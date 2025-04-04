# Development Guide

Welcome to the MJS development guide! This document is designed to help developers of all experience levels get started with the project. Whether you're a frontend specialist, backend developer, or AI enthusiast, we'll guide you through the setup process.

## Time Expectations ⏱️

Before you begin, here's what to expect for the initial setup:

- **First-time setup**: 30-45 minutes
  - Docker installation: ~10 minutes
  - Dependencies installation: ~15-20 minutes
  - Initial build time: ~10-15 minutes
- **Subsequent builds**: 2-5 minutes
- **Development hot-reload**: Almost instant

Note: Build times may vary based on your internet connection and machine specifications.

## Prerequisites

Don't worry if you're not familiar with all technologies - each component can be worked on independently!

### Essential Tools (Required for all developers)
- Git
- Docker Desktop
- VS Code (recommended) or any IDE of your choice

### Stack-Specific Requirements

#### Frontend Development
- Node.js 18+ (LTS version recommended)
- Basic understanding of:
  - React
  - TypeScript (but JavaScript knowledge is fine to start)
  - Tailwind CSS (easy to learn as you go)

#### Backend Development
- Rust (don't worry if you're new to it!)
  - We provide step-by-step guidance
  - Most endpoints are well-documented
- Basic understanding of:
  - RESTful APIs
  - SQL (basic queries)

#### AI Service Development
- Python 3.12+
- Basic understanding of:
  - FastAPI
  - Machine Learning concepts (but not required for API work)

## Getting Started 🚀

### 1. Clone the Repository

```bash
git clone https://github.com/balinesthesia/mjs.git
cd mjs
```

### 2. Choose Your Development Path

#### Path A: Full Stack Development
Run the complete setup:
```bash
make setup-all
```

#### Path B: Frontend Only
```bash
cd frontend
npm install
npm run dev
```

#### Path C: Backend Only
```bash
cd backend
cargo build
cargo run
```

#### Path D: AI Service Only
```bash
cd ai-service
poetry install
poetry run uvicorn src.main:app --reload
```

### 3. Verify Your Setup

Each component has its own verification steps:

- Frontend: Visit http://localhost:5173
- Backend: Visit http://localhost:8000/health
- AI Service: Visit http://localhost:8001/docs

## Development Workflow 🔄

### 1. Make Changes
- Work on your assigned component
- Use hot-reload for immediate feedback
- Follow the style guides (automatically enforced)

### 2. Test Your Changes
```bash
# Frontend
npm test

# Backend
cargo test

# AI Service
poetry run pytest
```

### 3. Submit Changes
```bash
git add .
git commit -m "Your descriptive message"
git push
```

## Common Tasks

### Frontend Development
- Component development: `frontend/src/components/`
- Styling: Use Tailwind classes (autocomplete available)
- State management: React hooks and context

### Backend Development
- API endpoints: `backend/src/routes/`
- Database changes: `backend/src/models/`
- Configuration: `backend/config/`

### AI Service Development
- API endpoints: `ai-service/src/routes/`
- Model integration: `ai-service/src/models/`
- Training scripts: `ai-service/scripts/`

## Getting Help 🆘

1. Check `docs/TROUBLESHOOTING.md` for common issues
2. Search existing GitHub issues
3. Ask in our Discord community
4. Create a new issue if needed

## Best Practices 🌟

1. **Start Small**: Begin with small changes to understand the workflow
2. **Use Feature Branches**: Create a branch for each feature/fix
3. **Ask Questions**: No question is too basic - we're here to help!
4. **Read Error Messages**: They often contain helpful information
5. **Use the Debugger**: Each component has debugging support in VS Code

## Next Steps 📚

- Read `CONTRIBUTING.md` for contribution guidelines
- Check `ROADMAP.md` for future plans
- Join our Discord community for real-time help

Remember: Everyone was a beginner once. Take your time to understand the parts you're working with, and don't hesitate to ask for help!
