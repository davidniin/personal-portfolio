<template src="./TheNavbar.html"></template>

<script>
import { Menu, X } from 'lucide-vue-next';
import { onMounted } from 'vue';

export default {
  name: 'TheNavbar',
  
  components: {
    Menu,
    X
  },
  
  props: {
    navLinks: {
      type: Array,
      required: true
    },
    isMobileMenuOpen: {
      type: Boolean,
      required: true
    }
  },

  emits: ['toggle-mobile-menu', 'close-mobile-menu'],

  setup(props, { emit }) {
    /******************************************************
     *                VIEW LIFECYCLE                      *
     ******************************************************/
    
    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const toggleMobileMenu = () => {
      emit('toggle-mobile-menu');
    };
    
    const closeMobileMenu = () => {
      emit('close-mobile-menu');
    };

    /******************************************************
     *                HELPER FUNCTIONS                    *
     ******************************************************/
    

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      toggleMobileMenu,
      closeMobileMenu
    };
  }
};
</script>
