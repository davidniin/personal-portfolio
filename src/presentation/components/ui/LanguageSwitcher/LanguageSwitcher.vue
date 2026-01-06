<template src="./LanguageSwitcher.html"></template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLocale } from '../../../../infrastructure/i18n/i18n.js';
import { Globe } from 'lucide-vue-next';

export default {
  name: 'LanguageSwitcher',
  
  components: {
    Globe
  },

  setup() {
    const { locale } = useI18n();
    const isOpen = ref(false);

    const currentLanguage = computed(() => {
      return locale.value.toUpperCase();
    });

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const changeLanguage = (lang) => {
      setLocale(lang);
      isOpen.value = false;
    };

    const closeDropdown = () => {
      isOpen.value = false;
    };

    return {
      locale,
      currentLanguage,
      isOpen,
      toggleDropdown,
      changeLanguage,
      closeDropdown
    };
  }
};
</script>

<style lang="scss" scoped>
.language-switcher {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 0.375rem;
  color: var(--accent);
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: var(--accent);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.2);
  }
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 120px;
  background: var(--navy-light);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 0.375rem;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  z-index: 1000;
  overflow: hidden;
}

.language-option {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: var(--slate);
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    color: var(--accent);
  }

  &.active {
    color: var(--accent);
    background: rgba(100, 255, 218, 0.05);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
