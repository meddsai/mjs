'use client';

import { useState } from 'react';
import { MainLayout } from '@/core/components/layout';
import { Button } from '@/core/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/core/components/ui/card';
import { useApi } from '@/core/hooks/useApi';
import { ApiService } from '@/core/services/api';

interface SubmissionResponse {
    id: string;
    status: string;
    message: string;
}

const apiService = new ApiService(process.env.NEXT_PUBLIC_API_URL || '');

export default function SubmitPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { error, execute } = useApi<SubmissionResponse>(() =>
        apiService.post('/submissions', {
            data: {
                // Add submission data here
            },
        })
    );

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await execute();
            // Handle successful submission
        } catch (err) {
            // Error is handled by useApi
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <MainLayout>
            <div className="container mx-auto p-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Submit Manuscript</CardTitle>
                        <CardDescription>Submit your manuscript for review</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {error && <div className="text-sm text-red-500 mb-4">{error.message}</div>}
                        <Button onClick={handleSubmit} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
    );
}
