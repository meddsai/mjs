import React from 'react';
import { MainLayout } from '@/core/components/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card';
import { Button } from '@/core/components/ui/button';
import Link from 'next/link';

const HomePage = () => {
    const features = [
        {
            title: 'Modern Publishing',
            description: 'State-of-the-art platform for academic publishing with advanced features and tools.',
            icon: '📚'
        },
        {
            title: 'Customizable',
            description: 'Tailor the platform to your journal\'s specific needs and requirements.',
            icon: '⚙️'
        },
        {
            title: 'Open Access',
            description: 'Support for both traditional and open access publishing models.',
            icon: '🔓'
        },
        {
            title: 'Peer Review',
            description: 'Streamlined peer review process with advanced workflow management.',
            icon: '👥'
        }
    ];

    const recentJournals = [
        {
            id: 'journal-1',
            title: 'Journal of Medical Research',
            description: 'A peer-reviewed journal focusing on medical research and clinical studies.',
            impactFactor: '3.2'
        },
        {
            id: 'journal-2',
            title: 'Computational Biology Journal',
            description: 'Publishing research at the intersection of biology and computer science.',
            impactFactor: '2.8'
        }
    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Modern Journal Systems</h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Next-generation scholarly publishing platform that can be customized for any academic journal.
                        Streamline your publishing workflow with our modern, flexible solution.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/journals">Browse Journals</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Journals Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Journals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {recentJournals.map((journal) => (
                            <Card key={journal.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{journal.title}</CardTitle>
                                    <CardDescription>{journal.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Impact Factor</p>
                                            <p className="font-semibold">{journal.impactFactor}</p>
                                        </div>
                                        <Button variant="outline" asChild>
                                            <Link href={`/journals/${journal.id}`}>View Journal</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join our platform and start publishing your academic journal today.
                        Our team is here to help you every step of the way.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/submit">Submit Manuscript</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default HomePage;
