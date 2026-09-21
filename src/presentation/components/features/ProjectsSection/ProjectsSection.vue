<template src="./ProjectsSection.html"></template>

<script>
import { ExternalLink } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import ProjectVisual from '../../ui/ProjectVisual/ProjectVisual.vue';
import TechIcon from '../../ui/TechIcon/TechIcon.vue';

// Abstract visual theme per project, keyed by id (see ProjectVisual for why
// this is an illustration rather than a real screenshot).
const VISUAL_VARIANTS = {
  ownChatIa: 'chat',
  makeyourdocu: 'docs',
  findJob: 'search',
  changelogify: 'changelog'
};

export default {
  name: 'ProjectsSection',

  components: {
    ExternalLink,
    SectionHeader,
    ProjectVisual,
    TechIcon
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  },

  emits: [],

  setup() {
    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      visualVariants: VISUAL_VARIANTS
    };
  }
};
</script>
