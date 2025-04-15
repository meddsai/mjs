# Modern Journal System (MJS) 📚

<!-- Build Status badge to be added once CI is set up -->
<!-- [![Build Status](https://github.com/balinesthesia/mjs/actions/workflows/main.yml/badge.svg)](https://github.com/balinesthesia/mjs/actions/workflows/main.yml) -->

Welcome to MJS! We're building a modern, open-source journal system for the next generation of academic publishing. Whether you're a developer, researcher, or journal editor, MJS is designed to be powerful, extensible, and easy to use.

## 🌟 Key Features

- **Modern UI:** Responsive, accessible interface built with React and Tailwind CSS
- **AI-Powered Search:** Smart recommendations and full-text search
- **High-Performance Backend:** Rust (Actix Web) for secure, scalable APIs
- **Pluggable Architecture:** (Planned) Support for plugins and custom modules
- **Easy Deployment:** Docker-based setup for local and production environments
- **Robust Security:** OAuth2/OpenID Connect (Keycloak), HTTPS-ready, secure session management
- **Internationalization:** (Planned) Multi-language support for global journals

## 🏗️ Architecture Overview

MJS is a full-stack system with clear separation of concerns:

- **Frontend:** React + TypeScript (Next.js) — user interface, SSR, SEO
- **Backend:** Rust (Actix Web) — REST API, business logic, authentication
- **AI/ML Service:** Python (FastAPI) — peer review matching, citation analysis, recommendations
- **Database:** PostgreSQL — structured, reliable data storage
- **File Storage:** MinIO — scalable object storage for PDFs and media
- **Search:** Meilisearch — fast, typo-tolerant article search
- **Caching:** Redis — performance optimization for frequent queries
- **Authentication:** Keycloak — OAuth2, OpenID Connect
- **Deployment:** Docker, Kubernetes — scalable, portable infrastructure
- **Monitoring:** Prometheus, Grafana — system health and performance
- **Code Quality:** Pre-commit hooks, CI/CD (see [CI_CD.md](docs/CI_CD.md))

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for a detailed diagram, extensibility, and service interactions.

## 🚀 Quick Start

### For Users

```bash
docker compose up
```
Visit [http://localhost:5173](http://localhost:5173) to start using MJS!

### For Developers

#### Frontend (React + TypeScript)
```bash
cd frontend
npm install
npm run dev
```

#### Backend (Rust)
```bash
cd backend
cargo build
cargo run
```

#### AI Service (Python + FastAPI)
```bash
cd ai-service
poetry install
poetry run uvicorn src.main:app --reload
```

#### Configuration

- Copy `.env.example` to `.env` in each service directory and adjust settings as needed.
- See [`docs/CONFIGURATION.md`](docs/CONFIGURATION.md) for environment variables and secrets.

## 🧪 Testing & Code Quality

- **Frontend:** `npm test` (Jest, React Testing Library)
- **Backend:** `cargo test`
- **AI Service:** `pytest`
- **Linting/Formatting:** Prettier (TS), rustfmt (Rust), black (Python)
- **CI/CD:** GitHub Actions (see [CI_CD.md](docs/CI_CD.md))
- **Pre-commit hooks:** See [PRECOMMIT.md](docs/PRECOMMIT.md)

## 🔒 Security

- OAuth2/OpenID Connect via Keycloak
- Secure session cookies (`SameSite`, `Secure`)
- HTTPS recommended for all deployments
- See [`SECURITY.md`](docs/SECURITY.md) for vulnerability reporting, secure configuration, and best practices

## 🔌 Extensibility & Plugins

- (Planned) Plugin/module system for custom features and integrations
- API-first design for easy integration with external systems
- See [`docs/PLUGINS.md`](docs/PLUGINS.md) for roadmap and guidelines

## 📚 Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [User Guide](docs/USER_GUIDE.md)
- [API Reference](docs/API.md)
- [Configuration](docs/CONFIGURATION.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Template Guide](TEMPLATE.md)
- [Roadmap](docs/ROADMAP.md)
- [Security](docs/SECURITY.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Plugins](docs/PLUGINS.md)
- [Upgrade & Migration](docs/UPGRADE.md)
- [Internationalization](docs/INTERNATIONALIZATION.md)

## 🆘 Need Help?

1. Check our [Troubleshooting Guide](docs/TROUBLESHOOTING.md)
2. Search [existing issues](https://github.com/balinesthesia/mjs/issues)
3. Join our [Discord community](https://discord.gg/mjs)
4. Create a new issue

## 🛣️ Roadmap & Upgrade Policy

- See [ROADMAP.md](docs/ROADMAP.md) for planned features, plugin system, and migration guides.
- Upgrade instructions and compatibility notes will be provided with each release (see [UPGRADE.md](docs/UPGRADE.md)).

## 📝 Known Issues & Limitations

- MJS is under active development and not yet production-ready.
- See [issues](https://github.com/balinesthesia/mjs/issues) for current bugs and limitations.

## 📜 License

MJS is open source under the [MIT License](LICENSE).  
**Note:** Some components and code are derived from [Open Journal Systems (OJS)](https://pkp.sfu.ca/software/ojs/) and are used under the GNU GPL v3. See [LICENSE](LICENSE) for details.

## 🤝 Contributing

We welcome contributors of all experience levels!  
See [CONTRIBUTING.md](docs/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](docs/CODE_OF_CONDUCT.md).

## 🙏 Acknowledgments

Thanks to all contributors and the open source community!  
Inspired by [OJS](https://pkp.sfu.ca/software/ojs/) and the [Public Knowledge Project](https://pkp.sfu.ca/).

---

_Remember: Every expert was once a beginner. Don't hesitate to ask questions and contribute!_

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
