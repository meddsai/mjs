"use client";

import Link from "next/link";
import { Brain } from "lucide-react";

export const FeaturedArticle = () => {
    return (
        <section className="bg-muted/30 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <div className="text-sm font-medium text-muted-foreground mb-2">FEATURED ARTICLE</div>
                    <h2 className="text-2xl font-bold mb-4">
                        <Link href="/article/1" className="hover:text-primary">
                            Revolutionizing Academic Publishing: A Comparative Study of Digital Journal Platforms
                        </Link>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        This comprehensive analysis explores the evolution of digital academic publishing,
                        examining how modern platforms are transforming scholarly communication and
                        knowledge dissemination in the digital age.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/article/1"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
                        >
                            Read Full Article
                        </Link>
                        <Link
                            href="/article/1/pdf"
                            className="bg-background border px-4 py-2 rounded hover:bg-muted"
                        >
                            Download PDF
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-48 flex justify-center">
                    <Brain className="w-32 h-32 text-primary/20" />
                </div>
            </div>
        </section>
    );
};
