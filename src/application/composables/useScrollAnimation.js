import { onMounted } from 'vue';

/**
 * useScrollAnimation Composable
 * Manages scroll-based animations using Intersection Observer
 */
export function useScrollAnimation() {
    const observeElements = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    };

    onMounted(() => {
        observeElements();
    });

    return {
        observeElements
    };
}
