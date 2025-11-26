import { reactive } from 'vue';

/**
 * useAccordion Composable
 * Manages accordion state for multiple accordions
 */
export function useAccordion(initialState = {}) {
    const accordionState = reactive({ ...initialState });

    const toggle = (key) => {
        accordionState[key] = !accordionState[key];
    };

    const open = (key) => {
        accordionState[key] = true;
    };

    const close = (key) => {
        accordionState[key] = false;
    };

    const isOpen = (key) => {
        return accordionState[key] || false;
    };

    return {
        accordionState,
        toggle,
        open,
        close,
        isOpen
    };
}
