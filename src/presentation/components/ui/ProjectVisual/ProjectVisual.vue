<template src="./ProjectVisual.html"></template>

<script>
import { computed } from 'vue';
import { MessageSquare, FileText, Radar, GitCommitHorizontal } from 'lucide-vue-next';

// Abstract, on-brand stand-in for a screenshot: a themed icon over the
// same navy/green glow used by the site's ambient background, so cards
// feel intentional rather than empty while no real screenshots exist yet.
const ICON_BY_VARIANT = {
  chat: MessageSquare,
  docs: FileText,
  search: Radar,
  changelog: GitCommitHorizontal
};

// Fixed (not random) positions so server-rendered and client-rendered
// markup always match, and the layout never shifts between reloads.
const DOT_POSITIONS = [
  { x: 15, y: 20 }, { x: 35, y: 65 }, { x: 60, y: 30 }, { x: 80, y: 70 }, { x: 90, y: 15 }
];

export default {
  name: 'ProjectVisual',

  props: {
    variant: {
      type: String,
      required: true,
      validator: (value) => Object.keys(ICON_BY_VARIANT).includes(value)
    }
  },

  setup(props) {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    const icon = computed(() => ICON_BY_VARIANT[props.variant]);
    const dots = DOT_POSITIONS;

    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      icon,
      dots
    };
  }
};
</script>
