"use client";

import { useEffect } from "react";
import { animate, createTimeline, utils } from "animejs";
const stagger = utils.stagger;

export default function AnimationProvider() {
  useEffect(() => {
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

    /* ── 3-D card tilt ──────────────────────────── */
    function onMove(this: HTMLElement, e: MouseEvent) {
      const r = this.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -8;
      const ry = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  8;
      animate(this, { rotateX: rx, rotateY: ry, duration: 120, ease: "linear" });
      this.style.boxShadow = `${-ry * 1.6}px ${rx * 1.6}px 32px rgba(124,58,237,0.14)`;
    }
    function onLeave(this: HTMLElement) {
      animate(this, { rotateX: 0, rotateY: 0, duration: 500, ease: "outElastic(1,.6)" });
      this.style.boxShadow = "";
    }

    const tiltEls = document.querySelectorAll<HTMLElement>(".card-3d");
    tiltEls.forEach((el) => {
      el.style.transformStyle = "preserve-3d";
      el.addEventListener("mousemove", onMove as EventListener);
      el.addEventListener("mouseleave", onLeave as EventListener);
    });

    /* ── Magnetic buttons ───────────────────────── */
    function onMagMove(this: HTMLElement, e: MouseEvent) {
      const r  = this.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) * 0.3;
      const dy = (e.clientY - (r.top  + r.height / 2)) * 0.3;
      animate(this, { translateX: dx, translateY: dy, duration: 200, ease: "outQuad" });
    }
    function onMagLeave(this: HTMLElement) {
      animate(this, { translateX: 0, translateY: 0, duration: 600, ease: "outElastic(1,.5)" });
    }

    const magEls = document.querySelectorAll<HTMLElement>(".btn-magnet");
    magEls.forEach((el) => {
      el.addEventListener("mousemove", onMagMove as EventListener);
      el.addEventListener("mouseleave", onMagLeave as EventListener);
    });

    /* ── Parallax blobs ─────────────────────────── */
    function onHeroMouse(e: MouseEvent) {
      const dx = (e.clientX / window.innerWidth  - 0.5) * 24;
      const dy = (e.clientY / window.innerHeight - 0.5) * 16;
      document.querySelectorAll<HTMLElement>(".parallax-blob").forEach((b, i) => {
        const f = i % 2 === 0 ? 1 : -0.6;
        animate(b, { translateX: dx * f, translateY: dy * f, duration: 900, ease: "outQuad" });
      });
    }
    window.addEventListener("mousemove", onHeroMouse);

    /* ── Marquee (skills ticker) ────────────────── */
    const marquee = document.querySelector<HTMLElement>(".marquee-track");
    if (marquee) {
      const totalW = marquee.scrollWidth / 2;
      animate(marquee, {
        translateX: [0, -totalW],
        duration:   18000,
        loop:       true,
        ease:       "linear",
      });
    }

    return () => {
      observer.disconnect();
      tiltEls.forEach((el) => {
        el.removeEventListener("mousemove", onMove as EventListener);
        el.removeEventListener("mouseleave", onLeave as EventListener);
      });
      magEls.forEach((el) => {
        el.removeEventListener("mousemove", onMagMove as EventListener);
        el.removeEventListener("mouseleave", onMagLeave as EventListener);
      });
      window.removeEventListener("mousemove", onHeroMouse);
    };
  }, []);

  return null;
}
