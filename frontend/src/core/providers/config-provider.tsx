import React, { createContext, useContext } from "react"
import { type JournalConfig } from "@/config/journal.config"
import { mortonConfig } from "@/config/morton.config"

const ConfigContext = createContext<JournalConfig | null>(null)

export function useJournalConfig() {
    const config = useContext(ConfigContext)
    if (!config) {
        throw new Error("useJournalConfig must be used within a ConfigProvider")
    }
    return config
}

interface ConfigProviderProps {
    config?: JournalConfig
    children: React.ReactNode
}

export function ConfigProvider({ config = mortonConfig, children }: ConfigProviderProps) {
    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    )
}
