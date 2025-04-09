import { type JournalTheme } from '@/config/theme.config';

export interface TemplateConfig {
    // Template Information
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;

    // Template Features
    features: {
        // Layout Features
        layout: {
            header: boolean;
            navigation: boolean;
            footer: boolean;
            sidebar: boolean;
            responsive: boolean;
        };

        // Content Features
        content: {
            articles: boolean;
            issues: boolean;
            volumes: boolean;
            categories: boolean;
            tags: boolean;
        };

        // User Features
        users: {
            registration: boolean;
            profiles: boolean;
            roles: boolean;
            permissions: boolean;
        };

        // Submission Features
        submissions: {
            enabled: boolean;
            workflow: boolean;
            review: boolean;
            revision: boolean;
        };
    };

    // Theme Configuration
    theme: JournalTheme;

    // Customization Options
    customization: {
        colors: boolean;
        typography: boolean;
        layout: boolean;
        components: boolean;
    };

    // Dependencies
    dependencies: {
        required: string[];
        optional: string[];
    };
}

export const defaultTemplateConfig: TemplateConfig = {
    name: 'Default Template',
    description: 'A modern and clean template for academic journals',
    version: '1.0.0',
    author: 'MJS Team',
    license: 'MIT',

    features: {
        layout: {
            header: true,
            navigation: true,
            footer: true,
            sidebar: true,
            responsive: true,
        },
        content: {
            articles: true,
            issues: true,
            volumes: true,
            categories: true,
            tags: true,
        },
        users: {
            registration: true,
            profiles: true,
            roles: true,
            permissions: true,
        },
        submissions: {
            enabled: true,
            workflow: true,
            review: true,
            revision: true,
        },
    },

    theme: {
        colors: {
            primary: '#0066cc',
            secondary: '#003366',
            accent: '#ff6600',
            background: '#ffffff',
            text: '#000000',
            header: {
                background: '#ffffff',
                text: '#000000',
            },
            footer: {
                background: '#f5f5f5',
                text: '#333333',
            },
            sidebar: {
                background: '#ffffff',
                text: '#333333',
                activeItem: '#0066cc',
            },
        },
        typography: {
            fontFamily: {
                heading: 'Inter, sans-serif',
                body: 'Inter, sans-serif',
                mono: 'Fira Code, monospace',
            },
            fontSize: {
                base: '16px',
                heading1: '2.5rem',
                heading2: '2rem',
                heading3: '1.75rem',
                small: '0.875rem',
            },
        },
        layout: {
            maxWidth: '1200px',
            contentWidth: '800px',
            sidebarWidth: '250px',
            headerHeight: '80px',
            footerHeight: '200px',
            spacing: {
                xs: '0.25rem',
                sm: '0.5rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '2rem',
            },
        },
        components: {
            card: {
                borderRadius: '0.5rem',
                shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                padding: '1rem',
            },
            button: {
                borderRadius: '0.375rem',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
            },
            input: {
                borderRadius: '0.375rem',
                borderColor: '#e5e7eb',
                focusColor: '#0066cc',
            },
            nav: {
                height: '60px',
                itemSpacing: '1rem',
            },
        },
        breakpoints: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        darkMode: {
            colors: {
                primary: '#3399ff',
                secondary: '#336699',
                accent: '#ff8533',
                background: '#1a1a1a',
                text: '#ffffff',
            },
            components: {
                card: {
                    background: '#2a2a2a',
                    border: '#3a3a3a',
                },
                input: {
                    background: '#2a2a2a',
                    border: '#3a3a3a',
                },
            },
        },
    },

    customization: {
        colors: true,
        typography: true,
        layout: true,
        components: true,
    },

    dependencies: {
        required: ['@radix-ui/react-*', 'tailwindcss', 'lucide-react'],
        optional: ['@tanstack/react-query', 'date-fns', 'zod'],
    },
};
