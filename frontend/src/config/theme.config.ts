export interface JournalTheme {
    // Color Scheme
    colors: {
        primary: string
        secondary: string
        accent: string
        background: string
        text: string
        // Component-specific colors
        header: {
            background: string
            text: string
        }
        footer: {
            background: string
            text: string
        }
        sidebar?: {
            background: string
            text: string
            activeItem: string
        }
    }

    // Typography
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

    // Layout
    layout: {
        maxWidth: string
        contentWidth: string
        sidebarWidth?: string
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

    // Components
    components: {
        // Card styling
        card: {
            borderRadius: string
            shadow: string
            padding: string
        }
        // Button variants
        button: {
            borderRadius: string
            padding: string
            fontSize: string
        }
        // Form elements
        input: {
            borderRadius: string
            borderColor: string
            focusColor: string
        }
        // Navigation
        nav: {
            height: string
            itemSpacing: string
        }
    }

    // Responsive Breakpoints
    breakpoints: {
        sm: string
        md: string
        lg: string
        xl: string
    }

    // Dark Mode Configuration
    darkMode?: {
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
