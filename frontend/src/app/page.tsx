"use client";

import { MainLayout } from "@/core/components/layout";
import { FeaturedArticle } from "@/core/components/landing/FeaturedArticle";
import { LatestArticles } from "@/core/components/landing/LatestArticles";
import { Sidebar } from "@/core/components/landing/Sidebar";

const mockFeaturedArticle = {
    id: "1",
    title: "Revolutionizing Academic Publishing: A Comparative Study of Digital Journal Platforms",
    authors: [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" }
    ],
    abstract: "This comprehensive analysis explores the evolution of digital academic publishing, examining how modern platforms are transforming scholarly communication and knowledge dissemination in the digital age.",
    keywords: ["digital publishing", "academic journals", "scholarly communication"],
    pdfUrl: "/article/1/pdf"
};

export default function Home() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <FeaturedArticle article={mockFeaturedArticle} />
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
