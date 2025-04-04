# MJS Template Documentation

This document provides detailed instructions on how to use and customize the MJS template for your academic journal platform.

## Quick Start

1. Clone the MJS repository
2. Copy the template files to your project
3. Configure your settings
4. Customize the design
5. Deploy your platform

## Configuration Guide

### 1. Basic Configuration

Edit `frontend/src/core/config/site.ts` to set up your basic information:

```typescript
export const siteConfig = {
  // Basic site information
  name: "Your Journal Name",
  description: "Your journal description",
  url: "https://your-journal-domain.com",

  // Branding
  branding: {
    logo: "/your-logo.png",
    favicon: "/your-favicon.ico",
    primaryColor: "#your-primary-color",
    secondaryColor: "#your-secondary-color",
  },
  // ... other configurations
};
```

### 2. Theme Customization

Modify `frontend/src/core/config/theme.ts` to customize the visual appearance:

```typescript
export const themeConfig = {
  // Color palette
  colors: {
    primary: {
      DEFAULT: "#your-primary-color",
      // ... other color variants
    },
    // ... other color groups
  },
  // ... other theme settings
};
```

### 3. Feature Configuration

Enable or disable features in `frontend/src/core/config/site.ts`:

```typescript
features: {
  openAccess: true,      // Enable/disable open access
  peerReview: true,      // Enable/disable peer review
  manuscriptSubmission: true,  // Enable/disable manuscript submission
  authorDashboard: true, // Enable/disable author dashboard
  // ... other features
}
```

## Customization Examples

### Example 1: Medical Journal

```typescript
// site.ts
export const siteConfig = {
  name: "Journal of Medical Research",
  description: "A peer-reviewed medical journal publishing clinical research",
  branding: {
    primaryColor: "#2E7D32",  // Medical green
    secondaryColor: "#1B5E20",
  },
  features: {
    peerReview: true,
    manuscriptSubmission: true,
    authorDashboard: true,
  }
};
```

### Example 2: Technical Journal

```typescript
// site.ts
export const siteConfig = {
  name: "Journal of Technical Innovation",
  description: "Publishing cutting-edge technical research",
  branding: {
    primaryColor: "#1565C0",  // Technical blue
    secondaryColor: "#0D47A1",
  },
  features: {
    peerReview: true,
    manuscriptSubmission: true,
    authorDashboard: true,
  }
};
```

## Layout Options

Choose from available layouts in `frontend/src/core/config/site.ts`:

```typescript
journal: {
  defaultLayout: "modern",  // Options: "modern", "classic", "minimal"
  availableLayouts: ["modern", "classic", "minimal"],
  defaultTheme: "light",    // Options: "light", "dark", "system"
}
```

## Component Customization

### 1. Header Component

Location: `frontend/src/core/components/layout/Header.tsx`

Customize:
- Logo placement
- Navigation items
- User menu
- Search bar

### 2. Navigation Component

Location: `frontend/src/core/components/layout/Navigation.tsx`

Customize:
- Menu items
- Dropdown menus
- Mobile navigation
- Active state styling

### 3. Footer Component

Location: `frontend/src/core/components/layout/Footer.tsx`

Customize:
- Footer sections
- Links
- Social media
- Copyright information

## Deployment Guide

1. Build your application:
   ```bash
   cd frontend
   npm run build
   ```

2. Set up your environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your production settings
   ```

3. Deploy to your preferred hosting platform:
   - Vercel
   - Netlify
   - AWS
   - DigitalOcean

## Best Practices

1. **Version Control**
   - Keep your customizations in a separate branch
   - Document all major changes
   - Use meaningful commit messages

2. **Customization**
   - Start with the default theme
   - Make incremental changes
   - Test across different devices
   - Keep accessibility in mind

3. **Performance**
   - Optimize images
   - Use lazy loading
   - Minimize custom CSS
   - Follow Next.js best practices

## Troubleshooting

### Common Issues

1. **Theme not applying**
   - Check color values in theme.ts
   - Verify CSS class names
   - Clear browser cache

2. **Features not working**
   - Verify feature flags in site.ts
   - Check component imports
   - Review console errors

3. **Layout issues**
   - Check responsive breakpoints
   - Verify component hierarchy
   - Review CSS specificity

## Support

For template-specific support:
- Check the [documentation](docs/)
- Open an issue in the repository
- Contact support@mjs-platform.org

## License

This template is available under the MIT License. See [LICENSE](LICENSE) for details.
