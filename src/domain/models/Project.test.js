import { describe, it, expect } from 'vitest';
import { Project } from './Project.js';

describe('Project', () => {
    it('defaults featured and usesAI to false when not provided', () => {
        const project = new Project({ id: 'p1', title: 'Project', tags: [], url: 'https://example.com' });
        expect(project.featured).toBe(false);
        expect(project.usesAI).toBe(false);
    });

    it('respects an explicit featured flag', () => {
        const project = new Project({ id: 'p1', title: 'Project', tags: [], url: 'https://example.com', featured: true });
        expect(project.featured).toBe(true);
    });
});
