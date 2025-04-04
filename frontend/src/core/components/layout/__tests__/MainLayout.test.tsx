import { render, screen } from '@testing-library/react';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
    it('renders children correctly', () => {
        render(
            <MainLayout>
                <div data-testid="test-child">Test Content</div>
            </MainLayout>
        );

        expect(screen.getByTestId('test-child')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders header and footer', () => {
        render(<MainLayout>Content</MainLayout>);

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('applies correct classes to main content', () => {
        render(<MainLayout>Content</MainLayout>);

        const main = screen.getByRole('main');
        expect(main).toHaveClass('flex-1');
        expect(main).toHaveClass('container');
        expect(main).toHaveClass('mx-auto');
        expect(main).toHaveClass('px-4');
    });
});
