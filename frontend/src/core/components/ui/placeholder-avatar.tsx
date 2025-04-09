import { cn } from '@/core/lib/utils';

interface PlaceholderAvatarProps {
    name: string;
    className?: string;
}

export function PlaceholderAvatar({ name, className }: PlaceholderAvatarProps) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <div
            className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground',
                className
            )}
        >
            <span className="text-sm font-medium">{initials}</span>
        </div>
    );
}
