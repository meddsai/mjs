import React from 'react';
import { MainLayout } from '@/core/components/layout';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/core/components/ui/card';
import { Button } from '@/core/components/ui/button';

const JournalsPage = () => {
    // This would typically come from an API or database
    const journals = [
        {
            id: 'journal-1',
            title: 'Journal of Medical Research',
            description:
                'A peer-reviewed journal focusing on medical research and clinical studies.',
            impactFactor: '3.2',
            submissionCount: 156,
            publishedCount: 42,
        },
        {
            id: 'journal-2',
            title: 'Computational Biology Journal',
            description: 'Publishing research at the intersection of biology and computer science.',
            impactFactor: '2.8',
            submissionCount: 89,
            publishedCount: 23,
        },
        {
            id: 'journal-3',
            title: 'Environmental Science Review',
            description: 'Comprehensive reviews and research in environmental sciences.',
            impactFactor: '4.1',
            submissionCount: 203,
            publishedCount: 67,
        },
    ];

    return (
        <MainLayout>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Journals</h1>
                    <Button>Create New Journal</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {journals.map((journal) => (
                        <Card key={journal.id}>
                            <CardHeader>
                                <CardTitle>{journal.title}</CardTitle>
                                <CardDescription>{journal.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Impact Factor
                                        </p>
                                        <p className="font-semibold">{journal.impactFactor}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Submissions</p>
                                        <p className="font-semibold">{journal.submissionCount}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Published</p>
                                        <p className="font-semibold">{journal.publishedCount}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="outline" className="flex-1">
                                        View
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        Edit
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        Settings
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default JournalsPage;
