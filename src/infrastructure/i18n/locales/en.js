/**
 * English Translations
 * English translation file for the portfolio
 */

export default {
    // Navigation
    nav: {
        about: 'ABOUT',
        experience: 'EXPERIENCE',
        howIWork: 'HOW I WORK',
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
            title: 'Skills & stack',
            subtitle: 'Grouped by how much real experience backs each one — not a wall of logos.',
            tiers: {
                core: {
                    label: 'Core stack',
                    caption: 'Six years of daily-driver experience'
                },
                comfortable: {
                    label: 'Also shipped with',
                    caption: 'Real production experience, just not my main focus'
                },
                exploring: {
                    label: 'Exploring next',
                    caption: 'Where I want to go deeper'
                }
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
                    'Engineered Vue-based microfrontend architectures for enterprise travel applications deployed across multiple clients.',
                    'Owned frontend architecture decisions, technology selection, state management strategy and coding standards.',
                    'Strengthened CI/CD pipelines and introduced quality gates, reducing production bugs and QA-detected issues by ~30%.',
                    'Improved application performance via lazy loading and data-fetching optimizations, cutting initial load times and API waterfall dependencies.',
                    'Mentored junior developers and interns through day-to-day guidance, onboarding and code reviews — more than half were subsequently hired.'
                ]
            },

            t2c: {
                company: 'Technology 2 Client (T2C)',
                role: 'Frontend Web Developer',
                dates: 'Nov 2020 - May 2023 | Barcelona',
                bullets: [
                    'Built a logistics web platform from scratch with Vue.js, owning the complete frontend lifecycle from architecture to production delivery within a small team of four developers.',
                    'Delivered real-time monitoring features for production output, warehouse inventory and shipping route status.',
                    'Integrated the frontend with a microservices-based architecture via REST APIs and managed complex application state using Vuex.',
                    'Built modular, responsive, and scalable user interfaces using SCSS and Tailwind CSS.',
                    'Mentored interns through onboarding, technical guidance, task assignment and code reviews.'
                ]
            },

            quantion: {
                company: 'Quantion',
                role: 'Full Stack Developer',
                dates: 'Jun 2019 - Jul 2020 | Barcelona',
                bullets: [
                    'Contributed to the development and maintenance of a large-scale client application using Angular and Node.js.',
                    'Participated in the Angular 5 to Angular 8 migration, helping modernize the codebase and reduce technical debt.',
                    'Established and reinforced a testing culture by implementing comprehensive unit tests using Mocha and Jasmine.',
                    'Worked within an Agile/Scrum team using GitHub-based development workflows.'
                ]
            },

            sigma: {
                company: 'Sigma',
                role: 'Java Developer',
                dates: 'Oct 2018 - May 2019 | Sabadell',
                bullets: [
                    'Started as a four-month internship and was promoted to Junior Java Developer within that same period.',
                    'Developed application features using Java 6 and the company\'s internal framework, gaining foundational experience in enterprise software development.'
                ]
            }
        }
    },

    // How I Work Section
    howIWork: {
        title: 'How I work',
        description: 'Six years in, this is the toolkit and the habits I default to — not slogans, just what actually holds up across teams and codebases.',
        items: {
            architecture: {
                title: 'Architecture & ownership',
                description: 'I own frontend architecture decisions end to end — technology selection, state management strategy, migration approach and coding standards — most recently across Vue-based microfrontends for enterprise travel applications at Amadeus.'
            },
            migrations: {
                title: 'Migrations without breaking things',
                description: 'Staged framework migrations, not rewrites: Vue 2 to 3 with the Composition API at Amadeus, and Angular 5 to 8 at Quantion, coordinating developers through the transition instead of freezing feature work.'
            },
            quality: {
                title: 'Quality gates, not just tests',
                description: 'Jest, Cypress, Mocha and Jasmine paired with CI/CD quality gates I introduced at Amadeus — production bugs and QA-detected issues down by ~30%.'
            },
            mentoring: {
                title: 'Mentoring & team growth',
                description: 'Day-to-day guidance, onboarding and code reviews for junior developers and interns — more than half were later hired, as the Amadeus team scaled from 5 to 12 developers.'
            },
            ai: {
                title: 'AI as a workflow, not a gimmick',
                description: 'Claude and ChatGPT are part of my daily loop for development, debugging, testing and technical research — a tool I direct, the same way I would a linter or a debugger.'
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
        featuredTag: 'Featured',
        items: {
            ownChatIa: {
                title: 'own-chat-ia',
                description: 'An LLM running entirely in the browser via WebGPU, no server involved — built to understand the real limits of client-side inference firsthand: model loading, memory pressure, and how far a UI can be pushed before the hardware pushes back.'
            },
            makeyourdocu: {
                title: 'MakeYourDocu',
                description: 'A real SaaS, built end to end: sign in with GitHub OAuth, connect a repo, and Groq generates Functional Specs and User Guides straight from the code. Freemium, open source.'
            },
            changelogify: {
                title: 'Changelogify',
                description: 'The deliberate contrast: turns commits into a changelog with zero backend and zero AI — because here, the extra complexity wouldn\'t have added anything.'
            },
            findJob: {
                title: 'Smart Job Search',
                description: 'All your tech job listings, in one place — an AI-powered aggregator that cuts through scattered listings across sites.'
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
