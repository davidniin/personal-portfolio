<template src="./BaseAccordion.html"></template>

<script>
import { ChevronDown } from 'lucide-vue-next';

export default {
  name: 'BaseAccordion',
  
  components: {
    ChevronDown
  },
  
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  emits: ['toggle'],

  setup(props, { emit }) {
    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const toggle = () => {
      emit('toggle');
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      toggle
    };
  }
};
</script>
