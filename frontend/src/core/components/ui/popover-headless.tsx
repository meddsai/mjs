import * as React from "react"
import { Popover as HeadlessPopover } from "@headlessui/react"
import { cn } from "@/core/utils"

interface PopoverProps {
    children: React.ReactNode
    open?: boolean
    onClose?: () => void
}

const Popover = ({ children, open, onClose }: PopoverProps) => {
    return (
        <HeadlessPopover className="relative">
            {children}
        </HeadlessPopover>
    )
}

const PopoverTrigger = HeadlessPopover.Button

const PopoverContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        align?: "start" | "center" | "end"
        sideOffset?: number
    }
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <HeadlessPopover.Panel
        ref={ref}
        className={cn(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
            "transform transition-all duration-200",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            "data-[side=top]:slide-in-from-bottom-2",
            className
        )}
        style={{
            position: "absolute",
            top: "100%",
            left: align === "start" ? "0" : align === "end" ? "auto" : "50%",
            right: align === "end" ? "0" : "auto",
            transform: align === "center" ? "translateX(-50%)" : "none",
            marginTop: `${sideOffset}px`,
        }}
        {...props}
    />
))
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent }
