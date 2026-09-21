<template src="./AboutSection.html"></template>

<script>
import { Cpu, Layers, ExternalLink } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import TechIcon from '../../ui/TechIcon/TechIcon.vue';

export default {
  name: 'AboutSection',

  components: {
    Cpu,
    Layers,
    ExternalLink,
    SectionHeader,
    TechIcon
  },

  props: {
    coreTechStack: {
      type: Array,
      required: true
    },
    githubUrl: {
      type: String,
      required: true
    }
  }
};
</script>
