
<template src="./ExperienceSection.html"></template>

<script>
import { computed } from 'vue';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import BaseTabs from '../../ui/BaseTabs/BaseTabs.vue';

export default {
  name: 'ExperienceSection',
  
  components: {
    SectionHeader,
    BaseTabs
  },
  
  props: {
    jobs: {
      type: Array,
      required: true
    },
    activeTabId: {
      type: String,
      required: true
    }
  },

  emits: ['update:activeTabId'],

  setup(props, { emit }) {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    // Computeds: derived reactive properties
    const tabList = computed(() => {
      return props.jobs.map(job => ({
        id: job.id,
        label: job.company
      }));
    });

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      tabList
    };
  }
};
</script>
