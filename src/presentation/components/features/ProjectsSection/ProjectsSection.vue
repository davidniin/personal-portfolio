<template src="./ProjectsSection.html"></template>

<script>
import { Folder, Github, ExternalLink, ArrowRight } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import BaseCard from '../../ui/BaseCard/BaseCard.vue';
import BaseButton from '../../ui/BaseButton/BaseButton.vue';

import { SOCIAL_LINKS } from '../../../../infrastructure/config/portfolio.config.js';

export default {
  name: 'ProjectsSection',
  
  components: {
    Folder,
    Github,
    ExternalLink,
    ArrowRight,
    SectionHeader,
    BaseCard,
    BaseButton
  },
  
  props: {
    projects: {
      type: Array,
      required: true
    }
  },

  emits: [],

  setup(props, { emit }) {
    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const openGithub = () => {
      window.open(SOCIAL_LINKS.github, '_blank');
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      SOCIAL_LINKS,
      openGithub
    };
  }
};
</script>
