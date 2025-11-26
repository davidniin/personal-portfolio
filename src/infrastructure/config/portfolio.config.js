import { Job } from '../../domain/models/Job.js';
import { Project } from '../../domain/models/Project.js';

/**
 * Portfolio Configuration
 * Central source of truth for portfolio data
 */

// Navigation Links
export const NAV_LINKS = [
    { href: '#about', label: 'ABOUT', number: '01.' },
    { href: '#experience', label: 'EXPERIENCE', number: '02.' },
    { href: '#projects', label: 'LABS', number: '03.' },
    { href: '#contact', label: 'CONTACT', number: '04.' },
];

// Professional Experience
export const JOBS = [
    new Job({
        id: 'amadeus',
        company: 'Amadeus',
        role: 'Senior Frontend Developer',
        dates: 'May 2023 - Present | Barcelona',
        bullets: [
            { text: 'Code Quality & Testing: Ensuring robust applications through best practices and thorough testing strategies.' },
            { text: 'Agile Collaboration: Active participation in cross-functional teams (sprint planning, dailies, retrospectives).' },
            { text: 'Mentorship: Helping junior developers and interns integrate into the team and grow their technical capabilities.' },
            { text: 'Performance Optimization: Implementing new features while maintaining high performance standards for global users.' }
        ]
    }),
    new Job({
        id: 't2c',
        company: 'T2C',
        role: 'Front Web Developer',
        dates: 'Nov 2020 - May 2023 | Barcelona',
        bullets: [
            { text: 'Migration Strategy: Successfully led the migration from Vue 2 to Vue 3, improving maintainability and performance.' },
            { text: 'Architecture: Connected the frontend with a complex microservices architecture.' },
            { text: 'State Management: Implemented robust state management using Vuex to handle complex business logic.' },
            { text: 'Leadership: Responsible for training junior developers and reviewing code.' }
        ]
    }),
    new Job({
        id: 'quantion',
        company: 'Quantion',
        role: 'Full Stack Developer',
        dates: 'Jun 2019 - Jul 2020 | Barcelona',
        bullets: [
            { text: 'Angular Upgrade: Migrated legacy codebases from Angular 5 to Angular 8.' },
            { text: 'Testing Culture: Wrote comprehensive unit tests using Mocha & Jasmine.' },
            { text: 'Full Stack: Worked with Node.js (v14) backend services.' },
            { text: 'Methodology: Deepened knowledge of AGILE foundations.' }
        ]
    }),
    new Job({
        id: 'sigma',
        company: 'Sigma',
        role: 'Java Developer',
        dates: 'Oct 2018 - Sep 2019 | Sabadell',
        bullets: [
            { text: 'Enterprise Development: Worked with Java 6 and internal proprietary frameworks.' },
            { text: 'Fundamentals: Gained foundational experience in software development lifecycles.' }
        ]
    })
];

// Portfolio Projects
export const PROJECTS = [
    new Project({
        title: 'vue3-migration-poc',
        description: 'A proof-of-concept repository exploring the migration path from Options API to Composition API. Includes custom composables for state management.',
        tags: ['Vue 3', 'Vite', 'TypeScript'],
        category: 'Architecture',
        colorClass: 'text-green border-green/30 bg-green/10'
    }),
    new Project({
        title: 'frontend-testing-suite',
        description: 'A comprehensive setup for unit and integration testing. Demonstrates how to achieve high code coverage in legacy and modern frameworks.',
        tags: ['Mocha/Jasmine', 'Jest', 'CI/CD'],
        category: 'Quality Assurance',
        colorClass: 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10'
    }),
    new Project({
        title: 'ng-microfrontend-shell',
        description: 'An experimental shell application using Module Federation to load Angular micro-frontends dynamically. Focus on shared state performance.',
        tags: ['Angular 14+', 'RxJS', 'Webpack 5'],
        category: 'Experiment',
        colorClass: 'text-blue-500 border-blue-500/30 bg-blue-500/10'
    })
];

// Social Links
export const SOCIAL_LINKS = {
    github: 'https://github.com/DavidNinMur',
    linkedin: 'https://www.linkedin.com/in/david-nin/',
    email: 'dninmur@gmail.com'
};

// Personal Info
export const PERSONAL_INFO = {
    name: 'David Nin',
    title: 'Senior Frontend Developer',
    location: 'Barcelona',
    company: 'Amadeus',
    tagline: 'Engineering the future of web.',
    description: 'Senior Frontend Engineer based in Barcelona. I transform complex architectural challenges into clean, accessible, and high-performance interfaces.'
};
