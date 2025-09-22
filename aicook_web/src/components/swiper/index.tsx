/**
 * @file Swiper component - COMPLETE FIXED VERSION
 * @description Swiper with standardized design system integration
 * @author ai.Cook
 * @version 2.1.0
 * @since 2025-09-22
 */
"use client";
import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

interface SwiperProps {
  slides: ReactNode[];
  descriptions: ReactNode[];
}

export default function Swiper({ slides, descriptions }: SwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 8500);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 8 : -8,
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Standardized layout container using CSS Grid */}
      <div className="swiper-layout py-8 sm:py-12 lg:py-16">
        
        {/* Image Section - Consistent sizing and positioning */}
        <div className="w-full flex items-center justify-center relative order-1 lg:order-1">
          
          {/* Subtle background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-8 right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#284139]/8 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-tr from-[#284139]/6 to-transparent rounded-full blur-xl"></div>
          </div>

          {/* Main Slide Container - Using standardized container class */}
          <div className="relative w-full stable-image-container" style={{ perspective: '800px' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 30 },
                  opacity: { duration: 0.3, ease: "easeInOut" },
                  scale: { duration: 0.3, ease: "easeInOut" },
                  rotateY: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                className="absolute inset-0 flex items-center justify-center"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  {/* Image Container with consistent hover effect */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut"
                    }}
                    className="relative transform-gpu will-change-transform w-full h-full flex items-center justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      {slides[currentIndex]}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description Container - Using standardized card class */}
        <div className="w-full flex flex-col items-start justify-center order-2 lg:order-2">
          <motion.div layout className="relative w-full">
            {/* Standardized Glass Container */}
            <div className="description-card group">
              
              {/* Subtle Border Accents */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#284139]/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-transparent via-[#284139]/15 to-transparent"></div>
              
              {/* Floating Elements using standardized sizing */}
              <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#284139]/6 to-transparent rounded-full blur-lg"></div>
              <div className="absolute bottom-6 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tr from-[#284139]/5 to-transparent rounded-full blur-md"></div>

              {/* Content with Standardized Typography */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      delay: 0.15,
                      duration: 0.45,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex-grow flex flex-col justify-center"
                  >
                    {descriptions[currentIndex]}
                  </motion.div>
                </AnimatePresence>

                {/* Standardized Pagination Footer */}
                <motion.div 
                  layout
                  className="flex items-center justify-between mt-6 w-full pt-4 border-t border-[#284139]/8"
                >
                  <div className="flex space-x-2">
                    {descriptions.map((_, idx: number) => (
                      <motion.button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`h-2 rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-[#284139]/30 focus:ring-offset-1 ${
                          idx === currentIndex 
                            ? 'bg-gradient-to-r from-[#284139]/85 to-[#284139]/70 w-8 shadow-sm' 
                            : 'bg-[#284139]/15 w-3 hover:bg-[#284139]/30 hover:w-5'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-light text-[#284139]/40 tracking-wider">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="w-4 h-[1px] bg-gradient-to-r from-[#284139]/20 to-transparent"></div>
                    <div className="text-xs font-medium text-[#284139]/60">
                      {String(descriptions.length).padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}