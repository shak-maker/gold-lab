"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INTRO_LOADER_CLASS, INTRO_SEEN_ATTR, INTRO_STORAGE_KEY } from "@/lib/intro";

// Whether the intro loader has finished in this document. Seeded from the attribute the
// inline head script sets on repeat visits, so remounts in the same tab skip the loader too.
let introDone: boolean | null = null;
const listeners = new Set<() => void>();

function getIntroDone(): boolean {
  if (introDone === null) {
    introDone = document.documentElement.hasAttribute(INTRO_SEEN_ATTR);
  }
  return introDone;
}

function finishIntro() {
  introDone = true;
  // sessionStorage throws when storage is blocked (privacy modes, disabled site data)
  try {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

// True once the loader has started fading out (and on repeat visits). False during SSR.
export function useIntroDone(): boolean {
  return useSyncExternalStore(subscribe, getIntroDone, () => false);
}

// Easing function for smooth animation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const isDone = useIntroDone();

  useEffect(() => {
    if (getIntroDone()) return;

    // Keep the page underneath from scrolling or taking focus while the overlay is up
    const root = document.documentElement;
    const main = document.querySelector("main");
    root.classList.add("intro-lock");
    main?.setAttribute("inert", "");
    const unlock = () => {
      root.classList.remove("intro-lock");
      main?.removeAttribute("inert");
    };

    // Animate from 0 to 100 over 2.5 seconds with easing
    const duration = 2500;
    const startTime = performance.now();
    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastValue = -1;

    const animate = (now: number) => {
      const normalizedProgress = Math.min((now - startTime) / duration, 1);
      const progressValue = Math.floor(easeOutCubic(normalizedProgress) * 100);

      if (progressValue !== lastValue) {
        lastValue = progressValue;
        setProgress(progressValue);
      }

      if (normalizedProgress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        // Hold at 100 briefly, then fade out and reveal the page
        timeoutId = setTimeout(() => {
          unlock();
          finishIntro();
        }, 400);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
      unlock();
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`${INTRO_LOADER_CLASS} fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden`}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(250, 153, 6, 0.3) 0%, transparent 70%)",
                "radial-gradient(circle at 30% 70%, rgba(250, 153, 6, 0.4) 0%, transparent 70%)",
                "radial-gradient(circle at 70% 30%, rgba(250, 153, 6, 0.3) 0%, transparent 70%)",
                "radial-gradient(circle at 50% 50%, rgba(250, 153, 6, 0.3) 0%, transparent 70%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main number display */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Glow effect behind number */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              animate={{
                opacity: [0.6, 0.8, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(circle, rgba(250, 153, 6, 1) 0%, transparent 70%)",
              }}
            />

            {/* Number */}
            <div
              className="relative text-[#fa9906] text-[180px] sm:text-[240px] md:text-[300px] lg:text-[360px] font-mono font-bold tabular-nums tracking-tighter select-none"
              style={{
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 0 60px rgba(250, 153, 6, 0.9), 0 0 100px rgba(250, 153, 6, 0.6), 0 0 140px rgba(250, 153, 6, 0.3)",
                WebkitTextStroke: "1px rgba(250, 153, 6, 0.3)",
              }}
            >
              {String(progress).padStart(3, '0')}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

