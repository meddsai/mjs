import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

import { cn } from "@/core/utils"

const AspectRatio = React.forwardRef<
    React.ElementRef<typeof AspectRatioPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AspectRatioPrimitive.Root
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        {...props}
    />
))
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName

export { AspectRatio }
