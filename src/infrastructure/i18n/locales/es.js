/**
 * Spanish (Español) Translations
 * Archivo de traducciones en español para el portfolio
 */

export default {
  // Navigation
  nav: {
    about: 'SOBRE MI',
    experience: 'EXPERIENCIA',
    howIWork: 'CÓMO TRABAJO',
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
      part2: ', pivotando de sistemas a desarrollo de software. Desde entonces construí soluciones para',
      part3: 'y',
      part4: ', y hoy afronto retos a escala global en',
      part5: 'en el sector de viajes.'
    },
    paragraph2: {
      part1: 'En Amadeus ayudé a escalar el equipo de',
      teamGrowth: '5 a 12 desarrolladores',
      part2: 'y reduje los bugs en producción un',
      bugReduction: '~30%',
      part3: 'introduciendo quality gates en CI/CD. Integro',
      aiTools: 'IA (Claude, ChatGPT)',
      part4: 'en mi flujo diario de desarrollo y testing, mientras sigo formándome con un',
      degree: 'Grado en Ingeniería Informática',
      part5: '.'
    },
    githubCta: 'Más código y notas técnicas en GitHub',
    bio: 'Ambicioso y proactivo, estoy profundamente comprometido con el aprendizaje continuo y el crecimiento profesional, buscando constantemente absorber conocimiento de mi entorno. Mentor comprobado, fomentando el crecimiento técnico dentro de los equipos e impulsando eficiencias en la entrega.',
    currentRole: 'Actualmente trabajo como',
    company: 'Amadeus',
    location: 'en Barcelona, España',
    education: 'Actualmente cursando un Grado en Ingeniería Informática',
    skills: {
      title: 'Habilidades & stack',
      subtitle: 'Agrupadas según cuánta experiencia real respalda cada una — no una pared de logos.',
      tiers: {
        core: {
          label: 'Stack principal',
          caption: 'Seis años de uso diario'
        },
        comfortable: {
          label: 'También he trabajado con',
          caption: 'Experiencia real en producción, aunque no es mi foco principal'
        },
        exploring: {
          label: 'Explorando ahora',
          caption: 'Donde quiero profundizar'
        }
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
          'Diseño e implemento arquitecturas de microfrontends basadas en Vue.js para aplicaciones del sector travel desplegadas en múltiples clientes.',
          'Poseo las decisiones de arquitectura frontend — selección de tecnología, estrategia de gestión de estado y estándares de código.',
          'Refuerzo los pipelines de CI/CD e introduje quality gates, reduciendo bugs en producción e incidencias detectadas en QA un ~30%.',
          'Mejoro el rendimiento de la aplicación mediante lazy loading y optimización de la obtención de datos, reduciendo tiempos de carga inicial y dependencias en cascada de la API.',
          'Mentorizo desarrolladores junior e internos con acompañamiento diario, onboarding y revisiones de código — más de la mitad acabaron contratados.'
        ]
      },

      t2c: {
        company: 'Technology 2 Client (T2C)',
        role: 'Front Web Developer',
        dates: 'Nov 2020 - Mayo 2023 | Barcelona',
        bullets: [
          'Construí una plataforma logística desde cero con Vue.js, responsable de todo el ciclo de vida frontend, desde la arquitectura hasta producción, en un equipo de cuatro desarrolladores.',
          'Entregué funcionalidades de monitorización en tiempo real para producción, inventario de almacén y estado de rutas de envío.',
          'Integré el frontend con una arquitectura basada en microservicios mediante APIs REST y gestioné estados complejos con Vuex.',
          'Construí interfaces de usuario modulares, responsivas y escalables utilizando SCSS y Tailwind CSS.',
          'Mentoricé a internos mediante onboarding, acompañamiento técnico, asignación de tareas y revisiones de código.'
        ]
      },

      quantion: {
        company: 'Quantion',
        role: 'Full Stack Developer',
        dates: 'Jun 2019 - Jul 2020 | Barcelona',
        bullets: [
          'Contribuí al desarrollo y mantenimiento de una aplicación cliente a gran escala utilizando Angular y Node.js.',
          'Participé en la migración de Angular 5 a Angular 8, ayudando a modernizar el código base y reducir la deuda técnica.',
          'Introduje y reforcé una cultura de testing mediante la implementación de pruebas unitarias con Mocha y Jasmine.',
          'Trabajé en un equipo Agile/Scrum utilizando flujos de trabajo basados en GitHub.'
        ]
      },

      sigma: {
        company: 'Sigma',
        role: 'Java Developer',
        dates: 'Oct 2018 - Mayo 2019 | Sabadell',
        bullets: [
          'Empecé con unas prácticas de cuatro meses y fui promocionado a Junior Java Developer dentro de ese mismo periodo.',
          'Desarrollé funcionalidades con Java 6 y el framework interno de la empresa, adquiriendo experiencia práctica en desarrollo de software empresarial.'
        ]
      }
    }

  },

  // How I Work Section
  howIWork: {
    title: 'Cómo trabajo',
    description: 'Seis años después, este es el conjunto de herramientas y hábitos al que recurro por defecto — no eslóganes, sino lo que realmente funciona en equipos y bases de código reales.',
    items: {
      architecture: {
        title: 'Arquitectura & propiedad técnica',
        description: 'Poseo las decisiones de arquitectura frontend de principio a fin — selección de tecnología, estrategia de gestión de estado, enfoque de migración y estándares de código — actualmente en microfrontends basados en Vue para aplicaciones del sector travel en Amadeus.'
      },
      migrations: {
        title: 'Migraciones sin romper nada',
        description: 'Migraciones de framework por etapas, no reescrituras: de Vue 2 a 3 con la Composition API en Amadeus, y de Angular 5 a 8 en Quantion, coordinando al equipo durante la transición sin congelar el desarrollo de funcionalidades.'
      },
      quality: {
        title: 'Quality gates, no solo tests',
        description: 'Jest, Cypress, Mocha y Jasmine combinados con quality gates de CI/CD que introduje en Amadeus — bugs en producción e incidencias detectadas en QA un ~30% menores.'
      },
      mentoring: {
        title: 'Mentoría & crecimiento del equipo',
        description: 'Acompañamiento diario, onboarding y revisiones de código para desarrolladores junior e internos — más de la mitad acabaron contratados, mientras el equipo de Amadeus escalaba de 5 a 12 desarrolladores.'
      },
      ai: {
        title: 'IA como flujo de trabajo, no como truco',
        description: 'Claude y ChatGPT forman parte de mi flujo diario de desarrollo, debugging, testing e investigación técnica — una herramienta que dirijo, igual que un linter o un depurador.'
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
    featuredTag: 'Destacado',
    items: {
      ownChatIa: {
        title: 'own-chat-ia',
        description: 'Un LLM corriendo íntegramente en el navegador vía WebGPU, sin servidor — construido para entender de primera mano los límites reales de la inferencia en el cliente: carga del modelo, presión de memoria y hasta dónde aguanta la interfaz antes de que el hardware diga basta.'
      },
      makeyourdocu: {
        title: 'MakeYourDocu',
        description: 'Un SaaS real, construido de principio a fin: inicio de sesión con GitHub OAuth, conecta un repo y Groq genera Especificaciones Funcionales y Guías de Usuario directamente a partir del código. Freemium, código abierto.'
      },
      changelogify: {
        title: 'Changelogify',
        description: 'El contraste deliberado: convierte commits en changelog sin backend y sin IA — porque aquí la complejidad extra no habría aportado nada.'
      },
      findJob: {
        title: 'Smart Job Search',
        description: 'Todas tus ofertas técnicas, en un solo sitio — un agregador con IA pensado para acabar con las ofertas dispersas entre webs.'
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
