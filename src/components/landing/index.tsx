"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInMotion } from "../animations/motion";
import { useI18nContext } from "@/context/I18nContext";

export default function LandingPage() {
  const { t, isReady } = useI18nContext();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#E8E4D9] via-[#F1EDE7] to-[#E8E4D9] overflow-hidden">
      <FadeInMotion>
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">

          {/* Text */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            {isReady ? (
              <p className="text-body-large text-[#284139]/60 font-light tracking-widest uppercase">
                {t('landing.subtitle', 'coming soon')}
              </p>
            ) : (
              <div className="animate-pulse bg-gray-200 h-6 w-40 mx-auto rounded" />
            )}
          </div>

          {/* Devices */}
          <div className="flex items-end justify-center">
            {/* iPhone */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/mockups/first_screen_iPhone.png"
                alt="ai.Cook on iPhone"
                className="drop-shadow-2xl"
                width={360}
                height={640}
                sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 20vw, (min-width: 640px) 28vw, 50vw"
                style={{ width: 'clamp(180px, 20vw, 280px)', height: 'auto' }}
                priority
              />
            </motion.div>

            {/* iPad — offset behind iPhone */}
            <motion.div
              className="relative -ml-8 sm:-ml-10 lg:-ml-12 hidden md:block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/mockups/first_screen_iPad.png"
                alt="ai.Cook on iPad"
                className="drop-shadow-xl"
                width={1024}
                height={1366}
                sizes="(min-width: 1280px) 14vw, (min-width: 1024px) 18vw, 22vw"
                style={{ width: 'clamp(160px, 16vw, 240px)', height: 'auto' }}
              />
            </motion.div>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
}
