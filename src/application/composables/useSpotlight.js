import { onMounted } from 'vue';

/**
 * useSpotlight Composable
 * Manages mouse spotlight effect
 */
export function useSpotlight() {
    const handleMouseMove = (e) => {
        const spotlight = document.getElementById('spotlight');
        if (spotlight) {
            spotlight.style.setProperty('--x', `${e.clientX}px`);
            spotlight.style.setProperty('--y', `${e.clientY}px`);
        }
    };

    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove);
    });

    return {
        handleMouseMove
    };
}
