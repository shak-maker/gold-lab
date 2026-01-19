"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

interface LoadingAnimationProps {
  onComplete?: () => void;
}

// Easing function for smooth animation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const springProgress = useMotionValue(0);
  const smoothProgress = useSpring(springProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if already loaded (don't show on subsequent navigations)
    if (sessionStorage.getItem("pageLoaded")) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Animate from 0 to 100 over 2.5 seconds with easing
    const duration = 2500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const normalizedProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(normalizedProgress);
      const progressValue = Math.floor(easedProgress * 100);
      
      setProgress(progressValue);
      springProgress.set(easedProgress * 100);

      if (normalizedProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Mark as loaded and hide after reaching 100
        sessionStorage.setItem("pageLoaded", "true");
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 400);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete, springProgress]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
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
            <motion.div
              key={progress}
              className="relative text-[#fa9906] text-[180px] sm:text-[240px] md:text-[300px] lg:text-[360px] font-mono font-bold tabular-nums tracking-tighter select-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 0 60px rgba(250, 153, 6, 0.9), 0 0 100px rgba(250, 153, 6, 0.6), 0 0 140px rgba(250, 153, 6, 0.3)",
                WebkitTextStroke: "1px rgba(250, 153, 6, 0.3)",
              }}
            >
              {String(progress).padStart(3, '0')}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

