import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Journals', href: '/journals' },
    { label: 'Submit', href: '/submit' },
    { label: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
    return (
        <nav className="border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center space-x-4 py-2">
                    {navigationItems.map((item) => (
                        <Button
                            key={item.href}
                            variant="ghost"
                            className="text-sm"
                            asChild
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </nav>
    );
};
