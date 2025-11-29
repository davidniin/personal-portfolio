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
            { text: 'Engineering scalable frontend architectures using Angular, React, and Vue.js for the travel sector, ensuring high availability and performance for mission-critical applications.' },
            { text: 'Elevating code standards through comprehensive testing suites (Jest, Cypress) and rigorous peer code reviews to minimize technical debt.' },
            { text: 'Driving Agile best practices within the team to streamline delivery pipelines and improve sprint velocity.' },
            { text: 'Mentoring junior developers and interns, accelerating their technical onboarding and fostering a collaborative engineering culture.' }
        ]
    }),
    new Job({
        id: 't2c',
        company: 'Technology 2 Client (T2C)',
        role: 'Front Web Developer',
        dates: 'Nov 2020 - May 2023 | Barcelona',
        bullets: [
            { text: 'Developed a client-facing application from scratch using Vue.js, adhering to Agile methodologies and GitLab workflows.' },
            { text: 'Executed the migration of the codebase from Vue 2 to Vue 3, ensuring seamless functionality and improved modern standards.' },
            { text: 'Integrated the frontend with a microservices architecture via REST APIs and managed complex application state using Vuex.' },
            { text: 'Built responsive and modular user interfaces using SCSS and Tailwind CSS.' },
            { text: 'Supported the growth of junior developers by defining technical tasks based on use cases and conducting code reviews to ensure quality.' }
        ]
    }),
    new Job({
        id: 'quantion',
        company: 'Quantion',
        role: 'Full Stack Developer',
        dates: 'Jun 2019 - Jul 2020 | Barcelona',
        bullets: [
            { text: 'Migrated legacy codebases from Angular 5 to Angular 8, improving performance and maintainability.' },
            { text: 'Established testing culture by writing comprehensive unit tests using Mocha & Jasmine.' },
            { text: 'Developed full-stack solutions with Node.js (v14) backend services.' },
            { text: 'Deepened knowledge of AGILE methodologies and software development best practices.' }
        ]
    }),
    new Job({
        id: 'sigma',
        company: 'Sigma',
        role: 'Java Developer',
        dates: 'Oct 2018 - Sep 2019 | Sabadell',
        bullets: [
            { text: 'Worked with Java 6 and internal proprietary frameworks in enterprise development.' },
            { text: 'Gained foundational experience in software development lifecycles and enterprise patterns.' }
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
