'use client';

import Link from 'next/link';
import { SearchIcon } from 'lucide-react';

export default function Header() {
    return (
        <>
            {/* Top Utility Bar */}
            <div className="bg-background py-2 border-b">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/browse-templates" className="hover:text-primary">
                            Browse Templates
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link href="/documentation" className="hover:text-primary">
                            Documentation
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/login" className="hover:text-primary">
                            Log in
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link href="/register" className="hover:text-primary">
                            Register
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-primary py-4 border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-start">
                                <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                                    MJS
                                </h1>
                                <div className="ml-4 border-l border-primary-foreground/30 pl-4">
                                    <p className="text-sm md:text-base text-primary-foreground">
                                        Modern Journal Systems
                                        <br />
                                        Create your academic journal
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    className="w-full py-1.5 px-3 pr-8 rounded text-sm border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                                />
                                <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-foreground/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
