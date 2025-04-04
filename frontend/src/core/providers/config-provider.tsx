"use client"

import React, { createContext, useContext } from "react"
import { type JournalConfig } from "@/config/journal.config"
import { siteConfig } from "@/core/config/site"
import { themeConfig } from "@/core/config/theme"

interface ConfigContextType {
  journalConfig: JournalConfig
  siteConfig: typeof siteConfig
  themeConfig: typeof themeConfig
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const value = {
    journalConfig: {
      name: "MJS Journal",
      description: "A customizable academic journal platform",
      logo: "/logo.png",
      favicon: "/favicon.ico",
      social: {
        twitter: "https://twitter.com/mjsjournal",
        github: "https://github.com/mjsjournal",
      },
    },
    siteConfig,
    themeConfig,
  }

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  const context = useContext(ConfigContext)
  if (context === undefined) {
    throw new Error("useConfig must be used within a ConfigProvider")
  }
  return context
}
