"use client";
import { ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SwiperProps {
  slides: ReactNode[];
  descriptions: ReactNode[];
}

export default function Swiper({ slides, descriptions }: SwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 8500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="swiper-layout py-8 sm:py-12 lg:py-16">

        {/* Image Section */}
        <div
          className="w-full order-1"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full grid grid-cols-1 grid-rows-1">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="col-start-1 row-start-1 flex items-center justify-center"
              >
                {slides[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full flex flex-col items-start justify-center order-2">
          <div className="relative w-full">
            <div className="description-card">

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="flex-grow flex flex-col justify-center"
                  >
                    {descriptions[currentIndex]}
                  </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-8 w-full pt-5 border-t border-[#284139]/10">
                  {/* Progress indicators */}
                  <div className="flex items-center gap-1.5">
                    {descriptions.map((_, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-[2px] rounded-full transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#284139]/30 focus-visible:ring-offset-2 ${
                          idx === currentIndex
                            ? 'bg-[#284139]/70 w-8'
                            : 'bg-[#284139]/15 w-4 hover:bg-[#284139]/30'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Slide counter */}
                  <div className="flex items-center gap-2 font-light text-xs tracking-widest">
                    <span className="text-[#284139]/50">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="w-3 h-[1px] bg-[#284139]/20" />
                    <span className="text-[#284139]/35">
                      {String(descriptions.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
