import { render, screen } from '@testing-library/react';
import { FeaturedArticle } from '../FeaturedArticle';

const mockArticle = {
    id: '1',
    title: 'Test Article',
    authors: [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
    ],
    abstract: 'This is a test abstract',
    keywords: ['test', 'article'],
    pdfUrl: '/article/1/pdf',
};

describe('FeaturedArticle', () => {
    it('renders article title and authors', () => {
        render(<FeaturedArticle article={mockArticle} />);

        expect(screen.getByText('Test Article')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });

    it('renders abstract and keywords', () => {
        render(<FeaturedArticle article={mockArticle} />);

        expect(screen.getByText('This is a test abstract')).toBeInTheDocument();
        expect(screen.getByText('test')).toBeInTheDocument();
        expect(screen.getByText('article')).toBeInTheDocument();
    });

    it('renders PDF download link', () => {
        render(<FeaturedArticle article={mockArticle} />);

        const pdfLink = screen.getByText('Download PDF');
        expect(pdfLink).toBeInTheDocument();
        expect(pdfLink.closest('a')).toHaveAttribute('href', '/article/1/pdf');
    });

    it('renders article link', () => {
        render(<FeaturedArticle article={mockArticle} />);

        const articleLink = screen.getByText('Read Full Article');
        expect(articleLink).toBeInTheDocument();
        expect(articleLink.closest('a')).toHaveAttribute('href', '/article/1');
    });
});
