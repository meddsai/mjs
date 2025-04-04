import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';
import Link from 'next/link';

describe('Button', () => {
    it('renders with default variant and size', () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-primary');
        expect(button).toHaveClass('text-primary-foreground');
        expect(button).toHaveClass('h-10');
        expect(button).toHaveClass('px-4');
        expect(button).toHaveClass('py-2');
    });

    it('renders with different variants', () => {
        const { rerender } = render(<Button variant="secondary">Secondary</Button>);
        expect(screen.getByRole('button')).toHaveClass('bg-secondary');

        rerender(<Button variant="outline">Outline</Button>);
        expect(screen.getByRole('button')).toHaveClass('border');

        rerender(<Button variant="ghost">Ghost</Button>);
        expect(screen.getByRole('button')).toHaveClass('hover:bg-accent');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="sm">Small</Button>);
        expect(screen.getByRole('button')).toHaveClass('h-9');

        rerender(<Button size="lg">Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('h-11');

        rerender(<Button size="icon">Icon</Button>);
        expect(screen.getByRole('button')).toHaveClass('h-10');
        expect(screen.getByRole('button')).toHaveClass('w-10');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies custom className', () => {
        render(<Button className="custom-class">Custom</Button>);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders as a link when using asChild with Link', () => {
        render(
            <Button asChild>
                <Link href="/test">Link</Link>
            </Button>
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/test');
        expect(link).toHaveClass('bg-primary');
    });
});
