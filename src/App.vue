<template src="./App.html"></template>

<script>
// ============================================================================
// IMPORTS
// ============================================================================
import { ref, reactive, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from '@vercel/analytics';

// Configuration (Infrastructure Layer)
import { 
  NAV_LINKS, 
  JOBS, 
  PROJECTS, 
  SOCIAL_LINKS, 
  PERSONAL_INFO 
} from './infrastructure/config/portfolio.config.js';

// Components (Presentation Layer)
import TheNavbar from './presentation/components/layout/TheNavbar/TheNavbar.vue';
import TheFooter from './presentation/components/layout/TheFooter/TheFooter.vue';
import SocialLinks from './presentation/components/layout/SocialLinks/SocialLinks.vue';
import HeroSection from './presentation/components/features/HeroSection/HeroSection.vue';
import AboutSection from './presentation/components/features/AboutSection/AboutSection.vue';
import ExperienceSection from './presentation/components/features/ExperienceSection/ExperienceSection.vue';
import ProjectsSection from './presentation/components/features/ProjectsSection/ProjectsSection.vue';
import ContactSection from './presentation/components/features/ContactSection/ContactSection.vue';
import ChatWidget from './presentation/components/features/ChatWidget/ChatWidget.vue';

// Services
import { ChatService } from './domain/services/ChatService.js';
import { ChatClient } from './infrastructure/api/ChatClient.js';

export default {
  name: 'App',
  
  components: {
    TheNavbar,
    TheFooter,
    SocialLinks,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
    ChatWidget
  },
  
  props: {},
  emits: [],

  setup(props, { emit }) {
    const { t, locale } = useI18n();
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    // Refs: reactive variables
    const isMobileMenuOpen = ref(false);
    const isChatOpen = ref(false);
    const chatMessages = ref([ChatService.createWelcomeMessage(t('chat.welcome'))]);
    const userInput = ref('');
    const isThinking = ref(false);
    const chatContainerRef = ref(null);
    const activeTabId = ref('amadeus');

    // Reactive objects
    const accordionState = reactive({
      beyondCode: false
    });

    // Normal variables (non-reactive)
    const chatClient = new ChatClient();

    // Keep the still-untouched welcome bubble in sync if the visitor
    // switches language before ever sending a message.
    watch(locale, () => {
      if (chatMessages.value.length === 1 && chatMessages.value[0].isAIMessage()) {
        chatMessages.value = [ChatService.createWelcomeMessage(t('chat.welcome'))];
      }
    });

    /******************************************************
     *                VIEW LIFECYCLE                      *
     ******************************************************/

    onMounted(() => {
      // Initialize Vercel Analytics
      inject();

      // Initialize Vercel Speed Insights (framework-agnostic entry point —
      // the /vue entry requires vue-router, which this single-page site
      // doesn't use).
      injectSpeedInsights();

      // Scroll animations
      observeElements();
    });

    /******************************************************
     *                SET FUNCTIONS                       *
     ******************************************************/
    
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
    
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };
    
    const toggleChat = () => {
      isChatOpen.value = !isChatOpen.value;
      if (isChatOpen.value) {
        setTimeout(() => scrollToBottom(), 100);
      }
    };
    
    const toggleAccordion = (key) => {
      accordionState[key] = !accordionState[key];
    };

    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const navigateToProjects = () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const sendMessage = async () => {
      const validation = ChatService.validateInput(userInput.value);
      
      if (!validation.valid) {
        return;
      }

      // Add user message
      const userMessage = ChatService.createUserMessage(validation.text);
      chatMessages.value.push(userMessage);
      userInput.value = '';
      isThinking.value = true;

      await new Promise(resolve => setTimeout(resolve, 0));
      scrollToBottom();

      try {
        const currentLanguage = locale.value || 'en';
        const aiResponse = await chatClient.generateContent(validation.text, currentLanguage);

        chatMessages.value.push(await ChatService.createAIMessage(aiResponse));
      } catch (error) {
        const errorKey = error.message === 'connection' ? 'chat.errors.connection' : 'chat.errors.api';
        chatMessages.value.push(ChatService.createErrorMessage(t(errorKey)));
      } finally {
        isThinking.value = false;
        await new Promise(resolve => setTimeout(resolve, 0));
        scrollToBottom();
      }
    };
    
    const scrollToBottom = () => {
      if (chatContainerRef.value) {
        chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
      }
    };
    
    /******************************************************
     *                HELPER FUNCTIONS                    *
     ******************************************************/
    
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      // Configuration data
      NAV_LINKS,
      JOBS,
      PROJECTS,
      SOCIAL_LINKS,
      PERSONAL_INFO,
      
      // State
      isMobileMenuOpen,
      isChatOpen,
      chatMessages,
      userInput,
      isThinking,
      chatContainerRef,
      activeTabId,
      accordionState,
      
      // Methods
      toggleMobileMenu,
      closeMobileMenu,
      toggleChat,
      toggleAccordion,
      navigateToProjects,
      sendMessage
    };
  }
};
</script>

<style lang="scss" scoped>
/* ============================================================================
   ANIMATIONS & EFFECTS
   ============================================================================ */

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), 
              transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }

.shadow-neon {
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.1), 
              0 0 20px rgba(100, 255, 218, 0.05);
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>