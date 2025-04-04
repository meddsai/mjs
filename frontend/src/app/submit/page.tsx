'use client';

import { useState } from 'react';
import { useApi } from '@/core/hooks/useApi';

interface SubmissionForm {
    title: string;
    abstract_text: string;
    keywords: string;
}

interface SubmissionResponse {
    id: string;
    status: string;
    message: string;
}

export default function SubmitPage() {
    const { loading, error, request } = useApi<SubmissionResponse>();
    const [form, setForm] = useState<SubmissionForm>({
        title: '',
        abstract_text: '',
        keywords: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await request('post', '/articles', {
                ...form,
                keywords: form.keywords.split(',').map(k => k.trim()),
                author_id: '00000000-0000-0000-0000-000000000000', // Temporary hardcoded value
            });
            if (response) {
                // Handle successful submission
                console.log('Submission successful:', response);
                // You can add a success message or redirect here
            }
        } catch (err) {
            // Error is handled by the useApi hook
            console.error('Submission failed:', err);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Submit Your Article</h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="abstract_text" className="block text-sm font-medium text-gray-700">
                        Abstract
                    </label>
                    <textarea
                        id="abstract_text"
                        name="abstract_text"
                        value={form.abstract_text}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                        Keywords (comma separated)
                    </label>
                    <input
                        type="text"
                        id="keywords"
                        name="keywords"
                        value={form.keywords}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {loading ? 'Submitting...' : 'Submit Article'}
                </button>
            </form>
        </div>
    );
}
