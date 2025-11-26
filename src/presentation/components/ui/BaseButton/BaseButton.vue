<template src="./BaseButton.html"></template>

<script>
import { computed } from 'vue';

export default {
  name: 'BaseButton',
  
  components: {},
  
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    // Computeds: derived reactive properties
    const buttonClasses = computed(() => {
      const base = 'font-mono rounded transition-all inline-flex items-center justify-center gap-2';
      
      const sizes = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-8 py-4 text-sm',
        lg: 'px-10 py-5 text-base'
      };

      const variants = {
        primary: 'text-navy bg-green border border-green font-bold hover:bg-green/90 hover:shadow-neon',
        secondary: 'text-green border border-green hover:bg-green/10',
        outline: 'text-lightSlate border border-lightestNavy hover:border-green hover:text-green'
      };

      const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

      return `${base} ${sizes[props.size]} ${variants[props.variant]} ${disabledClass}`;
    });

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      buttonClasses
    };
  }
};
</script>
