"use client";

import { useEffect, useRef } from "react";

/**
 * Soft custom cursor ring.
 * - Only runs on devices with a real mouse (hover + fine pointer).
 * - Skipped entirely when the visitor prefers reduced motion.
 * - Animates through a ref and stops its rAF loop once it catches up with the
 *   pointer, instead of re-rendering React 60 times per second forever.
 */
export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!hasMouse.matches || reduceMotion.matches) return;

    let frame = 0;
    let running = false;
    let initialized = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      render();

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!initialized) {
        currentX = targetX;
        currentY = targetY;
        initialized = true;
        render();
      }

      el.style.opacity = "1";

      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full border border-[#C8FF00]/70 opacity-0 transition-opacity duration-200 md:block"
    />
  );
}
