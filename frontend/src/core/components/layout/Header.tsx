"use client";

import Link from "next/link";
import { SearchIcon } from "lucide-react";

export default function Header() {
    return (
        <>
            {/* Top Utility Bar */}
            <div className="bg-background py-2 border-b">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/login" className="hover:text-primary">Log in</Link>
                        <span className="text-muted-foreground">|</span>
                        <Link href="/register" className="hover:text-primary">Register</Link>
                    </div>
                    <Link href="/alerts" className="text-sm hover:text-primary">
                        Get Issue Alerts
                    </Link>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-[#0A1A2F] py-6">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-start">
                                <h1 className="text-3xl font-bold text-white">MJS</h1>
                                <div className="ml-4 pl-4 border-l border-white/20">
                                    <p className="text-sm text-white/90">
                                        Modern Journal Systems<br />
                                        Template-Based Academic Publishing
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="w-72">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full py-1.5 px-4 pr-10 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                                />
                                <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
