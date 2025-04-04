import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const themeConfig = {
    // Color palette
    colors: {
        primary: {
            DEFAULT: "#0066cc",
            foreground: "#ffffff",
            dark: "#003366",
            light: "#3399ff",
        },
        secondary: {
            DEFAULT: "#003366",
            foreground: "#ffffff",
            dark: "#001a33",
            light: "#336699",
        },
        accent: {
            DEFAULT: "#ff6600",
            foreground: "#ffffff",
            dark: "#cc5200",
            light: "#ff8533",
        },
        background: {
            DEFAULT: "#ffffff",
            dark: "#f5f5f5",
            light: "#ffffff",
        },
        foreground: {
            DEFAULT: "#000000",
            dark: "#333333",
            light: "#666666",
        },
    },

    // Typography
    typography: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Merriweather", "serif"],
            mono: ["Fira Code", "monospace"],
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
        },
        fontWeight: {
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
        },
    },

    // Spacing
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
    },

    // Border radius
    borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
    },

    // Shadows
    shadows: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },

    // Animations
    animations: {
        duration: {
            fast: "150ms",
            normal: "300ms",
            slow: "500ms",
        },
        timing: {
            ease: "cubic-bezier(0.4, 0, 0.2, 1)",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
    },
};

export type ThemeConfig = typeof themeConfig;
