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
      x: direction > 0 ? 600 : -600,
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
      x: direction < 0 ? 600 : -600,
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

  // Check if current slide has dual images (slide 3 in your case)
  const isDualImageSlide = currentIndex === 2; // 0-based index for the third slide

  return (
    <div className={`flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-18 lg:py-24 ${
      isDualImageSlide 
        ? 'gap-30 lg:gap-34 xl:gap-38 2xl:gap-42' 
        : 'gap-8 lg:gap-12 xl:gap-16'
    }`}>
      
      {/* Image Section - Expanded for dual images */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center relative">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-12 right-12 w-24 h-24 bg-gradient-to-br from-[#284139]/4 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-tr from-[#284139]/3 to-transparent rounded-full blur-xl"></div>
        </div>

        {/* Main Slide Container - Enhanced padding and spacing */}
        <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-[440px] sm:h-[520px] md:h-[580px] lg:h-[640px] xl:h-[680px] flex items-center justify-center px-2 sm:px-4 md:px-6" style={{ perspective: '800px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 28 },
                opacity: { duration: 0.35, ease: "easeInOut" },
                scale: { duration: 0.35, ease: "easeInOut" },
                rotateY: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              className="absolute inset-0 flex items-center justify-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    type: "tween"
                  }}
                  className="relative transform-gpu will-change-transform"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    perspective: '1000px'
                  }}
                >
                  {slides[currentIndex]}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Description Container with Better Spacing */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col items-start justify-center mt-8 lg:mt-0">
        <motion.div
          layout
          className="relative w-full"
        >
          {/* Subtle Glass Container */}
          <div className="relative bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-9 lg:p-11 shadow-2xl border border-[#284139]/6 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px] w-full transition-all duration-700 ease-out hover:shadow-3xl hover:bg-white/88 group">
            
            {/* Refined Border Accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#284139]/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-transparent via-[#284139]/15 to-transparent"></div>
            
            {/* Subtle Floating Elements */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#284139]/5 to-transparent rounded-full blur-lg"></div>
            <div className="absolute bottom-8 left-6 w-8 h-8 bg-gradient-to-tr from-[#284139]/4 to-transparent rounded-full blur-md"></div>

            {/* Content with Smooth Transitions */}
            <div className="relative z-10 h-full flex flex-col">
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
                  className="flex-1"
                >
                  {descriptions[currentIndex]}
                </motion.div>
              </AnimatePresence>

              {/* Refined Pagination Footer */}
              <motion.div 
                layout
                className="flex items-center justify-between mt-7 sm:mt-8 w-full pt-6 sm:pt-7 border-t border-[#284139]/6"
              >
                <div className="flex space-x-2.5">
                  {descriptions.map((_, idx: number) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className={`h-2 sm:h-2.5 rounded-full transition-all duration-600 ease-out ${
                        idx === currentIndex 
                          ? 'bg-gradient-to-r from-[#284139]/85 to-[#284139]/65 w-10 sm:w-12 shadow-sm' 
                          : 'bg-[#284139]/12 w-4 sm:w-5 hover:bg-[#284139]/25 hover:w-6 sm:hover:w-7'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center space-x-2.5">
                  <div className="text-xs font-light text-[#284139]/35 tracking-wider">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </div>
                  <div className="w-6 sm:w-7 h-[1px] bg-gradient-to-r from-[#284139]/15 to-transparent"></div>
                  <div className="text-xs font-medium text-[#284139]/55">
                    {String(descriptions.length).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Very Subtle Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-900 ease-out rounded-2xl sm:rounded-3xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}