export const siteConfig = {
    // Basic site information
    name: 'MJS Platform',
    description: 'Modern Journal Systems - Create and manage academic journals',
    url: 'https://your-journal-domain.com',

    // Branding
    branding: {
        logo: '/logo.png',
        favicon: '/favicon.ico',
        primaryColor: '#0066cc',
        secondaryColor: '#003366',
    },

    // Features configuration
    features: {
        templates: true,
        journalCreation: true,
        customDomain: true,
        analytics: true,
        apiAccess: true,
    },

    // Platform settings
    platform: {
        defaultLayout: 'modern',
        availableLayouts: ['modern', 'classic', 'minimal'],
        defaultTheme: 'light',
        availableThemes: ['light', 'dark', 'system'],
    },

    // Navigation configuration
    navigation: {
        main: [
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Create Journal', href: '/create-journal' },
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
        ],
        footer: {
            platform: [
                { label: 'Templates', href: '/templates' },
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Create Journal', href: '/create-journal' },
            ],
            resources: [
                { label: 'Documentation', href: '/docs' },
                { label: 'API', href: '/api' },
                { label: 'Support', href: '/support' },
                { label: 'Blog', href: '/blog' },
            ],
            legal: [
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
            ],
        },
    },

    // Authentication settings
    auth: {
        providers: ['email', 'google', 'orcid'],
        requireEmailVerification: true,
        allowRegistration: true,
    },

    // API configuration
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
        timeout: 5000,
    },
};

export type SiteConfig = typeof siteConfig;
