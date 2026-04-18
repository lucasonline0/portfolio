import { useEffect } from "react";

const MOTION_SELECTOR = "[data-motion]";

export const useScrollMotion = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(MOTION_SELECTOR));

    if (!elements.length) {
      return;
    }

    const revealVisibleElements = () => {
      const threshold = window.innerHeight * 0.88;

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top <= threshold) {
          element.classList.add("is-visible");
        }
      });
    };

    revealVisibleElements();

    if (!("IntersectionObserver" in window)) {
      return;
    }

    root.classList.add("motion-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove("motion-enabled");
    };
  }, []);
};
