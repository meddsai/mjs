# Modern Journal Systems (MJS)

<!-- Build Status badge to be added once CI is set up -->
<!-- [![Build Status](https://github.com/balinesthesia/mjs/actions/workflows/main.yml/badge.svg)](https://github.com/balinesthesia/mjs/actions/workflows/main.yml) -->

Welcome to Modern Journal Systems (MJS), an open-source platform for next-generation scholarly publishing!

MJS is a fresh take on academic journal management, inspired by [Open Journal Systems (OJS)](https://pkp.sfu.ca/software/ojs/) from the [Public Knowledge Project (PKP)](https://pkp.sfu.ca/). Built from scratch by [Balinesthesia](https://website.anestesiudayana.com/), MJS uses React with TypeScript and Next.js for the frontend, Rust for the backend, and Python for AI-driven features like text analysis, content recommendations, automated metadata extraction, peer review matchmaking, plagiarism detection, and more. Built anew, distinct from OJS's PHP roots, MJS shares its mission but not its codebase, delivering a modern, scalable alternative for 2025 and future publishing needs.

As of April 2025, MJS is in early development. Join us to shape the future of publishing!

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