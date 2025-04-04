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
        website?: string
    }
    contact: {
        email: string
        address?: string
        phone?: string
    }

    // Visual Theme
    theme: JournalTheme

    // Features Configuration
    features: {
        // Submission Features
        submissions: {
            enabled: boolean
            allowedFileTypes: string[]
            maxFileSize: number // in MB
            requireAbstract: boolean
            requireKeywords: boolean
            requireCoverLetter: boolean
        }

        // Peer Review
        peerReview: {
            enabled: boolean
            type: "single-blind" | "double-blind" | "open"
            rounds: number
            minReviewers: number
            maxReviewers: number
            reviewDeadlineDays: number
        }

        // User Features
        users: {
            allowSelfRegistration: boolean
            requireEmailVerification: boolean
            allowOrcidLogin: boolean
            allowGoogleLogin: boolean
        }

        // Publishing Features
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
