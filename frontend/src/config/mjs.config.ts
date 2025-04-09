import { type JournalConfig } from './journal.config';

export const mjsConfig: JournalConfig = {
    name: 'MJS Journal',
    shortName: 'MJS',
    description: 'Modern academic publishing platform',
    logo: {
        light: '/images/mjs-logo-light.svg',
        dark: '/images/mjs-logo-dark.svg',
    },

    organization: {
        name: 'MJS Publishing',
        website: 'https://mjs-publishing.org',
    },
    contact: {
        email: 'contact@mjs-publishing.org',
        address: '123 Publishing Street, Academic City, 12345',
        phone: '+1 234 567 8900',
    },

    theme: {
        colors: {
            primary: '#1a365d',
            secondary: '#2c5282',
            accent: '#4299e1',
            background: '#ffffff',
            text: '#1a202c',
            header: {
                background: '#ffffff',
                text: '#1a202c',
            },
            footer: {
                background: '#f7fafc',
                text: '#4a5568',
            },
            sidebar: {
                background: '#f7fafc',
                text: '#1a202c',
                activeItem: '#4299e1',
            },
        },

        typography: {
            fontFamily: {
                heading: 'Inter, system-ui, sans-serif',
                body: 'Inter, system-ui, sans-serif',
                mono: 'JetBrains Mono, monospace',
            },
            fontSize: {
                base: '1rem',
                heading1: '2.25rem',
                heading2: '1.875rem',
                heading3: '1.5rem',
                small: '0.875rem',
            },
        },

        layout: {
            maxWidth: '1440px',
            contentWidth: '1200px',
            sidebarWidth: '280px',
            headerHeight: '64px',
            footerHeight: '80px',
            spacing: {
                xs: '0.5rem',
                sm: '1rem',
                md: '1.5rem',
                lg: '2rem',
                xl: '3rem',
            },
        },

        components: {
            card: {
                borderRadius: '0.5rem',
                shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                padding: '1.5rem',
            },
            button: {
                borderRadius: '0.375rem',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
            },
            input: {
                borderRadius: '0.375rem',
                borderColor: '#e2e8f0',
                focusColor: '#4299e1',
            },
            nav: {
                height: '3rem',
                itemSpacing: '1.5rem',
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
                primary: '#90cdf4',
                secondary: '#63b3ed',
                accent: '#4299e1',
                background: '#1a202c',
                text: '#f7fafc',
            },
            components: {
                card: {
                    background: '#2d3748',
                    border: '#4a5568',
                },
                input: {
                    background: '#2d3748',
                    border: '#4a5568',
                },
            },
        },
    },

    features: {
        submissions: {
            enabled: true,
            allowedFileTypes: ['.doc', '.docx', '.pdf', '.tex'],
            maxFileSize: 50,
            requireAbstract: true,
            requireKeywords: true,
            requireCoverLetter: true,
        },

        peerReview: {
            enabled: true,
            type: 'double-blind',
            rounds: 2,
            minReviewers: 2,
            maxReviewers: 4,
            reviewDeadlineDays: 21,
        },

        users: {
            allowSelfRegistration: true,
            requireEmailVerification: true,
            allowOrcidLogin: true,
            allowGoogleLogin: true,
        },

        publishing: {
            issueNumbering: 'continuous',
            doiPrefix: '10.xxxx',
            openAccess: true,
            licenseType: 'cc-by',
        },
    },

    workflow: {
        editorial: {
            initialScreening: true,
            editorAssignment: true,
            copyEditing: true,
            productionEditing: true,
        },

        automation: {
            authorReminders: true,
            reviewerReminders: true,
            editorReminders: true,
            plagiarismCheck: true,
            referenceCheck: true,
        },
    },

    roles: {
        admin: {
            name: 'Administrator',
            permissions: ['*'],
            description: 'Full system access',
        },
        editor: {
            name: 'Editor',
            permissions: [
                'manage_submissions',
                'assign_reviewers',
                'make_decisions',
                'manage_issues',
            ],
            description: 'Manages editorial process',
        },
        reviewer: {
            name: 'Reviewer',
            permissions: ['view_assigned_submissions', 'submit_reviews'],
            description: 'Reviews assigned manuscripts',
        },
        author: {
            name: 'Author',
            permissions: ['submit_manuscript', 'view_own_submissions'],
            description: 'Can submit and track own manuscripts',
        },
    },

    template: {
        workflow: {
            editorial: {
                initialScreening: true,
                editorAssignment: true,
                copyEditing: true,
                productionEditing: true,
            },
            automation: {
                authorReminders: true,
                reviewerReminders: true,
                editorReminders: true,
                plagiarismCheck: true,
                referenceCheck: true,
            },
        },
        roles: {
            admin: {
                name: 'Administrator',
                permissions: ['*'],
                description: 'Full system access',
            },
            editor: {
                name: 'Editor',
                permissions: [
                    'manage_submissions',
                    'assign_reviewers',
                    'make_decisions',
                    'manage_issues',
                ],
                description: 'Manages editorial process',
            },
            reviewer: {
                name: 'Reviewer',
                permissions: ['view_assigned_submissions', 'submit_reviews'],
                description: 'Reviews assigned manuscripts',
            },
            author: {
                name: 'Author',
                permissions: ['submit_manuscript', 'view_own_submissions'],
                description: 'Can submit and track own manuscripts',
            },
        },
    },
};
