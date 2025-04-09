import React from 'react';
import { MainLayout } from '@/core/components/layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/ui/tabs';

const AboutPage = () => {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">About MJS</h1>

                <Tabs defaultValue="mission" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="mission">Mission</TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                        <TabsTrigger value="team">Team</TabsTrigger>
                        <TabsTrigger value="stats">Statistics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="mission">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-gray-700 mb-4">
                                Modern Journal Systems (MJS) is a next-generation scholarly
                                publishing platform that can be customized for any academic journal.
                                Our mission is to provide a modern, flexible, and user-friendly
                                platform for academic publishing that meets the needs of
                                researchers, editors, and readers in the digital age.
                            </p>
                            <p className="text-gray-700 mb-6">
                                MJS provides an interdisciplinary platform for researchers,
                                clinicians, and technologists to collaborate on innovative
                                solutions. The platform welcomes original research, systematic
                                reviews, clinical applications, and technological advancements
                                across various fields.
                            </p>
                        </section>
                    </TabsContent>

                    <TabsContent value="history">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Platform History</h2>
                            <p className="text-gray-700 mb-6">
                                MJS was established in 2024 in response to the need for modern,
                                flexible journal management systems. Built by a team of researchers
                                and developers with experience in both academic publishing and
                                software development, the platform aims to bridge the gap between
                                traditional publishing and modern technology.
                            </p>

                            <div className="relative border-l-2 border-primary/30 pl-6 ml-4 space-y-8 mb-6">
                                <div className="relative">
                                    <div className="absolute -left-8 top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                                        <span className="text-xs text-white">1</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">Planning Phase (2023)</h3>
                                    <p className="text-sm text-gray-700">
                                        Initial planning and scope definition took place, focusing
                                        on creating a flexible platform that could be customized for
                                        different types of academic journals.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </TabsContent>

                    <TabsContent value="stats">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Platform Statistics</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-muted/30 border rounded-lg p-6 text-center">
                                    <h3 className="font-semibold mb-2">Customizable</h3>
                                    <p className="text-3xl font-bold text-primary mb-2">100%</p>
                                    <p className="text-sm text-gray-700">
                                        Fully customizable for any journal&apos;s needs
                                    </p>
                                </div>

                                <div className="bg-muted/30 border rounded-lg p-6 text-center">
                                    <h3 className="font-semibold mb-2">Modern UI</h3>
                                    <p className="text-3xl font-bold text-primary mb-2">100%</p>
                                    <p className="text-sm text-gray-700">
                                        Built with modern web technologies
                                    </p>
                                </div>

                                <div className="bg-muted/30 border rounded-lg p-6 text-center">
                                    <h3 className="font-semibold mb-2">Open Source</h3>
                                    <p className="text-3xl font-bold text-primary mb-2">100%</p>
                                    <p className="text-sm text-gray-700">
                                        Free and open source software
                                    </p>
                                </div>
                            </div>
                        </section>
                    </TabsContent>
                </Tabs>
            </div>
        </MainLayout>
    );
};

export default AboutPage;
