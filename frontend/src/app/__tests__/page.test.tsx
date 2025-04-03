import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

describe('Home', () => {
    it('renders the heading', () => {
        render(<Home />);
        const heading = screen.getByText('Modern Journal Systems');
        expect(heading).toBeInTheDocument();
    });

    it('renders the description', () => {
        render(<Home />);
        const description = screen.getByText('Next-generation scholarly publishing platform');
        expect(description).toBeInTheDocument();
    });
}); 