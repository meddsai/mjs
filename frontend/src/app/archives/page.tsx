'use client';

import { MainLayout } from '@/core/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/ui/tabs';
import Link from 'next/link';

export default function ArchivesPage() {
    // Hardcoded data for now
    const archives = {
        years: [
            {
                year: 2024,
                issues: [
                    {
                        id: '2024-1',
                        volume: 1,
                        number: 1,
                        title: 'Advances in Digital Publishing',
                        date: 'March 2024',
                        articleCount: 4,
                        specialIssue: false,
                    },
                ],
            },
        ],
        volumes: [
            {
                number: 1,
                issues: [
                    {
                        id: '2024-1',
                        number: 1,
                        title: 'Advances in Digital Publishing',
                        date: 'March 2024',
                        articleCount: 4,
                        specialIssue: false,
                    },
                ],
            },
        ],
    };

    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Archives</h1>

                    <p className="text-muted-foreground mb-8">
                        Browse all published issues of the journal. Our archives contain a
                        comprehensive collection of research articles, reviews, and studies.
                    </p>

                    <Tabs defaultValue="by-year" className="w-full">
                        <TabsList>
                            <TabsTrigger value="by-year">By Year</TabsTrigger>
                            <TabsTrigger value="by-volume">By Volume</TabsTrigger>
                        </TabsList>

                        <TabsContent value="by-year">
                            <div className="space-y-8">
                                {archives.years.map((year) => (
                                    <section key={year.year}>
                                        <h2 className="text-2xl font-semibold mb-4">{year.year}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {year.issues.map((issue) => (
                                                <Card key={issue.id}>
                                                    <CardHeader>
                                                        <CardTitle>
                                                            <Link
                                                                href={`/issue/${issue.id}`}
                                                                className="hover:text-primary"
                                                            >
                                                                Volume {issue.volume}, Issue{' '}
                                                                {issue.number}
                                                            </Link>
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-muted-foreground mb-2">
                                                            {issue.title}
                                                        </p>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                                                                {issue.articleCount} Articles
                                                            </span>
                                                            {issue.specialIssue && (
                                                                <span className="text-sm bg-muted px-2 py-1 rounded-full">
                                                                    Special Issue
                                                                </span>
                                                            )}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="by-volume">
                            <div className="space-y-8">
                                {archives.volumes.map((volume) => (
                                    <section key={volume.number}>
                                        <h2 className="text-2xl font-semibold mb-4">
                                            Volume {volume.number}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {volume.issues.map((issue) => (
                                                <Card key={issue.id}>
                                                    <CardHeader>
                                                        <CardTitle>
                                                            <Link
                                                                href={`/issue/${issue.id}`}
                                                                className="hover:text-primary"
                                                            >
                                                                Issue {issue.number}
                                                            </Link>
                                                        </CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-muted-foreground mb-2">
                                                            {issue.title}
                                                        </p>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                                                                {issue.articleCount} Articles
                                                            </span>
                                                            <span className="text-sm bg-muted px-2 py-1 rounded-full">
                                                                {issue.date}
                                                            </span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </MainLayout>
    );
}
