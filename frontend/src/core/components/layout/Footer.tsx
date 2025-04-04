import React from 'react';
import Link from 'next/link';

const footerLinks = [
    {
        title: 'About',
        links: [
            { label: 'About MJS', href: '/about' },
            { label: 'Team', href: '/team' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Documentation', href: '/docs' },
            { label: 'API', href: '/api' },
            { label: 'Support', href: '/support' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
        ],
    },
];

export const Footer: React.FC = () => {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">MJS</h2>
                        <p className="text-muted-foreground">
                            Modern Journal Systems - A next-generation platform for academic publishing.
                        </p>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Modern Journal Systems. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
