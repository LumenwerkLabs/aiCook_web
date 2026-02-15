"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18nContext } from "@/context/I18nContext";

export default function AboutPage() {
  const { t, isReady } = useI18nContext();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#E8E4D9] via-[#F1EDE7] to-[#E8E4D9]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-24 sm:pb-32">

        {/* Logo + Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/logo.svg"
              alt="ai.Cook logo"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <h1 className="font-casta-regular text-3xl sm:text-4xl lg:text-5xl text-[#284139] tracking-wider">
              ai.Cook
            </h1>
          </div>
          <p className="text-body-large text-[#284139]/50 font-light tracking-widest uppercase">
            {isReady ? t('about.label', 'About') : 'About'}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="space-y-16 sm:space-y-20"
        >
          {/* Purpose */}
          <section>
            <h2 className="text-xl sm:text-2xl font-light text-[#284139] tracking-wide mb-6">
              {isReady ? t('about.purpose.title', 'Purpose') : 'Purpose'}
            </h2>
            <div className="space-y-4">
              <p className="text-body-large text-[#284139]/75 font-light leading-relaxed">
                {isReady ? t('about.purpose.p1', 'We waste food, repeat the same meals, and struggle to eat well — not because we don\'t care, but because we lack the right guidance at the right moment. ai.Cook exists to change that.') : 'We waste food, repeat the same meals, and struggle to eat well — not because we don\'t care, but because we lack the right guidance at the right moment. ai.Cook exists to change that.'}
              </p>
              <p className="text-body-large text-[#284139]/75 font-light leading-relaxed">
                {isReady ? t('about.purpose.p2', 'ai.Cook is an AI-enhanced cooking companion designed to bridge the gap between what\'s in your kitchen and what nourishes your body. It manages your household ingredients, recommends recipes tailored to your time and preferences, and adapts to your dietary and nutritional needs — all in one place.') : 'ai.Cook is an AI-enhanced cooking companion designed to bridge the gap between what\'s in your kitchen and what nourishes your body. It manages your household ingredients, recommends recipes tailored to your time and preferences, and adapts to your dietary and nutritional needs — all in one place.'}
              </p>
            </div>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-xl sm:text-2xl font-light text-[#284139] tracking-wide mb-6">
              {isReady ? t('about.vision.title', 'Vision') : 'Vision'}
            </h2>
            <div className="space-y-4">
              <p className="text-body-large text-[#284139]/75 font-light leading-relaxed">
                {isReady ? t('about.vision.p1', 'We believe cooking is not a chore — it\'s a daily act of care for yourself and the people around you. Food connects body, mind, and well-being. Our vision is to make that connection effortless.') : 'We believe cooking is not a chore — it\'s a daily act of care for yourself and the people around you. Food connects body, mind, and well-being. Our vision is to make that connection effortless.'}
              </p>
              <p className="text-body-large text-[#284139]/75 font-light leading-relaxed">
                {isReady ? t('about.vision.p2', 'ai.Cook takes a holistic view: what you eat, how much time you have, what your body needs, and what ingredients are already at hand. Technology should support this — quietly, intelligently, without getting in the way.') : 'ai.Cook takes a holistic view: what you eat, how much time you have, what your body needs, and what ingredients are already at hand. Technology should support this — quietly, intelligently, without getting in the way.'}
              </p>
            </div>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-xl sm:text-2xl font-light text-[#284139] tracking-wide mb-6">
              {isReady ? t('about.approach.title', 'Approach') : 'Approach'}
            </h2>
            <div className="space-y-4">
              <p className="text-body-large text-[#284139]/75 font-light leading-relaxed">
                {isReady ? t('about.approach.p1', 'Every recipe in ai.Cook is human-created and reviewed. We use AI to find the right match for you — not to generate content. The intelligence is in the curation, not the creation.') : 'Every recipe in ai.Cook is human-created and reviewed. We use AI to find the right match for you — not to generate content. The intelligence is in the curation, not the creation.'}
              </p>
              <p className="text-body-large text-[#284139]/75 font-light leading-relaxed">
                {isReady ? t('about.approach.p2', 'Powered by Apple Intelligence, ai.Cook runs entirely on your device. No data leaves your phone. No ads. No tracking. Your kitchen, your rules.') : 'Powered by Apple Intelligence, ai.Cook runs entirely on your device. No data leaves your phone. No ads. No tracking. Your kitchen, your rules.'}
              </p>
            </div>
          </section>

          {/* Divider + CTA */}
          <div className="pt-8 border-t border-[#284139]/10">
            <p className="text-body-small text-[#284139]/50 font-light tracking-wide">
              {isReady ? t('about.cta', 'Interested?') : 'Interested?'}
              {' '}
              <Link
                href="mailto:jointhewaitlist@aicook.com"
                className="text-[#284139]/70 underline underline-offset-4 hover:text-[#284139] transition-colors duration-300"
              >
                {isReady ? t('about.ctaLink', 'Join the waitlist') : 'Join the waitlist'}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
