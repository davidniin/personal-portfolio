import { Job } from '../../domain/models/Job.js';
import { Project } from '../../domain/models/Project.js';

/**
 * Portfolio Configuration
 * Central source of truth for portfolio data
 */

// Navigation Links
export const NAV_LINKS = [
    { href: '#about', label: 'ABOUT', labelKey: 'about', number: '01.' },
    { href: '#experience', label: 'EXPERIENCE', labelKey: 'experience', number: '02.' },
    { href: '#projects', label: 'LABS', labelKey: 'labs', number: '03.' },
    { href: '#contact', label: 'CONTACT', labelKey: 'contact', number: '04.' },
];

// Professional Experience
export const JOBS = [
    new Job({
        id: 'vertex',
        company: 'Vertex Digital',
        role: 'CEO & Founder',
        dates: 'Jan 2024 - Present | Barcelona'
    }),
    new Job({
        id: 'amadeus',
        company: 'Amadeus',
        role: 'Senior Frontend Developer',
        dates: 'May 2023 - Present | Barcelona'
    }),
    new Job({
        id: 't2c',
        company: 'Technology 2 Client (T2C)',
        role: 'Front Web Developer',
        dates: 'Nov 2020 - May 2023 | Barcelona'
    }),
    new Job({
        id: 'quantion',
        company: 'Quantion',
        role: 'Full Stack Developer',
        dates: 'Jun 2019 - Jul 2020 | Barcelona'
    }),
    new Job({
        id: 'sigma',
        company: 'Sigma',
        role: 'Java Developer',
        dates: 'Oct 2018 - Sep 2019 | Sabadell'
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
        tags: ['Jest', 'Vitest', 'Cypress'],
        category: 'Quality Assurance',
        colorClass: 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10'
    }),
    new Project({
        title: 'ng-microfrontend-shell',
        description: 'An experimental shell application using Module Federation to load Angular micro-frontends dynamically. Focus on shared state and performance.',
        tags: ['Angular 14+', 'RxJS', 'Webpack 5'],
        category: 'Experiment',
        colorClass: 'text-blue-500 border-blue-500/30 bg-blue-500/10'
    })
];

// Social Links
export const SOCIAL_LINKS = {
    github: 'https://github.com/davidniin',
    linkedin: 'https://www.linkedin.com/in/david-nin/',
    email: 'dninmur@gmail.com',
    phone: '+34 620 911 778',
    location: 'Sabadell, Barcelona, Spain'
};

// Personal Info
export const PERSONAL_INFO = {
    name: 'David Nin Mur',
    title: 'Senior Frontend Developer',
    location: 'Barcelona, Spain',
    company: 'Amadeus',
    tagline: 'Building scalable web experiences.',
    description: 'Results-driven Senior Frontend Developer with extensive experience in engineering scalable frontend architectures using Vue.js and Angular. Adept at elevating coding standards through rigorous testing and peer reviews while implementing Agile best practices.',
    bio: 'Ambitious and proactive, I am deeply committed to continuous learning and professional growth, constantly seeking to absorb knowledge from my environment. Proven mentor, fostering technical growth within teams and driving delivery efficiencies.',
    education: 'Currently pursuing a Bachelor\'s Degree in Computer Engineering'
};

// Technical Skills
export const SKILLS = {
    coreTech: [
        'JavaScript / TypeScript',
        'Vue.js (Ecosystem)',
        'Angular',
        'React',
        'Node.js',
        'HTML5 / CSS3'
    ],
    frameworks: [
        'Vue 3 (Composition API)',
        'Angular 14+',
        'Vite / Webpack',
        'Tailwind CSS',
        'SASS/SCSS'
    ],
    testing: [
        'Jest',
        'Vitest',
        'Cypress',
        'Mocha',
        'Jasmine'
    ],
    architecture: [
        'Microfrontends',
        'Microservices Integration',
        'State Management (Pinia, Vuex)',
        'Design Patterns',
        'SOLID Principles',
        'Code Refactoring'
    ],
    tools: [
        'Git / GitLab',
        'CI/CD',
        'Agile / Scrum',
        'Code Reviews',
        'Technical Mentoring'
    ]
};
