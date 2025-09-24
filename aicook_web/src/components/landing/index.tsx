// components/LandingPage.tsx
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInMotion } from "../animations/motion";
import GraphicAssets from "../graphic assets";
import { useI18nContext } from "@/context/I18nContext";

export default function LandingPage() {
  const { t, isReady } = useI18nContext();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F1EDE7]/85 to-[#E8E4D9]/90 overflow-hidden">
      <FadeInMotion>
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 min-h-[50vh] lg:min-h-full px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-0 relative">
            <div className="text-center relative z-20 max-w-2xl mx-auto space-y-6 lg:space-y-8">
              {isReady ? (
                <>
                  <h1 className="heading-hero font-melodrama-regular tracking-wide text-[#284139] leading-tight">
                    {t('landing.title', 'get to know ai, one recipe at a time')}
                  </h1>
                  <p className="text-body-large text-[#284139] font-melodrama-light">
                    {t('landing.subtitle', 'coming this fall')}
                  </p>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="animate-pulse bg-gray-200 h-16 w-full rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-8 w-3/4 mx-auto rounded"></div>
                </div>
              )}
            </div>
            <GraphicAssets />
          </div>
          
          {/* Right Column: Mockups */}
          <div className="flex items-end justify-center w-full lg:w-1/2 min-h-[50vh] lg:min-h-full px-4 sm:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-16 xl:py-20">
            <div className="flex flex-row items-end gap-3 sm:gap-4 lg:gap-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPhone.png"
                  alt="First Screen iPhone"
                  className="image-single drop-shadow-2xl"
                  width={360}
                  height={640}
                  sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 640px) 40vw, 80vw"
                  priority
                />
              </motion.div>
              <motion.div
                className="relative hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <Image
                  src="/mockups/first_screen_iPad.png"
                  alt="First Screen iPad"
                  className="image-tablet drop-shadow-2xl"
                  width={1024}
                  height={1366}
                  sizes="(min-width: 1536px) 28vw, (min-width: 1280px) 32vw, (min-width: 1024px) 38vw, (min-width: 640px) 60vw, 80vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
}