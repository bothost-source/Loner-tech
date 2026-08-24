import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onEnter = () => cursor.classList.add('hover');
    const onLeave = () => cursor.classList.remove('hover');

    window.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll('a, button, .btn, input, textarea, select, .skill-chip, .service-card, .contact-card, .project-card, .theme-toggle');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll('a, button, .btn, input, textarea, select, .skill-chip, .service-card, .contact-card, .project-card, .theme-toggle');
      newInteractives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
}
