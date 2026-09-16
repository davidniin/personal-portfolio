/**
 * Spanish (Español) Translations
 * Archivo de traducciones en español para el portfolio
 */

export default {
  // Navigation
  nav: {
    about: 'SOBRE MI',
    experience: 'EXPERIENCIA',
    labs: 'LABS',
    contact: 'CONTACTO'
  },

  // Hero Section
  hero: {
    badge: 'Abierto a nuevos retos',
    greeting: 'Hola, mi nombre es',
    name: 'David Nin Mur',
    title: 'Senior Frontend Developer',
    subtitle: 'Construyo experiencias web escalables.',
    description: 'Desarrollador Frontend Senior orientado a resultados con amplia experiencia en ingeniería de arquitecturas frontend escalables usando Vue.js y Angular. Experto en elevar los estándares de código mediante pruebas rigurosas y revisiones entre pares, implementando las mejores prácticas de Agile.',
    currentlyAt: 'Actualmente escalando productos en',
    cta: {
      projects: 'Ver mis proyectos',
      chat: 'Pregúntale a NinIA',
      contact: '¡Hablemos!'
    }
  },

  // About Section
  about: {
    title: 'Sobre mí',
    greeting: '¡Hola! Soy David',
    paragraph1: {
      part1: 'Mi viaje comenzó en',
      year: '2017',
      part2: ', pivotando de sistemas a desarrollo de software. Desde entonces, he tenido la oportunidad de construir soluciones escalables para',
      part3: 'y',
      part4: ', y ahora estoy abordando desafíos a escala global en',
      part5: 'en el sector de viajes.'
    },
    paragraph2: {
      part1: 'No solo escribo código; me preocupo por la',
      teamDynamics: 'dinámica del equipo',
      part2: 'y el',
      why: '"Por qué"',
      part3: 'detrás de las funcionalidades. Ya sea optimizando un ciclo de renderizado, mentorizando a un desarrollador junior o impulsando las mejores prácticas de Agile, busco la excelencia.'
    },
    paragraph3: {
      part1: 'Actualmente cursando un',
      degree: 'Grado en Ingeniería Informática',
      part2: ', estoy profundamente comprometido con el aprendizaje continuo y el crecimiento profesional, buscando constantemente absorber conocimiento de mi entorno.'
    },
    bio: 'Ambicioso y proactivo, estoy profundamente comprometido con el aprendizaje continuo y el crecimiento profesional, buscando constantemente absorber conocimiento de mi entorno. Mentor comprobado, fomentando el crecimiento técnico dentro de los equipos e impulsando eficiencias en la entrega.',
    currentRole: 'Actualmente trabajo como',
    company: 'Amadeus',
    location: 'en Barcelona, España',
    education: 'Actualmente cursando un Grado en Ingeniería Informática',
    skills: {
      title: 'Habilidades técnicas',
      coreTech: {
        title: 'Tecnologías Core',
        items: [
          'JavaScript / TypeScript',
          'Vue.js (Ecosistema)',
          'Angular',
          'React',
          'Node.js',
          'HTML5 / CSS3'
        ]
      },
      frameworks: {
        title: 'Frameworks & Herramientas',
        items: [
          'Vue 3 (Composition API)',
          'Angular 14+',
          'Vite / Webpack',
          'Tailwind CSS',
          'SASS/SCSS'
        ]
      },
      testing: {
        title: 'Testing',
        items: [
          'Jest',
          'Vitest',
          'Cypress',
          'Mocha',
          'Jasmine'
        ]
      },
      architecture: {
        title: 'Arquitectura & Patrones',
        items: [
          'Microfrontends',
          'Integración de Microservicios',
          'Gestión de Estado (Pinia, Vuex)',
          'Patrones de Diseño',
          'Principios SOLID',
          'Refactorización de Código'
        ]
      },
      tools: {
        title: 'Herramientas & Metodologías',
        items: [
          'Git / GitLab',
          'CI/CD',
          'Agile / Scrum',
          'Revisiones de Código',
          'Mentoría Técnica'
        ]
      },
      beyondCode: {
        title: 'Más allá del Código',
        items: [
          {
            title: 'Mentoría & Liderazgo',
            description: 'Formación de desarrolladores junior e internos, realización de revisiones de código y fomento de una cultura de ingeniería colaborativa.'
          },
          {
            title: 'Colaboración Agile',
            description: 'Participación activa en Sprint Planning, Dailies y Retrospectivas para optimizar los pipelines de entrega.'
          },
          {
            title: 'Aseguramiento de Calidad',
            description: 'Implementación de suites de testing completas y revisiones rigurosas entre pares para minimizar la deuda técnica.'
          },
          {
            title: 'Aprendizaje Continuo',
            description: 'Actualmente cursando Grado en Ingeniería Informática mientras me mantengo actualizado con las tendencias de la industria.'
          }
        ]
      }
    }
  },

  // Experience Section
  experience: {
    title: 'Dónde he trabajado',
    jobs: {
      amadeus: {
        company: 'Amadeus',
        role: 'Senior Frontend Developer',
        dates: 'Mayo 2023 - Presente | Barcelona',
        bullets: [
          'Diseño e implemento arquitecturas frontend escalables y resilientes utilizando Vue.js para aplicaciones críticas del sector travel con altos volúmenes de tráfico.',
          'Garantizo altos estándares de calidad mediante testing automatizado (Jest, Cypress), revisiones de código exhaustivas y control activo de la deuda técnica.',
          'Contribuyo activamente a la mejora de los procesos Agile del equipo, optimizando la planificación, los pipelines de entrega y la estabilidad de los releases.',
          'Colaboro estrechamente con diseño, producto y backend para asegurar soluciones coherentes, mantenibles y alineadas con objetivos de negocio.',
          'Mentorizo desarrolladores junior y nuevos miembros del equipo, acelerando su onboarding técnico y promoviendo buenas prácticas de ingeniería.'
        ]
      },

      t2c: {
        company: 'Technology 2 Client (T2C)',
        role: 'Front Web Developer',
        dates: 'Nov 2020 - Mayo 2023 | Barcelona',
        bullets: [
          'Desarrollé una aplicación web orientada a cliente final desde cero utilizando Vue.js, siguiendo metodologías Agile y flujos de trabajo colaborativos en GitLab.',
          'Lideré la migración técnica de Vue 2 a Vue 3, mejorando la mantenibilidad del código y alineándolo con estándares modernos del ecosistema frontend.',
          'Integré el frontend con una arquitectura basada en microservicios mediante APIs REST y gestioné estados complejos con Vuex.',
          'Construí interfaces de usuario modulares, responsivas y escalables utilizando SCSS y Tailwind CSS.',
          'Apoyé el crecimiento del equipo junior mediante definición de tareas técnicas, acompañamiento y revisiones de código orientadas a calidad y aprendizaje.'
        ]
      },

      quantion: {
        company: 'Quantion',
        role: 'Full Stack Developer',
        dates: 'Jun 2019 - Jul 2020 | Barcelona',
        bullets: [
          'Participé en la modernización de aplicaciones legacy migrando proyectos de Angular 5 a Angular 8, mejorando rendimiento y mantenibilidad.',
          'Introduje y reforcé una cultura de testing mediante la implementación de pruebas unitarias con Mocha y Jasmine.',
          'Desarrollé funcionalidades full-stack combinando frontend moderno con servicios backend en Node.js.',
          'Consolidé una base sólida en metodologías Agile, buenas prácticas de desarrollo y trabajo en equipos multidisciplinares.'
        ]
      },

      sigma: {
        company: 'Sigma',
        role: 'Java Developer',
        dates: 'Oct 2018 - Sep 2019 | Sabadell',
        bullets: [
          'Desarrollé software empresarial utilizando Java 6 y frameworks propietarios en entornos corporativos.',
          'Adquirí experiencia práctica en ciclos de vida de desarrollo de software, mantenimiento de sistemas legacy y patrones de arquitectura empresarial.'
        ]
      }
    }

  },

  // Projects Section
  projects: {
    title: 'Proyectos personales',
    description: 'Fuera de Amadeus, uso mis propios proyectos para explorar dónde encaja la IA de verdad — y dónde no.',
    quote: 'La IA puede escribir código, pero el ingeniero diseña el sistema.',
    viewSite: 'Ver sitio',
    viewRepo: 'Ver repo',
    aiTag: 'IA',
    noAiTag: 'Sin IA',
    items: {
      ownChatIa: {
        title: 'own-chat-ia',
        description: 'Un LLM corriendo íntegramente en el navegador, sin servidor — construido para entender de primera mano los límites reales de la IA en el cliente.'
      },
      makeyourdocu: {
        title: 'MakeYourDocu',
        description: 'Un SaaS real: conecta un repo de GitHub y Groq genera Especificaciones Funcionales y Guías de Usuario a partir del código. Freemium, código abierto.'
      },
      changelogify: {
        title: 'Changelogify',
        description: 'El contraste deliberado: convierte commits en changelog sin backend y sin IA — porque aquí la complejidad extra no habría aportado nada.'
      }
    }
  },

  // Contact Section
  contact: {
    title: '¿Qué sigue?',
    subtitle: 'Ponte en contacto',
    description: 'Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré mi mejor esfuerzo para responderte!',
    cta: '¡Hablemos!',
    info: {
      email: 'Correo electrónico',
      phone: 'Teléfono',
      location: 'Ubicación'
    }
  },

  // Chat Widget
  chat: {
    title: 'Pregúntame algo',
    welcome: '¡Hola! 👋 Soy NinIA, un asistente de IA que David construyó él mismo (Vue por delante, una API serverless por detrás). Pregúntame sobre su experiencia, habilidades o proyectos.',
    placeholder: 'Escribe tu mensaje...',
    send: 'Enviar',
    thinking: 'Pensando...',
    errors: {
      api: 'Lo siento, hubo un problema al conectar con el servicio de IA. Por favor, intenta de nuevo más tarde.',
      connection: 'Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.',
      empty: 'Por favor, escribe un mensaje antes de enviar.'
    }
  },

  // Footer
  footer: {
    designed: 'Diseñado y construido por',
    rights: 'Todos los derechos reservados',
    madeWith: 'Hecho con',
    and: 'y',
    in: 'en'
  },

  // Common UI
  common: {
    loading: 'Cargando...',
    error: 'Error',
    close: 'Cerrar',
    open: 'Abrir',
    viewMore: 'Ver más',
    viewLess: 'Ver menos',
    changeLanguage: 'Cambiar idioma'
  }
};
