<template src="./AboutSection.html"></template>

<script>
import { Cpu, Users, Code2, CheckCircle } from 'lucide-vue-next';
import SectionHeader from '../../layout/SectionHeader/SectionHeader.vue';
import BaseAccordion from '../../ui/BaseAccordion/BaseAccordion.vue';

export default {
  name: 'AboutSection',
  
  components: {
    Cpu,
    Users,
    Code2,
    CheckCircle,
    SectionHeader,
    BaseAccordion
  },
  
  props: {
    accordionState: {
      type: Object,
      required: true
    }
  },

  emits: ['toggle'],

  setup(props, { emit }) {
    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/
    
    const toggle = (key) => {
      emit('toggle', key);
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
