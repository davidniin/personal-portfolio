<template src="./HeroSection.html"></template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Sparkles } from 'lucide-vue-next';
import BaseButton from '../../ui/BaseButton/BaseButton.vue';

export default {
  name: 'HeroSection',

  components: {
    Sparkles,
    BaseButton
  },

  props: {
    personalInfo: {
      type: Object,
      required: true
    }
  },

  emits: ['navigate-projects', 'toggle-chat'],

  setup(props, { emit }) {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    const { t } = useI18n();

    // Split the display name into two lines for the asymmetric hero layout.
    const nameParts = computed(() => {
      const [first, ...rest] = t('hero.name').split(' ');
      return { first, rest: rest.join(' ') };
    });

    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      nameParts
    };
  }
};
</script>

<style scoped>
.hero-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px #a8b2d1;
}
</style>
