<template src="./HowIWorkSection.html"></template>

<script>
import { Boxes, GitBranch, ShieldCheck, Users, Bot } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import BaseCard from '../../ui/BaseCard/BaseCard.vue';

// Icon choice is a presentation concern, kept local to this component —
// the copy itself lives in i18n (howIWork.items.<id>.*), matching the
// projects.items.<id> pattern used by ProjectsSection.
const PILLARS = [
  { id: 'architecture', icon: Boxes },
  { id: 'migrations', icon: GitBranch },
  { id: 'quality', icon: ShieldCheck },
  { id: 'mentoring', icon: Users },
  { id: 'ai', icon: Bot }
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
