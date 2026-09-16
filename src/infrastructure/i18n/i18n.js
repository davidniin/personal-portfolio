/**
 * i18n Configuration
 * Vue I18n setup and initialization
 */

import { createI18n } from 'vue-i18n';
import es from './locales/es.js';
import en from './locales/en.js';

const SITE_URL = 'https://davidnin.dev';

/**
 * '/en' is a real, crawlable URL for the English version (see vercel.json).
 * Everything else (starting with '/', the Spanish/default root) is Spanish.
 */
function getLocaleFromPath() {
    return window.location.pathname.replace(/\/+$/, '') === '/en' ? 'en' : null;
}

/**
 * Get the user's preferred locale.
 * Priority: explicit URL ('/en') > localStorage > browser language > Spanish
 */
function getDefaultLocale() {
    const pathLocale = getLocaleFromPath();
    if (pathLocale) {
        return pathLocale;
    }

    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && ['es', 'en'].includes(savedLocale)) {
        return savedLocale;
    }

    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en'].includes(browserLang)) {
        return browserLang;
    }

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

/**
 * Keep every language-dependent piece of <head> metadata (not just the
 * visible content) in sync with the active locale: the lang attribute,
 * the self-referencing canonical URL, and the social share tags. This
 * is what makes the hreflang alternates below trustworthy to crawlers.
 */
function syncDocumentMeta(locale) {
    const path = locale === 'en' ? '/en' : '/';
    const url = `${SITE_URL}${path}`;

    document.documentElement.lang = locale;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);

    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', url);
}

syncDocumentMeta(i18n.global.locale.value);

/**
 * Change locale, persist the preference, and keep the visible URL truthful
 * to what's on screen (replaceState: this is a preference toggle, not a
 * navigation the user expects to land on when hitting "back").
 */
export function setLocale(locale) {
    if (!['es', 'en'].includes(locale)) return;

    i18n.global.locale.value = locale;
    syncDocumentMeta(locale);
    localStorage.setItem('locale', locale);

    const path = locale === 'en' ? '/en' : '/';
    if (window.location.pathname.replace(/\/+$/, '') !== path.replace(/\/+$/, '') && path !== '/') {
        window.history.replaceState(null, '', path + window.location.hash);
    } else if (path === '/' && window.location.pathname !== '/') {
        window.history.replaceState(null, '', '/' + window.location.hash);
    }
}

// Re-sync if the user navigates with the browser's back/forward buttons
// between '/' and '/en' (setLocale's own replaceState calls don't fire this).
window.addEventListener('popstate', () => {
    const pathLocale = getLocaleFromPath();
    if (pathLocale && pathLocale !== i18n.global.locale.value) {
        i18n.global.locale.value = pathLocale;
        syncDocumentMeta(pathLocale);
        localStorage.setItem('locale', pathLocale);
    }
});

/**
 * Get current locale
 */
export function getLocale() {
    return i18n.global.locale.value;
}

export default i18n;
