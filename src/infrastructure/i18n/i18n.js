/**
 * i18n Configuration
 * Vue I18n setup and initialization
 */

import { createI18n } from 'vue-i18n';
import es from './locales/es.js';
import en from './locales/en.js';

/**
 * Get the user's preferred locale
 * Priority: localStorage > browser language > fallback to Spanish
 */
function getDefaultLocale() {
    // Check localStorage first
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && ['es', 'en'].includes(savedLocale)) {
        return savedLocale;
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en'].includes(browserLang)) {
        return browserLang;
    }

    // Default to Spanish
    return 'es';
}

/**
 * Create and configure i18n instance
 */
const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: getDefaultLocale(),
    fallbackLocale: 'en',
    messages: {
        es,
        en
    },
    globalInjection: true, // Enable global $t
    missingWarn: false,
    fallbackWarn: false
});

// Keep the <html lang> attribute in sync so screen readers and browsers
// always know the actual language of the rendered content.
document.documentElement.lang = i18n.global.locale.value;

/**
 * Save locale to localStorage when changed
 */
export function setLocale(locale) {
    if (['es', 'en'].includes(locale)) {
        i18n.global.locale.value = locale;
        document.documentElement.lang = locale;
        localStorage.setItem('locale', locale);
    }
}

/**
 * Get current locale
 */
export function getLocale() {
    return i18n.global.locale.value;
}

export default i18n;
