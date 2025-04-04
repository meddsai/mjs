import { cn } from '../cn';

describe('cn utility function', () => {
    it('merges class names correctly', () => {
        expect(cn('class1', 'class2')).toBe('class1 class2');
        expect(cn('class1', null, 'class2')).toBe('class1 class2');
        expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
        expect(cn('class1', false, 'class2')).toBe('class1 class2');
        expect(cn('class1', true && 'class2')).toBe('class1 class2');
    });

    it('handles conditional classes', () => {
        expect(cn('base', { 'conditional': true })).toBe('base conditional');
        expect(cn('base', { 'conditional': false })).toBe('base');
        expect(cn('base', { 'conditional1': true, 'conditional2': false })).toBe('base conditional1');
    });

    it('handles arrays of classes', () => {
        expect(cn(['class1', 'class2'])).toBe('class1 class2');
        expect(cn('base', ['class1', 'class2'])).toBe('base class1 class2');
    });

    it('handles mixed inputs', () => {
        expect(cn('base', ['class1', 'class2'], { 'conditional': true })).toBe('base class1 class2 conditional');
        expect(cn('base', ['class1', null], { 'conditional': false })).toBe('base class1');
    });
});
