<template src="./AppSidebar.html"></template>

<script>
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher.vue';

export default {
  name: 'AppSidebar',

  components: {
    Github,
    Linkedin,
    Mail,
    LanguageSwitcher
  },

  props: {
    personalInfo: {
      type: Object,
      required: true
    },
    navLinks: {
      type: Array,
      required: true
    },
    socialLinks: {
      type: Object,
      required: true
    },
    activeSectionId: {
      type: String,
      default: ''
    }
  },

  setup() {
    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/

    const scrollToSection = (href) => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      scrollToSection
    };
  }
};
</script>
