'use client';

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <main role="main" className="flex-1 container mx-auto px-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}
