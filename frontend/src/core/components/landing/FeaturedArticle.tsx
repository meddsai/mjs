"use client";

import Link from "next/link";
import { Brain } from "lucide-react";

interface Author {
    id: string;
    name: string;
}

interface Article {
    id: string;
    title: string;
    authors: Author[];
    abstract: string;
    keywords: string[];
    pdfUrl: string;
}

interface FeaturedArticleProps {
    article: Article;
}

export const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
    return (
        <section className="bg-muted/30 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <div className="text-sm font-medium text-muted-foreground mb-2">FEATURED ARTICLE</div>
                    <h2 className="text-2xl font-bold mb-4">
                        <Link href={`/article/${article.id}`} className="hover:text-primary">
                            {article.title}
                        </Link>
                    </h2>
                    <div className="mb-4">
                        {article.authors.map((author, index) => (
                            <span key={author.id}>
                                <Link href={`/author/${author.id}`} className="hover:text-primary">
                                    {author.name}
                                </Link>
                                {index < article.authors.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{article.abstract}</p>
                    <div className="mb-4">
                        {article.keywords.map((keyword, index) => (
                            <Link
                                key={keyword}
                                href={`/search?keyword=${encodeURIComponent(keyword)}`}
                                className="inline-block bg-muted px-2 py-1 rounded text-sm mr-2 mb-2 hover:bg-primary hover:text-primary-foreground"
                            >
                                {keyword}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href={`/article/${article.id}`}
                            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
                        >
                            Read Full Article
                        </Link>
                        <Link
                            href={article.pdfUrl}
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
