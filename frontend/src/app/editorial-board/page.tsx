'use client';

import { MainLayout } from '@/core/components/layout';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/core/components/ui/card';
import { PlaceholderAvatar } from '@/core/components/ui/placeholder-avatar';

export default function EditorialBoardPage() {
    // Hardcoded data for now
    const editorialBoard = {
        editorInChief: {
            name: 'Prof. Sarah Johnson',
            affiliation: 'Stanford University',
            bio: 'Professor of Digital Publishing and Information Science with over 20 years of experience in academic publishing and digital transformation of scholarly communication.',
        },
        associateEditors: [
            {
                name: 'Dr. Michael Chen',
                affiliation: 'MIT',
                bio: 'Expert in digital publishing platforms and open science initiatives.',
            },
            {
                name: 'Dr. Emily Williams',
                affiliation: 'Oxford University',
                bio: 'Specialist in scholarly communication and publication ethics.',
            },
        ],
        members: [
            {
                name: 'Prof. David Lee',
                affiliation: 'University of California, Berkeley',
                expertise: 'Digital Libraries and Information Systems',
            },
            {
                name: 'Dr. Maria Garcia',
                affiliation: 'Harvard University',
                expertise: 'Publication Ethics and Research Integrity',
            },
            {
                name: 'Prof. James Wilson',
                affiliation: 'University of Cambridge',
                expertise: 'Scholarly Communication and Metrics',
            },
            {
                name: 'Dr. Lisa Brown',
                affiliation: 'University of Toronto',
                expertise: 'Open Access Publishing and Policy',
            },
        ],
    };

    return (
        <MainLayout>
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Editorial Board</h1>

                    <section className="mb-8">
                        <p className="text-muted-foreground mb-8">
                            Our Editorial Board consists of leading experts in digital publishing
                            and academic communication. The board plays a vital role in maintaining
                            academic standards, overseeing the peer-review process, and guiding
                            strategic direction.
                        </p>

                        <h2 className="text-2xl font-semibold mb-6">Editor-in-Chief</h2>
                        <Card className="mb-8">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <PlaceholderAvatar
                                    name={editorialBoard.editorInChief.name}
                                    className="h-20 w-20 text-2xl"
                                />
                                <div>
                                    <CardTitle>{editorialBoard.editorInChief.name}</CardTitle>
                                    <CardDescription>
                                        {editorialBoard.editorInChief.affiliation}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {editorialBoard.editorInChief.bio}
                                </p>
                            </CardContent>
                        </Card>

                        <h2 className="text-2xl font-semibold mb-6">Associate Editors</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {editorialBoard.associateEditors.map((editor, index) => (
                                <Card key={index}>
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <PlaceholderAvatar name={editor.name} />
                                        <div>
                                            <CardTitle>{editor.name}</CardTitle>
                                            <CardDescription>{editor.affiliation}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{editor.bio}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <h2 className="text-2xl font-semibold mb-6">Editorial Board Members</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {editorialBoard.members.map((member, index) => (
                                <Card key={index}>
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <PlaceholderAvatar name={member.name} />
                                        <div>
                                            <CardTitle>{member.name}</CardTitle>
                                            <CardDescription>{member.affiliation}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{member.expertise}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
}
