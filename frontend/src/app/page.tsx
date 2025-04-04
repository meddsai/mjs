"use client";

import { MainLayout } from "@/core/components/layout";
import { FeaturedArticle } from "@/core/components/landing/FeaturedArticle";
import { LatestArticles } from "@/core/components/landing/LatestArticles";
import { Sidebar } from "@/core/components/landing/Sidebar";

export default function Home() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <FeaturedArticle />
                        <LatestArticles />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
