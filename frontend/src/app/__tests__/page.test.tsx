import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

describe('Home', () => {
    it('renders the heading', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { name: 'MJS' });
        expect(heading).toBeInTheDocument();
    });

    it('renders the description', () => {
        render(<Home />);
        const description = screen.getByText((content, element) => {
            return element?.tagName.toLowerCase() === 'p' &&
                element?.className.includes('text-primary-foreground') &&
                content.includes('Modern Journal Systems');
        });
        expect(description).toBeInTheDocument();
    });
});
