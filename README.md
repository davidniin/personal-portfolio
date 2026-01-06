# 🚀 Personal Portfolio - David Nin

> A modern, professional portfolio built with Vue 3, showcasing advanced frontend architecture patterns and best practices.

[![Vue 3](https://img.shields.io/badge/Vue-3.4.21-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Table of Contents

- [About This Project](#about-this-project)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deploy](#build--deploy)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About This Project

This portfolio is **more than just a showcase** — it's a demonstration of **enterprise-level frontend architecture** applied to a personal project. Built with a focus on:

- **Clean Architecture** - Domain-Driven Design (DDD) principles
- **Scalability** - Modular component structure ready to grow
- **Maintainability** - Clear separation of concerns across layers
- **Modern Patterns** - Options API with `setup()` function
- **Code Organization** - External HTML templates and component folders
- **Best Practices** - Professional development standards

### Why This Architecture?

Most portfolios are simple single-file applications. This project takes a **different approach**, implementing patterns typically seen in large-scale enterprise applications:

1. **DDD Architecture** - Separates business logic, infrastructure, application logic, and presentation
2. **Component Folders** - Each component has its own directory (Angular-style)
3. **External Templates** - HTML separated from JavaScript for better organization
4. **Options API with setup()** - Combines the best of Composition and Options APIs
5. **Composables** - Reusable logic extracted into application layer

This makes the codebase **easier to understand, test, and extend** — perfect for demonstrating professional development skills.

---

## ✨ Key Features

### 🎨 Design & UX
- **Dark Theme** - Custom color palette optimized for readability
- **Smooth Animations** - Fade-in effects and spotlight cursor tracking
- **Responsive Design** - Mobile-first approach, works on all devices
- **Custom Scrollbar** - Themed scrollbar matching the design system
- **Interactive Elements** - Accordions, tabs, and smooth scrolling

### 🤖 AI Integration
- **Google Gemini Chat** - AI-powered chat widget to answer questions about me
- **Markdown Support** - Rich text responses with code highlighting
- **Context-Aware** - Pre-loaded with my professional information

### 🏗️ Technical Excellence
- **TypeScript-Ready** - Structured for easy TypeScript migration
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance** - Optimized bundle size and lazy loading ready
- **Accessibility** - ARIA labels and keyboard navigation support

---

## 🏛️ Architecture

This project follows **Domain-Driven Design (DDD)** principles with four distinct layers:

```
┌─────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                    │
│              (UI Components, Templates)                 │
│  • BaseButton, BaseAccordion, BaseTabs, BaseCard       │
│  • TheNavbar, TheFooter, SocialLinks                   │
│  • HeroSection, AboutSection, ExperienceSection, etc.  │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                  APPLICATION LAYER                      │
│              (Composables, Use Cases)                   │
│  • useNavigation, useChat, useScrollAnimation          │
│  • useExperience, useAccordion, useSpotlight           │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                 INFRASTRUCTURE LAYER                    │
│           (External Services, Configuration)            │
│  • GeminiClient (API Integration)                      │
│  • portfolio.config.js (Data Configuration)            │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                    DOMAIN LAYER                         │
│              (Business Logic, Entities)                 │
│  • Job, Project, ChatMessage (Models)                  │
│  • ChatService (Business Logic)                        │
└─────────────────────────────────────────────────────────┘
```
---

## 🛠️ Tech Stack

### Core Framework
- **Vue 3.4.21** - Progressive JavaScript framework
- **Vite 5.1.6** - Next-generation frontend tooling

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformations
- **Autoprefixer 10.4.18** - CSS vendor prefixes
- **SASS Embedded 1.93.3** - SCSS preprocessing

### UI & Icons
- **Lucide Vue Next 0.344.0** - Beautiful, consistent icons

### AI & Utilities
- **Google Gemini API** - AI chat integration
- **Marked 12.0.0** - Markdown parser for chat responses

---

## 📁 Project Structure

```
personal-portfolio/
├── src/
│   ├── domain/                     # Business Logic Layer
│   │   ├── models/                 # Domain entities
│   │   │   ├── Job.js
│   │   │   ├── Project.js
│   │   │   └── ChatMessage.js
│   │   └── services/               # Domain services
│   │       └── ChatService.js
│   │
│   ├── infrastructure/             # External Services Layer
│   │   ├── api/                    # API clients
│   │   │   └── GeminiClient.js
│   │   └── config/                 # Configuration
│   │       └── portfolio.config.js
│   │
│   ├── application/                # Application Logic Layer
│   │   └── composables/            # Reusable logic
│   │       ├── useNavigation.js
│   │       ├── useChat.js
│   │       ├── useScrollAnimation.js
│   │       ├── useExperience.js
│   │       ├── useAccordion.js
│   │       └── useSpotlight.js
│   │
│   ├── presentation/               # UI Layer
│   │   └── components/
│   │       ├── ui/                 # Reusable UI components
│   │       │   ├── BaseButton/
│   │       │   ├── BaseAccordion/
│   │       │   ├── BaseTabs/
│   │       │   └── BaseCard/
│   │       │
│   │       ├── layout/             # Layout components
│   │       │   ├── SectionHeader/
│   │       │   ├── TheNavbar/
│   │       │   ├── TheFooter/
│   │       │   └── SocialLinks/
│   │       │
│   │       └── features/           # Feature components
│   │           ├── HeroSection/
│   │           ├── AboutSection/
│   │           ├── ExperienceSection/
│   │           ├── ProjectsSection/
│   │           ├── ContactSection/
│   │           └── ChatWidget/
│   │
│   ├── App.vue                     # Root component
│   ├── App.html                    # Root template
│   ├── main.js                     # Application entry
│   └── style.css                   # Global styles
│
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or **yarn** / **pnpm**)

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint and fix files (if configured)
npm run lint
```

### Deploy Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### GitHub Pages
```bash
# Build
npm run build

# Deploy (using gh-pages)
npm run deploy
```


## 👤 Author

**David Nin**
- Portfolio: [davidnin.dev](https://davidnin.dev) *(coming soon)*
- GitHub: [@DavidNinMur](https://github.com/davidniin)
- LinkedIn: [David Nin](https://linkedin.com/in/davidnin)
- Email: dninmur@gmail.com

---

## 🔮 Future Enhancements

- [ ] Add TypeScript support
- [ ] Implement unit tests (Vitest)
- [ ] Add E2E tests (Playwright)
- [ ] Add blog section with MDX
- [x] Implement i18n (multi-language) - ✅ Spanish & English supported
- [ ] Add PWA support
- [ ] Integrate analytics
- [ ] Add project detail pages
- [ ] Implement dark/light theme toggle

---

<div align="center">

Made with ❤️ and Vue.js

</div>
