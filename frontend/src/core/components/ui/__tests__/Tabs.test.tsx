import { render, screen, fireEvent } from '@testing-library/react';
import { TabsHeadless, TabsTriggerHeadless, TabsContentHeadless } from '../tabs-headless';

describe('Tabs', () => {
    it('renders tabs and content correctly', () => {
        render(
            <TabsHeadless>
                <TabsTriggerHeadless value="tab1">Tab 1</TabsTriggerHeadless>
                <TabsTriggerHeadless value="tab2">Tab 2</TabsTriggerHeadless>
                <TabsContentHeadless value="tab1">Content 1</TabsContentHeadless>
                <TabsContentHeadless value="tab2">Content 2</TabsContentHeadless>
            </TabsHeadless>
        );

        // Check if tabs are rendered
        expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
        expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();

        // Check if first tab content is visible and second is hidden
        expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1');
    });

    it('switches content when tab is clicked', () => {
        render(
            <TabsHeadless>
                <TabsTriggerHeadless value="tab1">Tab 1</TabsTriggerHeadless>
                <TabsTriggerHeadless value="tab2">Tab 2</TabsTriggerHeadless>
                <TabsContentHeadless value="tab1">Content 1</TabsContentHeadless>
                <TabsContentHeadless value="tab2">Content 2</TabsContentHeadless>
            </TabsHeadless>
        );

        // Click the second tab
        fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

        // Check if second tab content is visible
        expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2');
    });

    it('applies correct ARIA attributes to tabs', () => {
        render(
            <TabsHeadless>
                <TabsTriggerHeadless value="tab1">Tab 1</TabsTriggerHeadless>
                <TabsTriggerHeadless value="tab2">Tab 2</TabsTriggerHeadless>
                <TabsContentHeadless value="tab1">Content 1</TabsContentHeadless>
                <TabsContentHeadless value="tab2">Content 2</TabsContentHeadless>
            </TabsHeadless>
        );

        // Click the second tab
        fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

        // Check ARIA attributes
        const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
        const tab2 = screen.getByRole('tab', { name: 'Tab 2' });

        expect(tab1).toHaveAttribute('aria-selected', 'false');
        expect(tab2).toHaveAttribute('aria-selected', 'true');
    });
});
