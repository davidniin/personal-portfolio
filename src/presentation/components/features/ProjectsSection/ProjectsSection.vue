<template src="./ProjectsSection.html"></template>

<script>
import { ref, computed } from 'vue';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';

export default {
  name: 'ProjectsSection',
  
  components: {
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    SectionHeader
  },
  
  props: {
    projects: {
      type: Array,
      required: true
    }
  },

  emits: [],

  setup(props, { emit }) {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/
    
    const currentIndex = ref(0);
    
    // Duplicate projects for infinite scroll effect
    const duplicatedProjects = computed(() => {
      return [...props.projects, ...props.projects, ...props.projects];
    });

    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const nextSlide = () => {
      currentIndex.value++;
      // Reset to middle set when reaching the end
      if (currentIndex.value >= props.projects.length * 2) {
        setTimeout(() => {
          currentIndex.value = props.projects.length;
        }, 500);
      }
    };

    const prevSlide = () => {
      currentIndex.value--;
      // Reset to middle set when reaching the start
      if (currentIndex.value < props.projects.length) {
        setTimeout(() => {
          currentIndex.value = props.projects.length * 2 - 1;
        }, 500);
      }
    };

    const goToSlide = (index) => {
      // For the last project, adjust to show it properly without cutting off
      if (index === props.projects.length - 1) {
        currentIndex.value = props.projects.length + index - 1;
      } else {
        currentIndex.value = props.projects.length + index;
      }
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      currentIndex,
      duplicatedProjects,
      nextSlide,
      prevSlide,
      goToSlide
    };
  }
};
</script>
