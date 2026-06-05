import { useEffect } from 'react';
import anime from 'animejs';

export const useAnime = () => {
  useEffect(() => {
    // 1. Select all elements that have a data-anime attribute
    const elements = document.querySelectorAll('[data-anime]');

    // 2. Setup IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animeStr = el.getAttribute('data-anime');
          
          if (!animeStr) return;

          try {
            const animeData = JSON.parse(animeStr);
            
            // Determine targets (either the element itself, or its immediate children)
            let targets = el;
            if (animeData.el === 'childs') {
              targets = el.children;
            }

            // Construct configuration for Anime.js
            const config = {
              targets,
              ...animeData,
              autoplay: true
            };

            // Handle staggering correctly
            if (animeData.staggervalue) {
              config.delay = anime.stagger(animeData.staggervalue, { start: animeData.delay || 0 });
              delete config.staggervalue;
            }

            // Remove non-anime properties before passing
            delete config.el;

            // Trigger animation
            anime(config);

            // Ensure the animation only runs once per element
            observerInstance.unobserve(el);
          } catch (e) {
            console.error('Failed to parse data-anime attribute', e);
          }
        }
      });
    }, { threshold: 0.1 });

    // 3. Pre-initialize elements to prevent flashing before animation starts
    elements.forEach(el => {
      try {
        const animeData = JSON.parse(el.getAttribute('data-anime') || '{}');
        
        let targets = el;
        if (animeData.el === 'childs') {
          targets = Array.from(el.children);
        } else {
          targets = [el];
        }
        
        // If the animation includes opacity fading, set it to the initial value (e.g. 0) immediately
        targets.forEach(t => {
          if (animeData.opacity !== undefined) {
            t.style.opacity = Array.isArray(animeData.opacity) ? animeData.opacity[0] : 0;
          }
          if (animeData.translateY !== undefined) {
             t.style.transform = `translateY(${Array.isArray(animeData.translateY) ? animeData.translateY[0] : animeData.translateY}px)`;
          }
        });
        
        // Start observing for scroll
        observer.observe(el);
      } catch (e) {
        console.error('Failed to init data-anime attribute', e);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
};
