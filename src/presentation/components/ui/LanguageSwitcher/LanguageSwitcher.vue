<template src="./LanguageSwitcher.html"></template>

<script>
import { ref, computed, nextTick, onBeforeUnmount } from 'vue';
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
    const triggerRef = ref(null);
    const dropdownRef = ref(null);
    const dropdownStyle = ref({});

    const currentLanguage = computed(() => {
      return locale.value.toUpperCase();
    });

    // The dropdown is teleported to <body> so it can never be clipped by a
    // scrolling ancestor (the sidebar, or the content column). Since that
    // breaks the CSS position:relative/absolute pairing, position it manually
    // from the trigger button's own viewport rect instead. The trigger can
    // sit anywhere (left sidebar, centered mobile menu), so anchor to its
    // left edge by default, then clamp against both viewport edges once the
    // dropdown's real width is known.
    const positionDropdown = () => {
      if (!triggerRef.value) return;
      const rect = triggerRef.value.getBoundingClientRect();
      dropdownStyle.value = {
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`
      };
      triggerRectCache = rect;
    };

    let triggerRectCache = null;

    const clampDropdownToViewport = () => {
      if (!dropdownRef.value || !triggerRectCache) return;
      const margin = 8;
      const dropdownRect = dropdownRef.value.getBoundingClientRect();
      let left = dropdownRect.left;
      let top = dropdownRect.top;

      if (dropdownRect.right > window.innerWidth - margin) {
        left = window.innerWidth - margin - dropdownRect.width;
      }
      if (left < margin) {
        left = margin;
      }

      // Flip above the trigger when there isn't room below (e.g. the
      // trigger sits near the bottom of a short sidebar/viewport).
      if (dropdownRect.bottom > window.innerHeight - margin) {
        top = triggerRectCache.top - dropdownRect.height - 8;
      }
      if (top < margin) {
        top = margin;
      }

      dropdownStyle.value = { top: `${top}px`, left: `${left}px` };
    };

    // One-shot: any scroll while open (sidebar, content column, or the page
    // itself) closes the dropdown rather than tracking position live.
    const handleScroll = () => {
      closeDropdown();
    };

    const toggleDropdown = () => {
      if (isOpen.value) {
        closeDropdown();
        return;
      }
      positionDropdown();
      isOpen.value = true;
      nextTick(clampDropdownToViewport);
      window.addEventListener('scroll', handleScroll, { capture: true, once: true });
    };

    const changeLanguage = (lang) => {
      setLocale(lang);
      closeDropdown();
    };

    const closeDropdown = () => {
      isOpen.value = false;
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
    });

    return {
      locale,
      currentLanguage,
      isOpen,
      triggerRef,
      dropdownRef,
      dropdownStyle,
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
  position: fixed;
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
