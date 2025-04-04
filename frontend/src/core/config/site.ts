export const siteConfig = {
    // Basic site information
    name: "MJS Platform",
    description: "Modern Journal Systems - A customizable academic publishing platform",
    url: "https://your-journal-domain.com",

    // Branding
    branding: {
        logo: "/logo.png",
        favicon: "/favicon.ico",
        primaryColor: "#0066cc",
        secondaryColor: "#003366",
    },

    // Features configuration
    features: {
        openAccess: true,
        peerReview: true,
        manuscriptSubmission: true,
        authorDashboard: true,
        reviewerDashboard: true,
        editorDashboard: true,
    },

    // Journal settings
    journal: {
        defaultLayout: "modern",
        availableLayouts: ["modern", "classic", "minimal"],
        defaultTheme: "light",
        availableThemes: ["light", "dark", "system"],
    },

    // Navigation configuration
    navigation: {
        main: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Journals", href: "/journals" },
            { label: "Submit", href: "/submit" },
            { label: "Contact", href: "/contact" },
        ],
        footer: {
            about: [
                { label: "About Us", href: "/about" },
                { label: "Team", href: "/about#team" },
                { label: "History", href: "/about#history" },
            ],
            resources: [
                { label: "Documentation", href: "/docs" },
                { label: "API", href: "/api" },
                { label: "Support", href: "/support" },
            ],
            legal: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
            ],
        },
    },

    // Authentication settings
    auth: {
        providers: ["email", "google", "orcid"],
        requireEmailVerification: true,
        allowRegistration: true,
    },

    // API configuration
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
        timeout: 5000,
    },
};

export type SiteConfig = typeof siteConfig;
