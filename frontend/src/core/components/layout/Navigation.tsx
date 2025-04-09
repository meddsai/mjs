'use client';

import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (route: string) => pathname === route;

    return (
        <nav className="bg-white border-b">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className={`py-4 ${
                                isActive('/')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/current-issue"
                            className={`py-4 ${
                                isActive('/current-issue')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            Current Issue
                        </Link>
                        <Link
                            href="/archives"
                            className={`py-4 ${
                                isActive('/archives')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            Archives
                        </Link>
                        <Link
                            href="/for-authors"
                            className={`py-4 ${
                                isActive('/for-authors')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            For Authors
                        </Link>
                        <Link
                            href="/for-reviewers"
                            className={`py-4 ${
                                isActive('/for-reviewers')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            For Reviewers
                        </Link>
                        <Link
                            href="/editorial-board"
                            className={`py-4 ${
                                isActive('/editorial-board')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            Editorial Board
                        </Link>
                        <Link
                            href="/about"
                            className={`py-4 ${
                                isActive('/about')
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-foreground hover:text-primary'
                            }`}
                        >
                            About
                        </Link>
                    </div>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <MenuIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-2">
                        <Link
                            href="/"
                            className={`block py-2 ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/current-issue"
                            className={`block py-2 ${isActive('/current-issue') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Current Issue
                        </Link>
                        <Link
                            href="/archives"
                            className={`block py-2 ${isActive('/archives') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Archives
                        </Link>
                        <Link
                            href="/for-authors"
                            className={`block py-2 ${isActive('/for-authors') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            For Authors
                        </Link>
                        <Link
                            href="/for-reviewers"
                            className={`block py-2 ${isActive('/for-reviewers') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            For Reviewers
                        </Link>
                        <Link
                            href="/editorial-board"
                            className={`block py-2 ${isActive('/editorial-board') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Editorial Board
                        </Link>
                        <Link
                            href="/about"
                            className={`block py-2 ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
