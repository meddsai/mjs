import React from 'react';
import { MainLayout } from '@/core/components/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card';
import { Button } from '@/core/components/ui/button';
import { Input } from '@/core/components/ui/input';
import { Label } from '@/core/components/ui/label';
import { Textarea } from '@/core/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/core/components/ui/select';

const SubmitPage = () => {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Submit Manuscript</h1>

                <Card>
                    <CardHeader>
                        <CardTitle>New Submission</CardTitle>
                        <CardDescription>
                            Submit your manuscript to one of our journals. Please fill out all required fields.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="journal">Select Journal</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a journal" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="journal-1">Journal of Medical Research</SelectItem>
                                        <SelectItem value="journal-2">Computational Biology Journal</SelectItem>
                                        <SelectItem value="journal-3">Environmental Science Review</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="title">Manuscript Title</Label>
                                <Input id="title" placeholder="Enter the title of your manuscript" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="abstract">Abstract</Label>
                                <Textarea
                                    id="abstract"
                                    placeholder="Enter your abstract"
                                    className="min-h-[100px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="keywords">Keywords</Label>
                                <Input
                                    id="keywords"
                                    placeholder="Enter keywords separated by commas"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="file">Upload Manuscript</Label>
                                <Input
                                    id="file"
                                    type="file"
                                    accept=".doc,.docx,.pdf"
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Button variant="outline">Save as Draft</Button>
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
    );
};

export default SubmitPage;
