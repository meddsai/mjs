"use client";

import { useState } from "react"
import { MainLayout } from "@/core/components/layout"
import { Button } from "@/core/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/components/ui/card"
import { Input } from "@/core/components/ui/input"
import { Label } from "@/core/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/core/components/ui/radio-group"
import { ScrollArea } from "@/core/components/ui/scroll-area"
import { Separator } from "@/core/components/ui/separator"
import { Slider } from "@/core/components/ui/slider"
import { Switch } from "@/core/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/components/ui/tabs"
import { siteConfig } from "@/core/config/site"
import { themeConfig } from "@/core/config/theme"
import { toast } from "@/core/components/ui/use-toast"

interface TemplateConfig {
    journalName: string
    primaryColor: string
    layout: string
    features: {
        openAccess: boolean
        peerReview: boolean
        manuscriptSubmission: boolean
        authorDashboard: boolean
        analytics: boolean
        socialSharing: boolean
        comments: boolean
    }
    theme: {
        fontFamily: string
        borderRadius: number
        darkMode: boolean
    }
}

const TemplateDemoPage = () => {
    const [config, setConfig] = useState<TemplateConfig>({
        journalName: "My Journal",
        primaryColor: "#0066cc",
        layout: "modern",
        features: {
            openAccess: true,
            peerReview: true,
            manuscriptSubmission: true,
            authorDashboard: true,
            analytics: false,
            socialSharing: false,
            comments: false,
        },
        theme: {
            fontFamily: "sans-serif",
            borderRadius: 0.5,
            darkMode: false,
        },
    })

    const [isPreviewMode, setIsPreviewMode] = useState(false)

    const handleFeatureToggle = (feature: string) => {
        setConfig(prev => ({
            ...prev,
            features: {
                ...prev.features,
                [feature]: !prev.features[feature as keyof typeof prev.features]
            }
        }))
    }

    const handleThemeChange = (key: string, value: any) => {
        setConfig(prev => ({
            ...prev,
            theme: {
                ...prev.theme,
                [key]: value
            }
        }))
    }

    const handleSaveConfig = () => {
        // In a real implementation, this would save to a config file
        toast({
            title: "Configuration Saved",
            description: "Your journal configuration has been saved successfully.",
        })
    }

    const handleApplyChanges = () => {
        setIsPreviewMode(true)
        toast({
            title: "Changes Applied",
            description: "Your changes have been applied to the preview.",
        })
    }

    const handleReset = () => {
        setConfig({
            journalName: "My Journal",
            primaryColor: "#0066cc",
            layout: "modern",
            features: {
                openAccess: true,
                peerReview: true,
                manuscriptSubmission: true,
                authorDashboard: true,
                analytics: false,
                socialSharing: false,
                comments: false,
            },
            theme: {
                fontFamily: "sans-serif",
                borderRadius: 0.5,
                darkMode: false,
            },
        })
        setIsPreviewMode(false)
    }

    return (
        <MainLayout>
        <div className="container mx-auto p-8 space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold">MJS Template Demo</h1>
                        <p className="text-xl text-muted-foreground">
                            Customize your journal platform using the options below
                        </p>
                </div>
                    <div className="space-x-4">
                        <Button variant="outline" onClick={handleReset}>Reset</Button>
                        <Button onClick={handleSaveConfig}>Save Configuration</Button>
                </div>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Configuration Panel */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Configuration Options</CardTitle>
                            <CardDescription>
                                Adjust these settings to customize your journal platform
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <Tabs defaultValue="general">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="general">General</TabsTrigger>
                                    <TabsTrigger value="features">Features</TabsTrigger>
                                    <TabsTrigger value="theme">Theme</TabsTrigger>
                                </TabsList>

                                <TabsContent value="general" className="space-y-4">
                                    {/* Journal Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="journalName">Journal Name</Label>
                                        <Input
                                            id="journalName"
                                            value={config.journalName}
                                            onChange={(e) => setConfig(prev => ({ ...prev, journalName: e.target.value }))}
                                            placeholder="Enter your journal name"
                                        />
                                    </div>

                                    {/* Primary Color */}
                                    <div className="space-y-2">
                                        <Label>Primary Color</Label>
                                        <div className="flex items-center gap-4">
                                            <Input
                                                type="color"
                                                value={config.primaryColor}
                                                onChange={(e) => setConfig(prev => ({ ...prev, primaryColor: e.target.value }))}
                                                className="w-20 h-10 p-1"
                                            />
                                            <span className="text-sm text-muted-foreground">{config.primaryColor}</span>
                                        </div>
                                    </div>

                                    {/* Layout Selection */}
                                    <div className="space-y-2">
                                        <Label>Layout Style</Label>
                                        <RadioGroup
                                            value={config.layout}
                                            onValueChange={(value) => setConfig(prev => ({ ...prev, layout: value }))}
                                            className="grid grid-cols-3 gap-4"
                                        >
                                            <div>
                                                <RadioGroupItem value="modern" id="modern" className="peer sr-only" />
                                                <Label
                                                    htmlFor="modern"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    Modern
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem value="classic" id="classic" className="peer sr-only" />
                                                <Label
                                                    htmlFor="classic"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    Classic
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem value="minimal" id="minimal" className="peer sr-only" />
                                                <Label
                                                    htmlFor="minimal"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    Minimal
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </TabsContent>

                                <TabsContent value="features" className="space-y-4">
                                    <div className="space-y-2">
                                        {Object.entries(config.features).map(([feature, enabled]) => (
                                            <div key={feature} className="flex items-center justify-between">
                                                <Label htmlFor={feature} className="capitalize">
                                                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                                                </Label>
                                                <Switch
                                                    id={feature}
                                                    checked={enabled}
                                                    onCheckedChange={() => handleFeatureToggle(feature)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="theme" className="space-y-4">
                                    {/* Font Family */}
                                    <div className="space-y-2">
                                        <Label>Font Family</Label>
                                        <RadioGroup
                                            value={config.theme.fontFamily}
                                            onValueChange={(value) => handleThemeChange('fontFamily', value)}
                                            className="grid grid-cols-2 gap-4"
                                        >
                                            <div>
                                                <RadioGroupItem value="sans-serif" id="sans-serif" className="peer sr-only" />
                                                <Label
                                                    htmlFor="sans-serif"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    Sans Serif
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem value="serif" id="serif" className="peer sr-only" />
                                                <Label
                                                    htmlFor="serif"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    Serif
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {/* Border Radius */}
                                    <div className="space-y-2">
                                        <Label>Border Radius</Label>
                                        <Slider
                                            value={[config.theme.borderRadius * 100]}
                                            onValueChange={([value]) => handleThemeChange('borderRadius', value / 100)}
                                            max={100}
                                            step={1}
                                        />
                                        <div className="text-sm text-muted-foreground">
                                            {Math.round(config.theme.borderRadius * 100)}%
                                        </div>
                                    </div>

                                    {/* Dark Mode */}
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="darkMode">Dark Mode</Label>
                                        <Switch
                                            id="darkMode"
                                            checked={config.theme.darkMode}
                                            onCheckedChange={(checked) => handleThemeChange('darkMode', checked)}
                                        />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    {/* Preview Panel */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Preview</CardTitle>
                            <CardDescription>
                                See how your journal will look with these settings
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className={`space-y-4 ${isPreviewMode ? 'animate-fade-in' : ''}`}
                                style={{
                                    fontFamily: config.theme.fontFamily,
                                    '--border-radius': `${config.theme.borderRadius}rem`,
                                } as React.CSSProperties}
                            >
                                {/* Preview Header */}
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2
                                                className="text-xl font-bold"
                                                style={{ color: config.primaryColor }}
                                            >
                                                {config.journalName}
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                A customizable academic journal platform
                                            </p>
                                        </div>
                                        <div className="space-x-2">
                                            <Button variant="outline">Login</Button>
                                            <Button>Register</Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Navigation */}
                                <div className="border rounded-lg p-4">
                                    <div className="flex space-x-4">
                                        <Button variant="ghost">Home</Button>
                                        <Button variant="ghost">About</Button>
                                        <Button variant="ghost">Journals</Button>
                                        <Button variant="ghost">Submit</Button>
                                        <Button variant="ghost">Contact</Button>
                                    </div>
                                </div>

                                {/* Preview Content */}
                                <div className="border rounded-lg p-4">
                                    <h3 className="text-lg font-semibold mb-2">Featured Articles</h3>
                                    <div className="space-y-2">
                                        <div className="p-2 border rounded">
                                            <h4 className="font-medium">Recent Research in {config.journalName}</h4>
                                            <p className="text-sm text-muted-foreground">Published: Today</p>
                                            {config.features.socialSharing && (
                                                <div className="mt-2 flex space-x-2">
                                                    <Button variant="ghost" size="sm">Share</Button>
                                                    <Button variant="ghost" size="sm">Tweet</Button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-2 border rounded">
                                            <h4 className="font-medium">New Discoveries</h4>
                                            <p className="text-sm text-muted-foreground">Published: Yesterday</p>
                                            {config.features.comments && (
                                                <div className="mt-2">
                                                    <Button variant="ghost" size="sm">View Comments (3)</Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Footer */}
                                <div className="border rounded-lg p-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">About</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {config.journalName} is a leading academic journal in its field.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Quick Links</h4>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>Submit Manuscript</li>
                                                <li>Review Process</li>
                                                <li>Editorial Board</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Contact</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Email: contact@{config.journalName.toLowerCase().replace(/\s+/g, '')}.org
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
            </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-8">
                    <Button variant="outline" onClick={handleReset}>Reset</Button>
                    <Button onClick={handleApplyChanges}>Apply Changes</Button>
                </div>
            </div>
        </MainLayout>
    )
}

export default TemplateDemoPage
