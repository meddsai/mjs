"use client";

import Link from "next/link";
import { Button } from "@/core/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const isActive = (route: string) => pathname === route;

    return (
        <nav className="bg-muted py-2 shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className={`font-medium py-2 border-b-2 ${isActive('/')
                                ? 'text-primary border-primary'
                                : 'text-muted-foreground hover:text-primary border-transparent hover:border-primary/40'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/journals"
                            className={`font-medium py-2 border-b-2 ${isActive('/journals')
                                ? 'text-primary border-primary'
                                : 'text-muted-foreground hover:text-primary border-transparent hover:border-primary/40'
                                }`}
                        >
                            Journals
                        </Link>
                        <Link
                            href="/submit"
                            className={`font-medium py-2 border-b-2 ${isActive('/submit')
                                ? 'text-primary border-primary'
                                : 'text-muted-foreground hover:text-primary border-transparent hover:border-primary/40'
                                }`}
                        >
                            Submit
                        </Link>
                        <Link
                            href="/about"
                            className={`font-medium py-2 border-b-2 ${isActive('/about')
                                ? 'text-primary border-primary'
                                : 'text-muted-foreground hover:text-primary border-transparent hover:border-primary/40'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-medium py-2 border-b-2 ${isActive('/contact')
                                ? 'text-primary border-primary'
                                : 'text-muted-foreground hover:text-primary border-transparent hover:border-primary/40'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        size="sm"
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 py-2 bg-background rounded shadow-md">
                        <Link
                            href="/"
                            className={`block px-4 py-2 text-sm font-medium ${isActive('/') ? 'bg-muted text-primary' : 'hover:bg-muted'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/journals"
                            className={`block px-4 py-2 text-sm font-medium ${isActive('/journals') ? 'bg-muted text-primary' : 'hover:bg-muted'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Journals
                        </Link>
                        <Link
                            href="/submit"
                            className={`block px-4 py-2 text-sm font-medium ${isActive('/submit') ? 'bg-muted text-primary' : 'hover:bg-muted'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Submit
                        </Link>
                        <Link
                            href="/about"
                            className={`block px-4 py-2 text-sm font-medium ${isActive('/about') ? 'bg-muted text-primary' : 'hover:bg-muted'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`block px-4 py-2 text-sm font-medium ${isActive('/contact') ? 'bg-muted text-primary' : 'hover:bg-muted'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
