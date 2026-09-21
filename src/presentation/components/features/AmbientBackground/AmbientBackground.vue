<template src="./AmbientBackground.html"></template>

<script>
// Loaded only via defineAsyncComponent from App.vue, so three/gsap end up in
// this component's own async chunk rather than the main bundle.
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ref, onMounted, onUnmounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AmbientBackground',

  setup() {
    /******************************************************
     *                VARIABLES                           *
     ******************************************************/

    const canvasHostRef = ref(null);

    // Plain (non-reactive) imperative three.js/GSAP state — this scene is
    // driven entirely outside Vue's reactivity system.
    let renderer = null;
    let scene = null;
    let camera = null;
    let pointsGroup = null;
    let canvas = null;
    let scrollTriggerInstance = null;
    let rafId = null;
    let resizeTimeout = null;

    const NODE_COUNT = 48;
    const CONNECT_DISTANCE = 5.5;
    const ACCENT_COLOR = 0x64ffda; // tailwind.config.js `green` token — keep in sync

    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };
    let scrollProgress = 0;
    let scrollTargetProgress = 0;

    /******************************************************
     *                VIEW LIFECYCLE                      *
     ******************************************************/

    onMounted(() => {
      if (!canvasHostRef.value) return;

      try {
        initScene();
      } catch (error) {
        // Real WebGLRenderer construction can still fail on some drivers
        // even after the cheap feature probe in App.vue passed — fail
        // silently, the solid navy background is already a fine fallback.
        console.warn('AmbientBackground: WebGL scene failed to initialize', error);
        disposeScene();
      }
    });

    onUnmounted(() => {
      disposeScene();
    });

    /******************************************************
     *                HELPER FUNCTIONS                    *
     ******************************************************/

    const buildNodeGraph = () => {
      const group = new THREE.Group();
      const positions = [];
      const spread = 14;

      for (let i = 0; i < NODE_COUNT; i++) {
        positions.push(
          (Math.random() - 0.5) * spread * 2,
          (Math.random() - 0.5) * spread * 1.2,
          (Math.random() - 0.5) * spread
        );
      }

      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      const pointsMaterial = new THREE.PointsMaterial({
        color: ACCENT_COLOR,
        size: 0.16,
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true
      });
      group.add(new THREE.Points(pointsGeometry, pointsMaterial));

      // Connect nearby nodes with thin lines — computed once here, not per frame.
      const linePositions = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const ax = positions[i * 3];
        const ay = positions[i * 3 + 1];
        const az = positions[i * 3 + 2];
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const bx = positions[j * 3];
          const by = positions[j * 3 + 1];
          const bz = positions[j * 3 + 2];
          const distance = Math.hypot(ax - bx, ay - by, az - bz);
          if (distance < CONNECT_DISTANCE) {
            linePositions.push(ax, ay, az, bx, by, bz);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMaterial = new THREE.LineBasicMaterial({
        color: ACCENT_COLOR,
        transparent: true,
        opacity: 0.15
      });
      group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

      return group;
    };

    const initScene = () => {
      canvas = document.createElement('canvas');
      canvasHostRef.value.appendChild(canvas);

      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
      camera.position.z = 18;

      pointsGroup = buildNodeGraph();
      scene.add(pointsGroup);

      // GSAP only reads scroll position here (via onUpdate) — it never
      // writes it, so native scroll behavior is untouched. The real
      // scroller on desktop is #content-scroll, not window (see AppLayout).
      scrollTriggerInstance = ScrollTrigger.create({
        scroller: document.getElementById('content-scroll') || window,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          scrollTargetProgress = self.progress;
        }
      });
      // Fonts/images and sections added later can still shift total scroll
      // height after this first measurement — refresh once layout settles.
      requestAnimationFrame(() => ScrollTrigger.refresh());

      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('resize', handleResize);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      canvas.addEventListener('webglcontextlost', handleContextLost);

      animate();
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Slow autonomous drift, independent of scroll/pointer input.
      pointsGroup.rotation.y += 0.0006;
      pointsGroup.rotation.x += 0.0002;

      // Lerp toward the latest pointer/scroll targets rather than snapping,
      // so the motion always reads as smooth and gentle.
      pointer.x += (pointerTarget.x - pointer.x) * 0.02;
      pointer.y += (pointerTarget.y - pointer.y) * 0.02;
      scrollProgress += (scrollTargetProgress - scrollProgress) * 0.05;

      camera.position.x = pointer.x * 1.2;
      camera.position.y = pointer.y * 0.8;
      pointsGroup.rotation.z = scrollProgress * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const handlePointerMove = (event) => {
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * -2;
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!renderer || !camera) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }, 150);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!rafId) {
        animate();
      }
    };

    const handleContextLost = (event) => {
      // Decorative only — on loss, just stop cleanly rather than attempt
      // restoration (a real mobile Safari/iOS memory-pressure quirk).
      event.preventDefault();
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    const disposeScene = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;

      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(resizeTimeout);

      scrollTriggerInstance?.kill();
      scrollTriggerInstance = null;

      if (pointsGroup) {
        pointsGroup.traverse((child) => {
          child.geometry?.dispose();
          child.material?.dispose();
        });
      }
      renderer?.dispose();
      canvas?.removeEventListener('webglcontextlost', handleContextLost);
      canvas?.remove();

      renderer = null;
      scene = null;
      camera = null;
      pointsGroup = null;
      canvas = null;
    };

    /******************************************************
     *                RETURN                              *
     ******************************************************/

    return {
      canvasHostRef
    };
  }
};
</script>
