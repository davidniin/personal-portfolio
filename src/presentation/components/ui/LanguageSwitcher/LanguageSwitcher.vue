<template src="./LanguageSwitcher.html"></template>

<script>
import { useI18n } from 'vue-i18n';
import { setLocale } from '../../../../infrastructure/i18n/i18n.js';
import { Globe } from 'lucide-vue-next';

export default {
  name: 'LanguageSwitcher',

  components: {
    Globe
  },

  setup() {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    const { locale } = useI18n();

    /******************************************************
     *                VIEW EVENTS                         *
     ******************************************************/

    const toggleLanguage = () => {
      setLocale(locale.value === 'es' ? 'en' : 'es');
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      locale,
      toggleLanguage
    };
  }
};
</script>
