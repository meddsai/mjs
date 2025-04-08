import * as React from "react"
import { Tab as HeadlessTab } from "@headlessui/react"
import { cn } from "@/core/utils"

interface TabsProps {
    children: React.ReactNode
    defaultIndex?: number
    onChange?: (index: number) => void
}

const Tabs = ({ children, defaultIndex = 0, onChange }: TabsProps) => {
    return (
        <HeadlessTab.Group
            defaultIndex={defaultIndex}
            onChange={onChange}
        >
            {children}
        </HeadlessTab.Group>
    )
}

const TabsList = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <HeadlessTab.List
        ref={ref}
        className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
            className
        )}
        {...props}
    />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
    <HeadlessTab
        ref={ref}
        className={({ selected }) =>
            cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                selected
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground",
                className
            )
        }
        {...props}
    />
))
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <HeadlessTab.Panel
        ref={ref}
        className={cn(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
        )}
        {...props}
    />
))
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
