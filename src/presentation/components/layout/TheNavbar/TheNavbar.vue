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
    
    onMounted(() => {
      initNavbarScroll();
    });

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
    
    const initNavbarScroll = () => {
      let lastScrollY = window.scrollY;
      const navbar = document.getElementById('navbar');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          navbar?.classList.add('-translate-y-full');
        } else {
          navbar?.classList.remove('-translate-y-full');
        }
        lastScrollY = window.scrollY;
      });
    };

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
