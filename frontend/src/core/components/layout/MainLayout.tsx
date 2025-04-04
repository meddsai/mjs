import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />

            <main className="flex-1 container mx-auto px-4 py-6">
                {children}
            </main>

            <Footer />
        </div>
    );
};
