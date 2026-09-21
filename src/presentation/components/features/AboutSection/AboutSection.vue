<template src="./AboutSection.html"></template>

<script>
import { Cpu, Flame, Layers, Sparkles, ExternalLink } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';

// Tier is the primary organizing axis (how much real-world experience backs
// each item), not tool category — the same pill/card treatment is reused
// for all three, with only color/border signaling the tier, so "core" and
// "exploring" read as one system rather than differently-styled sections.
const SKILL_TIERS = [
  {
    id: 'core',
    icon: Flame,
    cardClass: 'border-green/25',
    labelClass: 'text-green',
    pillClass: 'text-green bg-green/10 border border-green/30',
    items: ['JavaScript', 'TypeScript', 'Vue.js 2/3', 'Composition API', 'Frontend Architecture', 'Microfrontends', 'Pinia', 'Vuex']
  },
  {
    id: 'comfortable',
    icon: Layers,
    cardClass: 'border-lightestNavy',
    labelClass: 'text-lightSlate',
    pillClass: 'text-lightSlate bg-lightestNavy/40 border border-lightestNavy',
    items: ['Angular', 'NgRx', 'REST APIs', 'SOLID', 'Design Patterns', 'Jest', 'Cypress', 'GitLab CI/CD']
  },
  {
    id: 'exploring',
    icon: Sparkles,
    cardClass: 'border-green/20 border-dashed',
    labelClass: 'text-white',
    pillClass: 'text-white bg-white/5 border border-dashed border-green/30',
    items: ['Claude & ChatGPT workflows', 'Prompt engineering (Anthropic cert.)', 'On-device AI / WebGPU', 'Agentic systems — next up']
  }
];

export default {
  name: 'AboutSection',

  components: {
    Cpu,
    ExternalLink,
    SectionHeader
  },

  props: {
    githubUrl: {
      type: String,
      required: true
    }
  },

  setup() {
    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      skillTiers: SKILL_TIERS
    };
  }
};
</script>
