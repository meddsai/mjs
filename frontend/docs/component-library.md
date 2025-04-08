# Component Library Documentation

## Overview

Our component library is built using a combination of:
- [Headless UI](https://headlessui.com/) for accessible, unstyled components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Custom components built on top of these foundations

## Migration from Radix UI to Headless UI

We have migrated from Radix UI to Headless UI for better integration with Tailwind CSS and simpler component architecture. Here's what you need to know:

### Key Changes

1. **Dialog Components**
   - Replaced `@radix-ui/react-dialog` with `@headlessui/react` Dialog
   - New implementation provides better Tailwind integration
   - Maintains full accessibility features

2. **Alert Dialog**
   - Migrated from `@radix-ui/react-alert-dialog` to Headless UI Dialog
   - Custom styling with Tailwind for alert-specific UI

3. **Popover**
   - Switched from `@radix-ui/react-popover` to Headless UI Popover
   - Improved positioning and animation support

4. **Avatar**
   - Replaced `@radix-ui/react-avatar` with custom `PlaceholderAvatar`
   - Simplified implementation focused on placeholder avatars with initials

### Component Usage

#### Dialog
```tsx
import { Dialog } from '@/core/components/ui/dialog';

// Usage
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

#### Alert Dialog
```tsx
import { AlertDialog } from '@/core/components/ui/alert-dialog';

// Usage
<AlertDialog>
  <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>Description</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

#### Popover
```tsx
import { Popover } from '@/core/components/ui/popover';

// Usage
<Popover>
  <PopoverTrigger>Open Popover</PopoverTrigger>
  <PopoverContent>
    {/* Content */}
  </PopoverContent>
</Popover>
```

#### Placeholder Avatar
```tsx
import { PlaceholderAvatar } from '@/core/components/ui/placeholder-avatar';

// Usage
<PlaceholderAvatar name="John Doe" className="h-10 w-10" />
```

## Styling

All components are styled using Tailwind CSS. We use the following conventions:

1. **Base Styles**: Defined in the component files
2. **Customization**: Use the `className` prop to override styles
3. **Theme Integration**: Components respect the Tailwind theme configuration

## Accessibility

All components maintain WCAG 2.1 compliance through:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

## Best Practices

1. **Component Composition**
   - Use the provided compound components
   - Maintain the component hierarchy
   - Don't skip intermediate components

2. **Styling**
   - Use Tailwind classes for styling
   - Extend styles through the `className` prop
   - Maintain consistent spacing and sizing

3. **State Management**
   - Use the built-in state management
   - Avoid managing component state externally unless necessary

## Migration Guide

If you're updating existing components:

1. Remove Radix UI imports
2. Import the new Headless UI-based components
3. Update component structure to match new patterns
4. Test accessibility and functionality
5. Update any custom styling to use Tailwind classes

## Future Updates

We will continue to:
- Migrate remaining Radix UI components to Headless UI
- Add new components as needed
- Improve documentation and examples
- Maintain accessibility standards
