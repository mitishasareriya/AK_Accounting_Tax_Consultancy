import { useEffect, useRef } from 'react';

/**
 * CustomCursor — Replicates the original Crafto template's "magic-cursor" behaviour.
 * The template uses a two-element cursor: a small dot ("cursor-page-inner") and
 * a larger trailing circle ("cursor-page-outer") that lags behind via CSS transition.
 *
 * Hover effects:
 *  - Hovering <a>, <button> adds class "cursor-large"  → outer circle enlarges
 *  - Hovering elements with data-cursor-* attributes can add mix-blend-mode effects
 *
 * The cursor is hidden on touch devices via CSS (pointer: coarse).
 */
const CustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let rafId = null;
    let isVisible = false;

    // Show cursor on first move
    const showCursor = () => {
      if (!isVisible) {
        outer.style.opacity = '1';
        inner.style.opacity = '1';
        isVisible = true;
      }
    };

    const onMouseMove = (e) => {
      showCursor();
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Inner dot follows instantly
      inner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    // Outer circle trails with lerp animation
    const lerp = (a, b, n) => a + (b - a) * n;
    const animateOuter = () => {
      outerX = lerp(outerX, mouseX, 0.12);
      outerY = lerp(outerY, mouseY, 0.12);
      outer.style.transform = `translate(${outerX}px, ${outerY}px)`;
      rafId = requestAnimationFrame(animateOuter);
    };
    rafId = requestAnimationFrame(animateOuter);

    // Hover: add cursor-large on interactive elements, and handle special cursors
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor], .swiper, .magic-cursor');
      if (target) {
        if (target.classList.contains('drag-cursor') || target.closest('.drag-cursor') || (target.classList.contains('swiper') && !target.classList.contains('view-cursor') && !target.classList.contains('round-cursor'))) {
          outer.classList.add('cursor-drag');
          outer.textContent = '< DRAG >';
          inner.style.display = 'none';
        } else if (target.classList.contains('view-cursor') || target.closest('.view-cursor')) {
          outer.classList.add('cursor-view');
          outer.textContent = 'Explore';
          inner.style.display = 'none';
        } else if (target.classList.contains('round-cursor') || target.closest('.round-cursor')) {
          outer.classList.add('cursor-round');
          outer.textContent = '';
          inner.style.display = 'none';
        } else {
          outer.classList.add('cursor-large');
          inner.classList.add('cursor-inner-large');
        }
      }
    };
    const onMouseOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor], .swiper, .magic-cursor');
      if (target) {
        outer.classList.remove('cursor-large');
        outer.classList.remove('cursor-drag');
        outer.classList.remove('cursor-view');
        outer.classList.remove('cursor-round');
        outer.textContent = '';
        inner.classList.remove('cursor-inner-large');
        inner.style.display = 'block';
      }
    };

    // Hide cursor when leaving window
    const onMouseLeave = () => {
      outer.style.opacity = '0';
      inner.style.opacity = '0';
      isVisible = false;
    };
    const onMouseEnter = () => {
      showCursor();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Outer trailing ring */}
      <div
        ref={outerRef}
        id="cursor-page-outer"
        className="cursor-page-outer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot — snaps directly to mouse */}
      <div
        ref={innerRef}
        id="cursor-page-inner"
        className="cursor-page-inner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          pointerEvents: 'none',
          zIndex: 100000,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />

      {/* Inline CSS for hover states and touch-device hiding */}
      <style>{`
        /* Hide custom cursor on touch devices */
        @media (pointer: coarse) {
          #cursor-page-outer,
          #cursor-page-inner {
            display: none !important;
          }
        }
        /* Hide the system cursor when our custom cursor is active */
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        /* Large state when hovering interactive elements */
        #cursor-page-outer.cursor-large {
          width: 60px !important;
          height: 60px !important;
          border-color: rgba(37, 40, 64, 0.3) !important;
        }
        #cursor-page-inner.cursor-inner-large {
          width: 10px !important;
          height: 10px !important;
        }
        /* Drag, View, and Round custom cursors for Swiper/Carousels */
        #cursor-page-outer.cursor-drag,
        #cursor-page-outer.cursor-view,
        #cursor-page-outer.cursor-round {
          border-color: transparent !important;
          background-color: rgba(0, 0, 0, 0.2) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: white !important;
          font-family: inherit !important;
          mix-blend-mode: normal !important;
        }

        #cursor-page-outer.cursor-drag {
          width: 140px !important;
          height: 140px !important;
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px) !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          letter-spacing: 1px !important;
        }

        #cursor-page-outer.cursor-view {
          width: 180px !important;
          height: 180px !important;
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px) !important;
          font-size: 16px !important;
          font-weight: 400 !important;
        }

        #cursor-page-outer.cursor-round {
          width: 220px !important;
          height: 220px !important;
          backdrop-filter: blur(6px) !important;
          -webkit-backdrop-filter: blur(6px) !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
