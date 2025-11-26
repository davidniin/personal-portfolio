<template src="./HeroSection.html"></template>

<script>
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
     *                RETURN                              *
     ******************************************************/
    
    return {};
  }
};
</script>
