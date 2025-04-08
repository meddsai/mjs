import { Tab } from "@headlessui/react";
import { cn } from "@/core/lib/utils";

interface TabsProps {
    children: React.ReactNode;
    defaultValue?: string;
    className?: string;
}

interface TabsTriggerProps {
    children: React.ReactNode;
    value: string;
    className?: string;
}

interface TabsContentProps {
    children: React.ReactNode;
    value: string;
    className?: string;
}

export function TabsHeadless({ children, defaultValue, className }: TabsProps) {
    return (
        <Tab.Group defaultIndex={defaultValue ? 0 : undefined}>
            <div className={cn("w-full", className)}>
                <Tab.List className="flex space-x-1 rounded-lg bg-muted p-1">
                    {children}
                </Tab.List>
            </div>
        </Tab.Group>
    );
}

export function TabsTriggerHeadless({ children, value, className }: TabsTriggerProps) {
    return (
        <Tab
            className={({ selected }) =>
                cn(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                        ? "bg-white shadow text-primary"
                        : "text-muted-foreground hover:bg-white/[0.12] hover:text-primary",
                    className
                )
            }
        >
            {children}
        </Tab>
    );
}

export function TabsContentHeadless({ children, value, className }: TabsContentProps) {
    return (
        <Tab.Panel
            className={cn(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                className
            )}
        >
            {children}
        </Tab.Panel>
    );
}
