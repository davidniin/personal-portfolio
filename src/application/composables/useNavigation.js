import { ref } from 'vue';

/**
 * useNavigation Composable
 * Manages navigation state and mobile menu
 */
export function useNavigation() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
        isMobileMenuOpen.value = false;
    };

    const openMobileMenu = () => {
        isMobileMenuOpen.value = true;
    };

    return {
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        openMobileMenu
    };
}
