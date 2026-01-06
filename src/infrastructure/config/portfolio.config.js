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

// Portfolio Projects - Live Websites
export const PROJECTS = [
    new Project({
        id: 'essentials',
        title: 'Vertex Essentials',
        url: 'https://essentials.vertexdigital.es/',
        image: '/images/projects/essentials-example.png',
        tags: ['Performance', 'Mobile First', 'Landing Page', 'WPO', 'Next.js'],
        category: 'Web Development',
        colorClass: 'text-green border-green/30 bg-green/10'
    }),
    new Project({
        id: 'professional',
        title: 'Vertex Professional',
        url: 'https://pro.vertexdigital.es/',
        image: '/images/projects/pro-example.png',
        tags: ['Corporate Identity', 'Technical SEO', 'Branding', 'Business', 'Next.js'],
        category: 'Web Development',
        colorClass: 'text-green border-green/30 bg-green/10'
    }),
    new Project({
        id: 'elite',
        title: 'Vertex Elite',
        url: 'https://elite.vertexdigital.es/',
        image: '/images/projects/elite-example.png',
        tags: ['High Conversion', 'Advanced UX', 'Motion Graphics', 'Lead Gen', 'PWA', 'Next.js'],
        category: 'Web Development',
        colorClass: 'text-green border-green/30 bg-green/10'
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
