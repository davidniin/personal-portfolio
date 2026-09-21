<template src="./IntroSection.html"></template>

<script>
import { ref, onMounted } from 'vue';
import { Sparkles } from 'lucide-vue-next';
import BaseButton from '../../ui/BaseButton/BaseButton.vue';

export default {
  name: 'IntroSection',

  components: {
    Sparkles,
    BaseButton
  },

  props: {
    personalInfo: {
      type: Object,
      required: true
    }
  },

  emits: ['navigate-projects', 'toggle-chat'],

  setup() {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    const badgeRef = ref(null);
    const nameRef = ref(null);
    const subtitleRef = ref(null);
    const descriptionRef = ref(null);
    const ctaRef = ref(null);

    /******************************************************
     *                VIEW LIFECYCLE                      *
     ******************************************************/

    onMounted(async () => {
      const elements = [badgeRef.value, nameRef.value, subtitleRef.value, descriptionRef.value, ctaRef.value]
        .filter(Boolean);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach((el) => el.classList.remove('intro-reveal'));
        return;
      }

      const gsapModule = await import('gsap');
      const gsap = gsapModule.gsap || gsapModule.default;

      // No clearProps here: the .intro-reveal class (still on these
      // elements) sets opacity:0/transform — GSAP's inline styles need to
      // stay in place to keep overriding it after the tween completes.
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12
      });
    });

    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      badgeRef,
      nameRef,
      subtitleRef,
      descriptionRef,
      ctaRef
    };
  }
};
</script>

<style scoped>
.intro-reveal {
  opacity: 0;
  transform: translateY(20px);
}
</style>
