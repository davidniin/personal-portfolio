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

// Portfolio Projects - Personal projects exploring AI and architecture
export const PROJECTS = [
    new Project({
        id: 'ownChatIa',
        title: 'own-chat-ia',
        url: 'https://github.com/davidniin/own-chat-ia',
        tags: ['WebGPU', 'LLM', 'No backend'],
        usesAI: true
    }),
    new Project({
        id: 'makeyourdocu',
        title: 'MakeYourDocu',
        url: 'https://make-your-docu-frontend.vercel.app/',
        tags: ['Groq API', 'GitHub OAuth', 'Freemium'],
        usesAI: true
    }),
    new Project({
        id: 'changelogify',
        title: 'Changelogify',
        url: 'https://www.changelogify.es/',
        tags: ['Client-side', 'No backend'],
        usesAI: false
    }),
    new Project({
        id: 'findJob',
        title: 'Smart Job Search',
        url: 'https://find-job-beryl-gamma.vercel.app/',
        tags: ['Job aggregation'],
        usesAI: false
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

// Core tech stack - paired with a brand icon, so not translated (proper nouns)
export const CORE_TECH_STACK = [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'Angular', icon: 'angular' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'nodejs' }
];
