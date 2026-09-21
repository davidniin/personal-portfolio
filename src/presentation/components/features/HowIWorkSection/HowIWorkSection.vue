<template src="./HowIWorkSection.html"></template>

<script>
import { Boxes, GitBranch, ShieldCheck, Users, Bot } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import BaseCard from '../../ui/BaseCard/BaseCard.vue';

// Icon choice is a presentation concern, kept local to this component —
// the copy itself lives in i18n (howIWork.items.<id>.*), matching the
// projects.items.<id> pattern used by ProjectsSection.
const PILLARS = [
  { id: 'architecture', icon: Boxes, keywords: ['Microfrontends', 'State Management', 'SOLID'] },
  { id: 'migrations', icon: GitBranch, keywords: ['Vue 2 → 3', 'Composition API', 'Angular 5 → 8'] },
  { id: 'quality', icon: ShieldCheck, keywords: ['Jest', 'Cypress', 'CI/CD'] },
  { id: 'mentoring', icon: Users, keywords: ['Onboarding', 'Code Reviews', '5 → 12 devs'] },
  { id: 'ai', icon: Bot, keywords: ['Claude', 'ChatGPT', 'Prompt Engineering'] }
];

export default {
  name: 'HowIWorkSection',

  components: {
    SectionHeader,
    BaseCard
  },

  setup() {
    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      pillars: PILLARS
    };
  }
};
</script>
