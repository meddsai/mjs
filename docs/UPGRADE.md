# Upgrade & Migration Guide

This guide describes how to safely upgrade MJS and migrate data between versions.

## General Principles
- Always back up your database and files before upgrading.
- Review [ROADMAP.md](./ROADMAP.md) for breaking changes and planned migrations.
- Test upgrades in a staging environment before production.

## Upgrade Process
1. Pull the latest code from the repository.
2. Review release notes for breaking changes and migration steps.
3. Update dependencies:
   - Frontend: `npm install`
   - Backend: `cargo update`
   - AI Service: `poetry update`
4. Apply database migrations (if any):
   - Run migration scripts as described in the release notes.
5. Update configuration files as needed (see [CONFIGURATION.md](./CONFIGURATION.md)).
6. Restart all services.

## Data Migration
- Migration scripts will be provided for major schema changes.
- Always verify data integrity after migration.
- For custom plugins or extensions, test compatibility with the new version.

## Troubleshooting Upgrades
- See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common upgrade issues.
- If you encounter problems, check logs and roll back to your backup if needed.

## Reporting Issues
- Report upgrade issues via GitHub issues or Discord.
- Include version numbers, error messages, and steps to reproduce.

## Best Practices
- Schedule upgrades during low-traffic periods.
- Notify users of planned downtime.
- Keep your system and dependencies up to date for security and stability. 