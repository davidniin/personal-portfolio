<template src="./SocialLinks.html"></template>

<script>
import { Github, Linkedin } from 'lucide-vue-next';

export default {
  name: 'SocialLinks',
  
  components: {
    Github,
    Linkedin
  },
  
  props: {
    socialLinks: {
      type: Object,
      required: true
    }
  },
  
  emits: [],

  setup(props, { emit }) {
    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {};
  }
};
</script>
