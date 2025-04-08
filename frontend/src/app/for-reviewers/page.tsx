"use client";

import { MainLayout } from '@/core/components/layout';
import {
    Tabs as TabsHeadless,
    TabsContent as TabsContentHeadless,
    TabsList as TabsListHeadless,
    TabsTrigger as TabsTriggerHeadless,
} from '@/core/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/ui/card';
import { Button } from '@/core/components/ui/button';
import Link from 'next/link';

export default function ForReviewersPage() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Information for Reviewers</h1>

                    <TabsHeadless defaultIndex={0} className="w-full">
                        <TabsListHeadless className="grid w-full grid-cols-3">
                            <TabsTriggerHeadless>Guidelines</TabsTriggerHeadless>
                            <TabsTriggerHeadless>Review Process</TabsTriggerHeadless>
                            <TabsTriggerHeadless>Benefits</TabsTriggerHeadless>
                        </TabsListHeadless>

                        <TabsContentHeadless>
                            <section className="space-y-6">
                                <p className="text-muted-foreground mb-6">
                                    Thank you for your interest in reviewing for our journal. Your expertise helps ensure the quality of published research.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Review Criteria</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Originality and significance</li>
                                                <li>Scientific accuracy</li>
                                                <li>Methodology</li>
                                                <li>Presentation and clarity</li>
                                                <li>Literature review</li>
                                                <li>Ethical considerations</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Expectations</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Complete reviews within agreed timeframe</li>
                                                <li>Provide constructive feedback</li>
                                                <li>Maintain confidentiality</li>
                                                <li>Declare any conflicts of interest</li>
                                                <li>Follow ethical guidelines</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                        </TabsContentHeadless>

                        <TabsContentHeadless>
                            <section className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-2xl font-bold text-primary mb-2">1</div>
                                            <h3 className="font-semibold mb-2">Invitation</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Receive and respond to review invitations
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-2xl font-bold text-primary mb-2">2</div>
                                            <h3 className="font-semibold mb-2">Review</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Access manuscript and submit review
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-2xl font-bold text-primary mb-2">3</div>
                                            <h3 className="font-semibold mb-2">Decision</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Receive notification of final decision
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold mb-2">Timeframe</h3>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                            <li>Initial response to invitation: 5 days</li>
                                            <li>Complete review: 21 days</li>
                                            <li>Revision review: 14 days</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </section>
                        </TabsContentHeadless>

                        <TabsContentHeadless>
                            <section className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Recognition</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Annual acknowledgment</li>
                                                <li>Certificate of contribution</li>
                                                <li>Publons integration</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Professional Development</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Stay current with research</li>
                                                <li>Improve critical analysis skills</li>
                                                <li>Network with experts</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-muted/50 border rounded-lg p-6">
                                    <h3 className="text-lg font-semibold mb-3">Join Our Reviewer Pool</h3>
                                    <p className="text-muted-foreground mb-4">
                                        We&apos;re looking for experienced researchers to join our reviewer pool. If you&apos;re interested, please apply below.
                                    </p>
                                    <Button asChild>
                                        <Link href="/reviewer-application">Apply to be a Reviewer</Link>
                                    </Button>
                                </div>
                            </section>
                        </TabsContentHeadless>
                    </TabsHeadless>
                </div>
            </main>
        </MainLayout>
    );
}
