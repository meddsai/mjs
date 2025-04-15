# Internationalization (i18n) Guide

MJS aims to support multiple languages for both the user interface and content.

## Overview
- All UI strings are externalized for translation.
- Content (articles, metadata) can be stored and displayed in multiple locales.
- Locale files are managed per service (frontend, backend, AI).

## Adding a New Locale
1. Copy the default locale file (e.g., `en.json`) to a new file (e.g., `fr.json`).
2. Translate all strings in the new file.
3. Register the new locale in the service configuration (see [CONFIGURATION.md](./CONFIGURATION.md)).
4. Test the UI and API responses in the new language.

## Translating the UI
- Frontend uses i18n libraries (e.g., `react-i18next`).
- Add translations to the appropriate locale files in `frontend/src/locales/`.
- Use translation hooks/components in React code.

## Localizing Content
- Articles, metadata, and user-generated content can be stored in multiple languages.
- The backend API supports locale selection via query parameters or headers.
- Editors can provide translations for titles, abstracts, etc.

## Best Practices
- Keep locale files in sync across updates.
- Use clear, consistent keys for all strings.
- Encourage community contributions for new translations.

## Roadmap
- See [ROADMAP.md](./ROADMAP.md) for planned i18n milestones and features.
- For architectural details, see [ARCHITECTURE.md](./ARCHITECTURE.md). 