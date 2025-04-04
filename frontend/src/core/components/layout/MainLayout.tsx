"use client";

import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
}
