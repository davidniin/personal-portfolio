<template src="./ContactSection.html"></template>

<script>
import BaseButton from '../../ui/BaseButton/BaseButton.vue';

export default {
  name: 'ContactSection',
  
  components: {
    BaseButton
  },
  
  props: {
    email: {
      type: String,
      required: true
    }
  },

  emits: [],

  setup(props, { emit }) {
    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const sendEmail = () => {
      window.location.href = `mailto:${props.email}`;
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      sendEmail
    };
  }
};
</script>
