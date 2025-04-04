import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Header: React.FC = () => {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-2xl font-bold">
                            MJS
                        </Link>
                        <span className="text-muted-foreground">Modern Journal Systems</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
