"use client";

import { MainLayout } from '@/core/components/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card';
import { TabsHeadless, TabsTriggerHeadless, TabsContentHeadless } from '@/core/components/ui/tabs-headless';
import { Button } from '@/core/components/ui/button';
import Link from 'next/link';

export default function ForReviewersPage() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">For Reviewers</h1>

                    <p className="text-muted-foreground mb-8">
                        Thank you for your interest in reviewing for our journal. Peer review is a critical
                        component of scholarly publishing, and we greatly value the contributions of our reviewers.
                    </p>

                    <TabsHeadless className="w-full">
                        <TabsTriggerHeadless value="guidelines">Guidelines</TabsTriggerHeadless>
                        <TabsTriggerHeadless value="process">Review Process</TabsTriggerHeadless>
                        <TabsTriggerHeadless value="benefits">Benefits</TabsTriggerHeadless>

                        <TabsContentHeadless value="guidelines">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Reviewer Guidelines</CardTitle>
                                    <CardDescription>
                                        Key points to consider when reviewing submissions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <h3 className="text-lg font-semibold">Evaluation Criteria</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Originality and significance of the research</li>
                                        <li>Soundness of methodology and analysis</li>
                                        <li>Clarity of presentation and writing</li>
                                        <li>Appropriate use of citations and references</li>
                                        <li>Adherence to ethical standards</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold mt-6">Review Format</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Provide a general overview of the submission</li>
                                        <li>List major and minor concerns</li>
                                        <li>Include specific recommendations for improvement</li>
                                        <li>Be constructive and professional in your feedback</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContentHeadless>

                        <TabsContentHeadless value="process">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Review Process</CardTitle>
                                    <CardDescription>
                                        Understanding the peer review workflow
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <h3 className="text-lg font-semibold">Timeline</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Initial review request and acceptance (2-3 days)</li>
                                        <li>First round review (2-3 weeks)</li>
                                        <li>Revision review if needed (1-2 weeks)</li>
                                        <li>Final recommendation</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold mt-6">Steps</h3>
                                    <ol className="list-decimal pl-6 space-y-2">
                                        <li>Receive invitation to review</li>
                                        <li>Accept or decline within 3 days</li>
                                        <li>Access manuscript and supporting materials</li>
                                        <li>Submit comprehensive review</li>
                                        <li>Provide recommendation (Accept/Revise/Reject)</li>
                                    </ol>
                                </CardContent>
                            </Card>
                        </TabsContentHeadless>

                        <TabsContentHeadless value="benefits">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Benefits of Reviewing</CardTitle>
                                    <CardDescription>
                                        Why become a reviewer for our journal
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <h3 className="text-lg font-semibold">Professional Development</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Stay current with latest research</li>
                                        <li>Improve your own writing and research</li>
                                        <li>Gain recognition in your field</li>
                                        <li>Build your academic reputation</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold mt-6">Reviewer Recognition</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Annual acknowledgment in the journal</li>
                                        <li>Certificate of contribution</li>
                                        <li>Priority consideration for your submissions</li>
                                        <li>Access to reviewer resources and workshops</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContentHeadless>
                    </TabsHeadless>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Join Our Reviewer Pool</h2>
                        <p className="text-muted-foreground mb-4">
                            We&apos;re looking for experienced researchers to join our reviewer pool. If you&apos;re interested, please apply below.
                        </p>
                        <Button asChild>
                            <Link href="/reviewer-application">Apply to be a Reviewer</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
