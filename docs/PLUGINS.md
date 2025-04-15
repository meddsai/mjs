# Plugins & Extensibility Guide

MJS is designed for extensibility via a (planned) plugin/module system. This guide describes the architecture, how to create plugins, and best practices.

## Overview

Plugins allow you to:
- Add new API endpoints
- Extend or override UI components
- Hook into workflow events (submission, review, publication, etc.)
- Integrate with external services (analytics, payment, etc.)

## Plugin Architecture

- Plugins are loaded at runtime and registered via a manifest file.
- Each plugin can declare dependencies, configuration, and hooks.
- Plugins can be enabled/disabled per deployment.

## Creating a Plugin

1. Scaffold a new plugin directory (e.g., `plugins/my-plugin/`).
2. Add a `plugin.json` manifest with metadata, entry points, and dependencies.
3. Implement your plugin logic in TypeScript (frontend), Rust (backend), or Python (AI service), depending on the extension point.
4. Register hooks or UI components as needed.
5. Add tests and documentation.

## Plugin Lifecycle

- **Install:** Place plugin in the `plugins/` directory and register in the config.
- **Enable:** Activate via admin UI or config file.
- **Upgrade:** Update plugin code and manifest; run migrations if needed.
- **Disable/Remove:** Deactivate and remove files; clean up data if necessary.

## Hooks & Events

Plugins can subscribe to system events, such as:
- Submission created/updated
- Review assigned/completed
- User registered/logged in
- Article published

See [ARCHITECTURE.md](./ARCHITECTURE.md) for extensibility details and planned hook/event APIs.

## Best Practices

- Keep plugins modular and focused on a single responsibility.
- Document all public APIs and configuration options.
- Write tests for plugin logic.
- Follow security best practices (see [SECURITY.md](./SECURITY.md)).
- Contribute your plugin to the community if it may be broadly useful!

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned plugin system milestones and API stability guarantees. 