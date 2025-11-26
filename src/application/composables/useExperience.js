import { ref } from 'vue';

/**
 * useExperience Composable
 * Manages experience tabs state
 */
export function useExperience(defaultTabId = 'amadeus') {
    const activeTabId = ref(defaultTabId);

    const setActiveTab = (tabId) => {
        activeTabId.value = tabId;
    };

    const isTabActive = (tabId) => {
        return activeTabId.value === tabId;
    };

    return {
        activeTabId,
        setActiveTab,
        isTabActive
    };
}
