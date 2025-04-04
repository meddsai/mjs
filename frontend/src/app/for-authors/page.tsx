"use client";

import { MainLayout } from '@/core/components/layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/core/components/ui/accordion';
import { Card, CardContent } from '@/core/components/ui/card';
import { Button } from '@/core/components/ui/button';
import Link from 'next/link';

export default function ForAuthorsPage() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Information for Authors</h1>

                    <Tabs defaultValue="guidelines" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                            <TabsTrigger value="process">Submission Process</TabsTrigger>
                            <TabsTrigger value="ethics">Publication Ethics</TabsTrigger>
                            <TabsTrigger value="fees">Publication Fees</TabsTrigger>
                        </TabsList>

                        <TabsContent value="guidelines">
                            <section className="space-y-6">
                                <div className="prose max-w-none">
                                    <p className="text-muted-foreground mb-6">
                                        Welcome to the author guidelines. Please read these instructions carefully before submitting your manuscript.
                                    </p>
                                </div>

                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="manuscript">
                                        <AccordionTrigger>Manuscript Preparation</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Use 12-point font size</li>
                                                <li>Double-space the manuscript</li>
                                                <li>Number all pages consecutively</li>
                                                <li>Use standard file formats (.doc, .docx, or .pdf)</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="structure">
                                        <AccordionTrigger>Article Structure</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Title page with author information</li>
                                                <li>Abstract (max 250 words)</li>
                                                <li>Keywords (3-6)</li>
                                                <li>Introduction</li>
                                                <li>Methods</li>
                                                <li>Results</li>
                                                <li>Discussion</li>
                                                <li>Conclusions</li>
                                                <li>References</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="references">
                                        <AccordionTrigger>References</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>Cite references in the text by name and year</li>
                                                <li>List references alphabetically</li>
                                                <li>Include DOI when available</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </section>
                        </TabsContent>

                        <TabsContent value="process">
                            <section className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-2xl font-bold text-primary mb-2">1</div>
                                            <h3 className="font-semibold mb-2">Prepare</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Format your manuscript according to the guidelines
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-2xl font-bold text-primary mb-2">2</div>
                                            <h3 className="font-semibold mb-2">Submit</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Submit through our online system
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="text-2xl font-bold text-primary mb-2">3</div>
                                            <h3 className="font-semibold mb-2">Review</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Track your submission through peer review
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Button asChild>
                                    <Link href="/submit">Submit Manuscript</Link>
                                </Button>
                            </section>
                        </TabsContent>

                        <TabsContent value="ethics">
                            <section className="space-y-6">
                                <p className="text-muted-foreground mb-6">
                                    We are committed to maintaining high standards of publication ethics and follow
                                    the guidelines set by the Committee on Publication Ethics (COPE).
                                </p>

                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="authorship">
                                        <AccordionTrigger>Authorship</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                <li>All authors must have made substantial contributions</li>
                                                <li>Order of authorship must be agreed upon</li>
                                                <li>Changes to authorship must be approved by all authors</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="plagiarism">
                                        <AccordionTrigger>Plagiarism</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                All submissions are checked for plagiarism. Authors must ensure their work is original
                                                and properly cite all sources.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="conflict">
                                        <AccordionTrigger>Conflict of Interest</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                Authors must declare any potential conflicts of interest that could influence
                                                their research or its interpretation.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </section>
                        </TabsContent>

                        <TabsContent value="fees">
                            <section className="space-y-6">
                                <p className="text-muted-foreground mb-6">
                                    Information about publication fees and any available waivers.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold mb-2">Article Processing Charges</h3>
                                            <p className="text-muted-foreground mb-4">
                                                Please contact the editorial office for current APC rates.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold mb-2">Waivers</h3>
                                            <p className="text-muted-foreground mb-4">
                                                Waivers are available for authors from low-income countries.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </MainLayout>
    );
}
