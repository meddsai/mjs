"use client";

import React, { createContext, useContext, useState } from "react";
import { type TemplateConfig, defaultTemplateConfig } from "@/templates/default/template.config";

interface TemplateContextType {
    template: TemplateConfig;
    setTemplate: (template: TemplateConfig) => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
    const [template, setTemplate] = useState<TemplateConfig>(defaultTemplateConfig);

    return (
        <TemplateContext.Provider value={{ template, setTemplate }}>
            {children}
        </TemplateContext.Provider>
    );
}

export function useTemplate() {
    const context = useContext(TemplateContext);
    if (context === undefined) {
        throw new Error("useTemplate must be used within a TemplateProvider");
    }
    return context;
}
