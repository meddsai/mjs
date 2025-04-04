# Modern Journal System (MJS) 📚

<!-- Build Status badge to be added once CI is set up -->
<!-- [![Build Status](https://github.com/balinesthesia/mjs/actions/workflows/main.yml/badge.svg)](https://github.com/balinesthesia/mjs/actions/workflows/main.yml) -->

Welcome to MJS! We're building a modern, open-source journal system that's both powerful and easy to use. Whether you're a developer, researcher, or journal editor, we've got you covered.

## 🌟 Key Features

- **Modern UI**: Beautiful, responsive interface built with React and Tailwind
- **Smart Search**: AI-powered search and recommendations
- **Fast Backend**: High-performance Rust backend
- **Easy Setup**: Docker-based deployment for quick starts

## 🚀 Quick Start

Choose your path based on your interests and expertise:

### For Users
```bash
# One-command setup with Docker
docker compose up
```
Visit http://localhost:5173 to start using MJS!

### For Developers

Pick the area you want to work on:

#### Frontend Development (React + TypeScript)
```bash
cd frontend
npm install
npm run dev
```

#### Backend Development (Rust)
```bash
cd backend
cargo build
cargo run
```

#### AI Service Development (Python + FastAPI)
```bash
cd ai-service
poetry install
poetry run uvicorn src.main:app --reload
```

## ⏱️ Time Expectations

- **Quick Start**: 5-10 minutes
- **First Build**: 30-45 minutes
- **Development Setup**: 15-20 minutes
- **Hot Reload**: Almost instant

## 🤝 Contributing

We welcome contributors of all experience levels! Here's how you can help:

1. **Frontend**: React components, UI/UX improvements
2. **Backend**: API endpoints, database optimizations
3. **AI**: Search improvements, recommendation system
4. **Documentation**: Help us make MJS more accessible
5. **Testing**: Help catch bugs before they reach production

See our [Contributing Guide](docs/CONTRIBUTING.md) for details.

## 📚 Documentation

- [Development Guide](docs/DEVELOPMENT.md): Start here for development setup
- [User Guide](docs/USER_GUIDE.md): Learn how to use MJS
- [API Documentation](docs/API.md): REST API reference
- [Troubleshooting](docs/TROUBLESHOOTING.md): Common issues and solutions
- [Template Guide](TEMPLATE.md): How to use MJS as a template for your journal

## 🆘 Need Help?

1. Check our [Troubleshooting Guide](docs/TROUBLESHOOTING.md)
2. Search [existing issues](https://github.com/balinesthesia/mjs/issues)
3. Join our [Discord community](https://discord.gg/mjs)
4. Create a new issue

## 🛣️ Roadmap

See our [Roadmap](docs/ROADMAP.md) for planned features and improvements.

## 📜 License

MJS is open source under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Thanks to all our contributors and the open source community!

---

Remember: Every expert was once a beginner. Don't hesitate to ask questions and contribute!

## Usage

> *MJS is under active development and not yet ready for deployment. Usage guides (Admin Guide, Getting Started, and Documentation Hub) will be available at [balinesthesia.github.io/mjs/docs/](https://balinesthesia.github.io/mjs/docs/) upon our first release. Stay tuned at [github.com/balinesthesia/mjs](https://github.com/balinesthesia/mjs)!*

## Tech Stack Overview

MJS is built with a full-stack architecture optimized for performance, scalability, and academic publishing needs:

- **Frontend**: React with TypeScript and Next.js for a responsive, SEO-friendly interface.
- **Backend**: Rust with Actix Web for secure, high-performance APIs.
- **AI/ML**: Python with FastAPI for features like peer review matchmaking, citation analysis, plagiarism detection, and beyond.
- **Database**: PostgreSQL for robust, structured data storage.
- **File Storage**: MinIO for scalable hosting of PDFs and supplementary files.
- **Caching**: Redis for optimized performance on frequent queries.
- **Search**: Meilisearch for fast, full-text article search.
- **Authentication**: Keycloak with OAuth 2.0 and OpenID Connect for secure user access.
- **Deployment**: Docker and Kubernetes for scalable, portable infrastructure.
- **Monitoring**: Prometheus and Grafana for system health and performance tracking.
- **Code Quality**: Pre-commit hooks for automated code formatting and linting across all services.

For a detailed migration plan and timeline, see our [ROADMAP.md](./ROADMAP.md).

## Bugs / Feature Requests
> ⚠️ See our [SECURITY.md](SECURITY.md) for vulnerability reporting.
- Issues: [github.com/balinesthesia/mjs/issues](https://github.com/balinesthesia/mjs/issues)
- Feature requests: [Discussions](https://github.com/balinesthesia/mjs/discussions)
- Learn more: [CONTRIBUTING.md](CONTRIBUTING.md)

## Community Code of Conduct

This repository is a community space managed by [Balinesthesia](https://website.anestesiudayana.com/). All activities here are governed by the [Balinesthesia Code of Conduct](CODE_OF_CONDUCT.md), inspired by [PKP's Code of Conduct](https://pkp.sfu.ca/code-of-conduct/). Please review the Code and help us create a welcoming environment for all participants.

## Contributions

> *MJS's Contributor Guide is under development and will be available upon our first release at [balinesthesia.github.io/mojs/docs/contributors/](https://balinesthesia.github.io/mjs/docs/contributors/). It will cover pull request guidelines, code formatting (e.g., Prettier for TypeScript, rustfmt for Rust), and branch/submodule organization for the frontend, backend, and AI components. For now, see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for basic contribution details.*

## License

**Modern Open Journal Systems (MJS)**

Copyright (C) 2025 Balinesthesia

Derived from [Open Journal Systems (OJS)](https://pkp.sfu.ca/software/ojs/), Copyright (C) 2001-2025 [Public Knowledge Project](https://pkp.sfu.ca/)

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [docs/LICENSE](./LICENSE) filesfor details.

Third parties are welcome to modify and redistribute MJS in entirety or parts according to the terms of this license. [Balinesthesia](https://website.anestesiudayana.com/) also welcomes patches for improvements or bug fixes to the software, whether for the React frontend, Rust backend, or Python AI services—see [github.com/balinesthesia/mjs](https://github.com/balinesthesia/mjs) for contribution details.
