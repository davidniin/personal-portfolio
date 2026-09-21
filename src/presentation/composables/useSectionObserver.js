import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Watches the portfolio's section elements to:
 *  - reveal `.fade-in-up` elements once they've scrolled into view (via a
 *    rAF-throttled bounding-rect sweep on scroll — see revealPastElements
 *    for why a plain IntersectionObserver isn't used for this part)
 *  - track which section is currently active, for nav highlighting (via
 *    IntersectionObserver, which is a good fit here since it only needs to
 *    reflect the resting state after scrolling settles, not every element
 *    a fast scroll passed over)
 *
 * `root: null` is used for the spy observer rather than pointing at
 * `#content-scroll`: it correctly follows scroll position whether
 * `#content-scroll` (desktop) or the document (mobile) is the real scroller,
 * since IntersectionObserver resolves `null` against the nearest scrollable
 * ancestor's clipping chain either way.
 */
export function useSectionObserver({ sectionIds }) {
  const activeSectionId = ref(sectionIds[0] ?? '');

  let spyObserver = null;
  let revealRafId = null;

  const getScroller = () => document.getElementById('content-scroll');

  const isAtBottomOfScroll = () => {
    const scroller = getScroller();
    if (scroller && scroller.scrollHeight > scroller.clientHeight) {
      return scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2;
    }
    const doc = document.documentElement;
    return window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
  };

  const checkBottom = () => {
    if (isAtBottomOfScroll()) {
      activeSectionId.value = sectionIds[sectionIds.length - 1];
    }
  };

  // A plain IntersectionObserver only fires when an element's intersection
  // ratio *crosses* a threshold — an element that gets jumped clean over in
  // one big scroll (fast fling, scrollbar drag, deep link) never crosses
  // any threshold and never gets a callback at all, so it can't be revealed
  // that way. Checking bounding rects directly on scroll sidesteps that gap
  // entirely: it only cares about current position, not how it got there.
  const revealPastElements = () => {
    const viewportBottom = window.innerHeight;
    document.querySelectorAll('.fade-in-up:not(.visible)').forEach((el) => {
      if (el.getBoundingClientRect().top < viewportBottom) {
        el.classList.add('visible');
      }
    });
  };

  const scheduleReveal = () => {
    if (revealRafId) return;
    revealRafId = requestAnimationFrame(() => {
      revealRafId = null;
      revealPastElements();
    });
  };

  const handleSpy = (entries) => {
    if (isAtBottomOfScroll()) {
      activeSectionId.value = sectionIds[sectionIds.length - 1];
      return;
    }
    const intersecting = entries.find((entry) => entry.isIntersecting);
    if (intersecting) {
      activeSectionId.value = intersecting.target.id;
    }
  };

  onMounted(() => {
    // Initial pass for whatever's already above the fold at load.
    revealPastElements();

    spyObserver = new IntersectionObserver(handleSpy, {
      root: null,
      threshold: 0,
      // Thin band centered on the viewport: whichever section crosses it is "active".
      rootMargin: '-45% 0px -50% 0px'
    });
    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => spyObserver.observe(el));

    // The spy band can't reach the last section once the user hits the bottom
    // of scroll (there's no more room to push its top past the band line),
    // so the bottom edge is handled explicitly on scroll too.
    window.addEventListener('scroll', checkBottom, { passive: true });
    getScroller()?.addEventListener('scroll', checkBottom, { passive: true });

    window.addEventListener('scroll', scheduleReveal, { passive: true });
    getScroller()?.addEventListener('scroll', scheduleReveal, { passive: true });
    window.addEventListener('resize', scheduleReveal);
  });

  onUnmounted(() => {
    spyObserver?.disconnect();
    if (revealRafId) cancelAnimationFrame(revealRafId);

    window.removeEventListener('scroll', checkBottom);
    getScroller()?.removeEventListener('scroll', checkBottom);
    window.removeEventListener('scroll', scheduleReveal);
    getScroller()?.removeEventListener('scroll', scheduleReveal);
    window.removeEventListener('resize', scheduleReveal);
  });

  return { activeSectionId };
}
