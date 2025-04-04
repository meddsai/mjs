"use client";

import { MainLayout } from '@/core/components/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card';
import { Badge } from '@/core/components/ui/badge';
import Link from 'next/link';

export default function CurrentIssuePage() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Current Issue</h1>

                    <section className="mb-8">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <CardTitle>Inaugural Issue: Digital Publishing Innovation</CardTitle>
                                        <CardDescription>
                                            Volume 1, Issue 1 • June 2024
                                        </CardDescription>
                                    </div>
                                    <Badge variant="secondary">
                                        3 Articles
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our inaugural issue explores the latest advances in digital publishing platforms,
                                    open science initiatives, and modern scholarly communication.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-6">Articles in this Issue</h2>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <Badge variant="outline" className="mb-2">
                                                Research Article
                                            </Badge>
                                            <CardTitle className="text-xl">
                                                <Link href="/article/2024-1-1" className="hover:text-primary">
                                                    Modern Journal Systems: A New Paradigm for Academic Publishing
                                                </Link>
                                            </CardTitle>
                                            <CardDescription>
                                                <Link href="/author/sj1" className="hover:text-primary">Sarah Johnson</Link>,{' '}
                                                <Link href="/author/mc1" className="hover:text-primary">Michael Chen</Link>
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        This paper introduces Modern Journal Systems (MJS), a next-generation publishing
                                        platform designed to meet the evolving needs of academic publishing in the digital age.
                                        We discuss the architecture, features, and potential impact on scholarly communication.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["digital publishing", "open science", "scholarly communication"].map((keyword) => (
                                            <Link
                                                key={keyword}
                                                href={`/search?keyword=${encodeURIComponent(keyword)}`}
                                                className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-full"
                                            >
                                                {keyword}
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <Badge variant="outline" className="mb-2">
                                                Review
                                            </Badge>
                                            <CardTitle className="text-xl">
                                                <Link href="/article/2024-1-2" className="hover:text-primary">
                                                    The Evolution of Academic Publishing Platforms: A Systematic Review
                                                </Link>
                                            </CardTitle>
                                            <CardDescription>
                                                <Link href="/author/ew1" className="hover:text-primary">Emily Williams</Link>,{' '}
                                                <Link href="/author/dl1" className="hover:text-primary">David Lee</Link>
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        A comprehensive review of academic publishing platforms over the past decade,
                                        analyzing trends, challenges, and future directions in digital scholarly communication.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["systematic review", "publishing platforms", "digital transformation"].map((keyword) => (
                                            <Link
                                                key={keyword}
                                                href={`/search?keyword=${encodeURIComponent(keyword)}`}
                                                className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-full"
                                            >
                                                {keyword}
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <Badge variant="outline" className="mb-2">
                                                Technical Report
                                            </Badge>
                                            <CardTitle className="text-xl">
                                                <Link href="/article/2024-1-3" className="hover:text-primary">
                                                    Implementing FAIR Principles in Modern Publishing Systems
                                                </Link>
                                            </CardTitle>
                                            <CardDescription>
                                                <Link href="/author/jw1" className="hover:text-primary">James Wilson</Link>
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        This technical report outlines the implementation of FAIR (Findable, Accessible,
                                        Interoperable, Reusable) principles in modern journal systems, providing practical
                                        guidelines and case studies.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["FAIR principles", "data management", "interoperability"].map((keyword) => (
                                            <Link
                                                key={keyword}
                                                href={`/search?keyword=${encodeURIComponent(keyword)}`}
                                                className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-full"
                                            >
                                                {keyword}
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
}
