import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs';

describe('Tabs', () => {
    it('renders tabs with correct content', () => {
        render(
            <Tabs defaultValue="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content 1</TabsContent>
                <TabsContent value="tab2">Content 2</TabsContent>
            </Tabs>
        );

        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();
        expect(screen.getByText('Content 1')).toBeInTheDocument();
        expect(screen.queryByText('Content 2')).not.toBeVisible();
    });

    it('switches content when tab is clicked', () => {
        render(
            <Tabs defaultValue="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content 1</TabsContent>
                <TabsContent value="tab2">Content 2</TabsContent>
            </Tabs>
        );

        fireEvent.click(screen.getByText('Tab 2'));
        expect(screen.queryByText('Content 1')).not.toBeVisible();
        expect(screen.getByText('Content 2')).toBeVisible();
    });

    it('applies correct classes to active tab', () => {
        render(
            <Tabs defaultValue="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content 1</TabsContent>
                <TabsContent value="tab2">Content 2</TabsContent>
            </Tabs>
        );

        const tab1 = screen.getByText('Tab 1').closest('button');
        const tab2 = screen.getByText('Tab 2').closest('button');

        expect(tab1).toHaveClass('data-[state=active]:bg-primary');
        expect(tab2).not.toHaveClass('data-[state=active]:bg-primary');

        fireEvent.click(screen.getByText('Tab 2'));
        expect(tab1).not.toHaveClass('data-[state=active]:bg-primary');
        expect(tab2).toHaveClass('data-[state=active]:bg-primary');
    });
});
