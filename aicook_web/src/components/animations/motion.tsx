"use client";
import { motion, useReducedMotion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

/**
 * Custom hook that detects element visibility via getBoundingClientRect
 * on mount (handles hash navigation) plus Intersection Observer for scroll.
 */
function useVisibleOnce(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediate check — handles hash navigation / already in view
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    // Otherwise fall back to Intersection Observer for scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

interface FadeInMotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}
export const FadeInMotion: React.FC<FadeInMotionProps> = ({
  children,
  delay = 0.1,
  duration = 0.8,
  className = "",
}) => {
  const { ref, isVisible } = useVisibleOnce(0.1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ZoomInMotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Componente para animar zoom in con fade in.
 * Uso: <ZoomInMotion><div>...</div></ZoomInMotion>
 */
export const ZoomInMotion: React.FC<ZoomInMotionProps> = ({
  children,
  delay = 0.2,
  duration = 0.9,
  className = "",
}) => {
  const { ref, isVisible } = useVisibleOnce(0.1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : undefined}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 