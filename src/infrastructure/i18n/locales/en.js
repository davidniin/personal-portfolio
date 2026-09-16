/**
 * English Translations
 * English translation file for the portfolio
 */

export default {
    // Navigation
    nav: {
        about: 'ABOUT',
        experience: 'EXPERIENCE',
        labs: 'LABS',
        contact: 'CONTACT'
    },

    // Hero Section
    hero: {
        badge: 'Open to new challenges',
        greeting: 'Hi, my name is',
        name: 'David Nin Mur',
        title: 'Senior Frontend Developer',
        subtitle: 'Building scalable web experiences.',
        description: 'Results-driven Senior Frontend Developer with extensive experience in engineering scalable frontend architectures using Vue.js and Angular. Adept at elevating coding standards through rigorous testing and peer reviews while implementing Agile best practices.',
        currentlyAt: 'Currently scaling products at',
        cta: {
            projects: 'View my projects',
            chat: 'Ask NinIA',
            contact: 'Let\'s talk!'
        }
    },

    // About Section
    about: {
        title: 'About me',
        greeting: 'Hello! I\'m David',
        paragraph1: {
            part1: 'My journey began in',
            year: '2017',
            part2: ', pivoting from systems to software development. Since then I built solutions for',
            part3: 'and',
            part4: ', and today I take on global-scale challenges at',
            part5: 'in the travel sector.'
        },
        paragraph2: {
            part1: 'At Amadeus I helped scale the team from',
            teamGrowth: '5 to 12 developers',
            part2: 'and cut production bugs by',
            bugReduction: '~30%',
            part3: 'by introducing CI/CD quality gates. I fold',
            aiTools: 'AI (Claude, ChatGPT)',
            part4: 'into my daily development and testing workflow, while still studying for a',
            degree: 'Bachelor\'s Degree in Computer Engineering',
            part5: '.'
        },
        githubCta: 'More code and technical notes on GitHub',
        bio: 'Ambitious and proactive, I am deeply committed to continuous learning and professional growth, constantly seeking to absorb knowledge from my environment. Proven mentor, fostering technical growth within teams and driving delivery efficiencies.',
        currentRole: 'I currently work as',
        company: 'Amadeus',
        location: 'in Barcelona, Spain',
        education: 'Currently pursuing a Bachelor\'s Degree in Computer Engineering',
        skills: {
            title: 'Technical Skills',
            coreTech: {
                title: 'Core Technologies'
            },
            architecture: {
                title: 'Architecture & Patterns',
                items: [
                    'Microfrontends',
                    'Microservices Integration',
                    'State Management (Pinia, Vuex)',
                    'Design Patterns',
                    'SOLID Principles',
                    'Code Refactoring'
                ]
            },
            beyondCode: {
                title: 'Beyond the Code',
                items: [
                    {
                        title: 'Mentoring & Leadership',
                        description: 'Training junior developers and interns, conducting code reviews, and fostering collaborative engineering culture.'
                    },
                    {
                        title: 'Agile Collaboration',
                        description: 'Active in Sprint Planning, Dailies, and Retrospectives to streamline delivery pipelines.'
                    },
                    {
                        title: 'Quality Assurance',
                        description: 'Implementing comprehensive testing suites and rigorous peer reviews to minimize technical debt.'
                    },
                    {
                        title: 'Continuous Learning',
                        description: 'Currently pursuing Bachelor\'s Degree in Computer Engineering while staying updated with industry trends.'
                    }
                ]
            }
        }
    },

    // Experience Section
    experience: {
        title: 'Where I\'ve worked',
        jobs: {
            amadeus: {
                company: 'Amadeus',
                role: 'Senior Frontend Developer',
                dates: 'May 2023 - Present | Barcelona',
                bullets: [
                    'Design and implement scalable, resilient frontend architectures using Vue.js for mission-critical travel industry applications handling high traffic volumes.',
                    'Maintain high engineering standards through automated testing (Jest, Cypress), rigorous code reviews, and active technical debt management.',
                    'Contribute to the continuous improvement of Agile practices, optimizing sprint planning, delivery pipelines, and release stability.',
                    'Collaborate closely with design, product, and backend teams to deliver maintainable, business-aligned frontend solutions.',
                    'Mentor junior developers and new team members, accelerating technical onboarding and fostering strong engineering best practices.'
                ]
            },

            t2c: {
                company: 'Technology 2 Client (T2C)',
                role: 'Frontend Web Developer',
                dates: 'Nov 2020 - May 2023 | Barcelona',
                bullets: [
                    'Developed a customer-facing web application from the ground up using Vue.js, following Agile methodologies and collaborative GitLab workflows.',
                    'Led the technical migration from Vue 2 to Vue 3, improving code maintainability and aligning the project with modern frontend standards.',
                    'Integrated the frontend with a microservices-based architecture via REST APIs and managed complex application state using Vuex.',
                    'Built modular, responsive, and scalable user interfaces using SCSS and Tailwind CSS.',
                    'Supported the growth of junior developers through task definition, technical guidance, and quality-focused code reviews.'
                ]
            },

            quantion: {
                company: 'Quantion',
                role: 'Full Stack Developer',
                dates: 'Jun 2019 - Jul 2020 | Barcelona',
                bullets: [
                    'Contributed to the modernization of legacy applications by migrating projects from Angular 5 to Angular 8, improving performance and maintainability.',
                    'Established and reinforced a testing culture by implementing comprehensive unit tests using Mocha and Jasmine.',
                    'Delivered full-stack features combining modern frontend development with backend services built in Node.js.',
                    'Strengthened expertise in Agile methodologies, software development best practices, and cross-functional teamwork.'
                ]
            },

            sigma: {
                company: 'Sigma',
                role: 'Java Developer',
                dates: 'Oct 2018 - Sep 2019 | Sabadell',
                bullets: [
                    'Developed enterprise software using Java 6 and internal proprietary frameworks in corporate environments.',
                    'Gained foundational experience in software development life cycles, legacy system maintenance, and enterprise architecture patterns.'
                ]
            }
        }
    },

    // Projects Section
    projects: {
        title: 'Personal projects',
        description: 'Outside of Amadeus, I use my own projects to explore where AI actually belongs — and where it doesn\'t.',
        quote: 'AI may write the code, but the engineer must design the system.',
        viewSite: 'View site',
        viewRepo: 'View repo',
        aiTag: 'AI',
        noAiTag: 'No AI',
        items: {
            ownChatIa: {
                title: 'own-chat-ia',
                description: 'An LLM running entirely in the browser, no server involved — built to understand the real limits of client-side AI firsthand.'
            },
            makeyourdocu: {
                title: 'MakeYourDocu',
                description: 'A real SaaS: connect a GitHub repo and Groq generates Functional Specs and User Guides from the code. Freemium, open source.'
            },
            changelogify: {
                title: 'Changelogify',
                description: 'The deliberate contrast: turns commits into a changelog with zero backend and zero AI — because here, the extra complexity wouldn\'t have added anything.'
            },
            findJob: {
                title: 'Smart Job Search',
                description: 'All your tech job listings, in one place — a job-search aggregator built to cut through scattered listings across sites.'
            }
        }
    },

    // Contact Section
    contact: {
        title: 'What\'s next?',
        subtitle: 'Get in touch',
        description: 'I\'m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I\'ll do my best to get back to you!',
        cta: 'Let\'s talk!',
        info: {
            email: 'Email',
            phone: 'Phone',
            location: 'Location'
        }
    },

    // Chat Widget
    chat: {
        title: 'Ask me anything',
        welcome: 'Hi there! 👋 I\'m NinIA — an AI assistant David built himself (Vue on the front, a serverless API on the back). Ask me about his experience, skills, or projects.',
        placeholder: 'Type your message...',
        send: 'Send',
        thinking: 'Thinking...',
        errors: {
            api: 'Sorry, there was a problem connecting to the AI service. Please try again later.',
            connection: 'Connection error. Please check your internet connection and try again.',
            empty: 'Please type a message before sending.'
        }
    },

    // Footer
    footer: {
        designed: 'Designed & Built by',
        rights: 'All rights reserved',
        madeWith: 'Made with',
        and: 'and',
        in: 'in'
    },

    // Common UI
    common: {
        loading: 'Loading...',
        error: 'Error',
        close: 'Close',
        open: 'Open',
        viewMore: 'View more',
        viewLess: 'View less',
        changeLanguage: 'Change language'
    }
};
