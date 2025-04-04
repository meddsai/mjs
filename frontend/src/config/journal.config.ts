import { type JournalTheme } from "./theme.config"

export interface JournalConfig {
    // Basic Information
    name: string
    shortName: string
    description: string
    logo: {
        light: string
        dark: string
    }

    // Contact & Organization
    organization: {
        name: string
        website: string
    }
    contact: {
        email: string
        address?: string
        phone?: string
    }

    // Visual Theme
    theme: {
        colors: {
            primary: string
            secondary: string
            accent: string
            background: string
            text: string
            header: {
                background: string
                text: string
            }
            footer: {
                background: string
                text: string
            }
            sidebar: {
                background: string
                text: string
                activeItem: string
            }
        }
        typography: {
            fontFamily: {
                heading: string
                body: string
                mono: string
            }
            fontSize: {
                base: string
                heading1: string
                heading2: string
                heading3: string
                small: string
            }
        }
        layout: {
            maxWidth: string
            contentWidth: string
            sidebarWidth: string
            headerHeight: string
            footerHeight: string
            spacing: {
                xs: string
                sm: string
                md: string
                lg: string
                xl: string
            }
        }
        components: {
            card: {
                borderRadius: string
                shadow: string
                padding: string
            }
            button: {
                borderRadius: string
                padding: string
                fontSize: string
            }
            input: {
                borderRadius: string
                borderColor: string
                focusColor: string
            }
            nav: {
                height: string
                itemSpacing: string
            }
        }
        breakpoints: {
            sm: string
            md: string
            lg: string
            xl: string
        }
        darkMode: {
            colors: {
                primary: string
                secondary: string
                accent: string
                background: string
                text: string
            }
            components: {
                card: {
                    background: string
                    border: string
                }
                input: {
                    background: string
                    border: string
                }
            }
        }
    }

    // Features
    features: {
        submissions: {
            enabled: boolean
            allowedFileTypes: string[]
            maxFileSize: number // in MB
            requireAbstract: boolean
            requireKeywords: boolean
            requireCoverLetter: boolean
        }
        peerReview: {
            enabled: boolean
            type: "single-blind" | "double-blind" | "open"
            rounds: number
            minReviewers: number
            maxReviewers: number
            reviewDeadlineDays: number
        }
        users: {
            allowSelfRegistration: boolean
            requireEmailVerification: boolean
            allowOrcidLogin: boolean
            allowGoogleLogin: boolean
        }
        publishing: {
            issueNumbering: "continuous" | "volume-issue"
            doiPrefix?: string
            openAccess: boolean
            licenseType: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "custom"
        }
    }

    // Workflow Configuration
    workflow: {
        // Editorial Process
        editorial: {
            initialScreening: boolean
            editorAssignment: boolean
            copyEditing: boolean
            productionEditing: boolean
        }

        // Automated Tasks
        automation: {
            authorReminders: boolean
            reviewerReminders: boolean
            editorReminders: boolean
            plagiarismCheck: boolean
            referenceCheck: boolean
        }
    }

    // Roles and Permissions
    roles: {
        admin: {
            name: string
            permissions: string[]
            description: string
        }
        editor: {
            name: string
            permissions: string[]
            description: string
        }
        reviewer: {
            name: string
            permissions: string[]
            description: string
        }
        author: {
            name: string
            permissions: string[]
            description: string
        }
    }

    // Template Configuration
    template: {
        // Workflow Configuration
        workflow: {
            // Editorial Process
            editorial: {
                initialScreening: boolean
                editorAssignment: boolean
                copyEditing: boolean
                productionEditing: boolean
            }

            // Automated Tasks
            automation: {
                authorReminders: boolean
                reviewerReminders: boolean
                editorReminders: boolean
                plagiarismCheck: boolean
                referenceCheck: boolean
            }
        }

        // Roles and Permissions
        roles: {
            [key: string]: {
                name: string
                permissions: string[]
                description: string
            }
        }

        // Custom Fields
        customFields?: {
            submission?: Array<{
                name: string
                type: "text" | "select" | "multiselect" | "date" | "file"
                required: boolean
                options?: string[]
                label: string
                description?: string
            }>
            review?: Array<{
                name: string
                type: "text" | "select" | "rating" | "boolean"
                required: boolean
                options?: string[]
                label: string
                description?: string
            }>
        }
    }
}
