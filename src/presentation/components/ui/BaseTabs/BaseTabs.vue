<template src="./BaseTabs.html"></template>

<script>
import { computed } from 'vue';

export default {
  name: 'BaseTabs',
  
  components: {},
  
  props: {
    tabs: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    // Computeds: derived reactive properties
    const activeTab = computed(() => props.modelValue);

    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const selectTab = (tabId) => {
      emit('update:modelValue', tabId);
    };
    
    const isActive = (tabId) => {
      return activeTab.value === tabId;
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/
    
    return {
      activeTab,
      selectTab,
      isActive
    };
  }
};
</script>
