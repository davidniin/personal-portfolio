<template>
  <svg v-if="icon === 'javascript'" viewBox="0 0 24 24" class="tech-icon">
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" />
    <text x="12" y="16" font-size="9" font-weight="700" text-anchor="middle" fill="currentColor" font-family="'Fira Code', monospace">JS</text>
  </svg>

  <svg v-else-if="icon === 'typescript'" viewBox="0 0 24 24" class="tech-icon">
    <rect x="1.5" y="1.5" width="21" height="21" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" />
    <text x="12" y="16" font-size="9" font-weight="700" text-anchor="middle" fill="currentColor" font-family="'Fira Code', monospace">TS</text>
  </svg>

  <svg v-else-if="icon === 'vue'" viewBox="0 0 24 24" class="tech-icon" fill="currentColor">
    <path d="M2 3h4.1L12 13.2 17.9 3H22L12 21 2 3z" />
    <path d="M6.1 3h3.4L12 7.5 14.5 3h3.4L12 13.2 6.1 3z" opacity="0.55" />
  </svg>

  <svg v-else-if="icon === 'angular'" viewBox="0 0 24 24" class="tech-icon">
    <path d="M12 2l9 3.2-1.4 12.2L12 22l-7.6-4.6L3 5.2 12 2z" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 6.3l4.6 10.4h-1.8l-.9-2.3h-3.8l-.9 2.3H7.4L12 6.3zm0 3l-1.3 3.3h2.6L12 9.3z" fill="currentColor" />
  </svg>

  <svg v-else-if="icon === 'react'" viewBox="0 0 24 24" class="tech-icon" fill="none" stroke="currentColor" stroke-width="1.3">
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>

  <svg v-else-if="icon === 'nodejs'" viewBox="0 0 24 24" class="tech-icon" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M12 2.3l8.5 4.85v9.7L12 21.7l-8.5-4.85v-9.7L12 2.3z" />
    <path d="M9 15V9l6 6V9" />
  </svg>
</template>

<script>
export default {
  name: 'TechIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tech-icon {
  width: 14px;
  height: 14px;
}
</style>
