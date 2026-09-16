<template src="./ProjectsSection.html"></template>

<script>
import { ExternalLink } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';

export default {
  name: 'ProjectsSection',

  components: {
    ExternalLink,
    SectionHeader
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  },

  emits: []
};
</script>
