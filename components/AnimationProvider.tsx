"use client";

import { useEffect } from "react";
import { animate, createTimeline, utils } from "animejs";
const stagger = utils.stagger;

export default function AnimationProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    const lowPowerMode = prefersReducedMotion || isMobile;

    if (lowPowerMode) {
      document.querySelectorAll<HTMLElement>(".hero-animate-1, .hero-animate-2, .hero-animate-cta, .hero-bento .bento-card, .reveal")
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      return;
    }

    /* ── Hero entrance (anime.js v4 timeline) ───── */
    const tl = createTimeline({ defaults: { ease: "outExpo" } });

    tl.add(".hero-animate-1", {
      opacity:    [0, 1],
      translateY: [20, 0],
      duration:   700,
      delay:      stagger(90),
    })
    .add(".hero-animate-2", {
      opacity:    [0, 1],
      translateY: [14, 0],
      duration:   600,
      delay:      stagger(70),
    }, "-=400")
    .add(".hero-animate-cta", {
      opacity:    [0, 1],
      translateY: [10, 0],
      scale:      [0.96, 1],
      duration:   500,
      delay:      stagger(60),
    }, "-=300")
    .add(".hero-bento .bento-card", {
      opacity:    [0, 1],
      translateY: [24, 0],
      scale:      [0.97, 1],
      duration:   600,
      delay:      stagger(80),
    }, "-=500");

    /* ── Scroll reveal (IntersectionObserver) ───── */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? 0);

          animate(el, {
            opacity:    [0, 1],
            translateY: [28, 0],
            duration:   680,
            delay,
            ease:       "outExpo",
          });

          // Stagger children if marked
          if (el.dataset.stagger) {
            animate(el.querySelectorAll(el.dataset.stagger), {
              opacity:    [0, 1],
              translateY: [16, 0],
              duration:   560,
              delay:      stagger(70, { start: delay + 80 }),
              ease:       "outExpo",
            });
          }

          observer.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
