"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion";
import Swiper from "../swiper";
import { useI18nContext } from "@/context/I18nContext";

export default function Product() {
  const { t, isReady } = useI18nContext();

  const slides = [
    // 1 — Home Screen
    <div key="home" className="stable-image-container">
      <Image
        src="/mockups/home_screen.png"
        alt="Home Screen"
        className="image-single"
        width={360}
        height={640}
        priority
      />
    </div>,

    // 2 — AI Recommendation
    <div key="ai-bot" className="stable-image-container">
      <Image
        src="/mockups/ai_recomm.png"
        alt="AI Recommendation Screen"
        className="image-single"
        width={360}
        height={640}
      />
    </div>,

    // 3 — Cupboard Screen
    <div key="cupboard" className="stable-image-container">
      <Image
        src="/mockups/cupboard_screen.png"
        alt="Cupboard Screen"
        className="image-single"
        width={360}
        height={640}
      />
    </div>,

    // 4 — Recipes + Steps (dual)
    <div key="recipes-duo" className="stable-image-container">
      <Image
        src="/mockups/recipes_screen.png"
        alt="Recipe Card Screen"
        className="image-dual"
        width={360}
        height={640}
      />
      <Image
        src="/mockups/steps_dialog.png"
        alt="Recipe Steps"
        className="image-dual"
        width={360}
        height={640}
      />
    </div>,

    // 5 — Apple Intelligence
    <div key="privacy" className="stable-image-container">
      <Image
        src="/mockups/apple_intelligence.png"
        alt="Apple Intelligence"
        className="image-large"
        width={360}
        height={640}
      />
    </div>,
  ];

  const descriptions = [
    // 1 — Intro
    <div key="desc-1" className="space-y-4">
      <h2 className="heading-card font-light text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.1', 'Say hi to ai.Cook') : 'Say hi to ai.Cook'}
      </h2>
      <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
        {isReady ? t('product.descriptions.1', "An AI-powered assistant that learns from your preferences, available time, and nutritional goals to help you discover perfect recipes.") : "An AI-powered assistant that learns from your preferences, available time, and nutritional goals to help you discover perfect recipes."}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.2', 'Personal Preferences') : 'Personal Preferences'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.3', 'Time Management') : 'Time Management'}
        </span>
      </div>
    </div>,

    // 2 — AI Recommendations
    <div key="desc-2" className="space-y-4">
      <h2 className="heading-card font-light text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.1', 'Smart Recommendations') : 'Smart Recommendations'}
      </h2>
      <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
        {isReady ? t('aiAndRecipes.descriptions.1', 'Enter your available time, preferred difficulty level and any additional preferences, and let ai.Cook handle the rest.') : 'Enter your available time, preferred difficulty level and any additional preferences, and let ai.Cook handle the rest.'}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.2', 'AI-powered') : 'AI-powered'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.9', 'Diet Support') : 'Diet Support'}
        </span>
      </div>
    </div>,

    // 3 — Ingredient Management
    <div key="desc-3" className="space-y-4">
      <h2 className="heading-card font-light text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.2', 'Smart Ingredient Management') : 'Smart Ingredient Management'}
      </h2>
      <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
        {isReady ? t('product.descriptions.4', 'Build your personal pantry list with your available ingredients.') : 'Build your personal pantry list with your available ingredients.'}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.10', 'Rich Database') : 'Rich Database'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.12', 'Auto Nutrition') : 'Auto Nutrition'}
        </span>
      </div>
    </div>,

    // 4 — Cookbook
    <div key="desc-4" className="space-y-4">
      <h2 className="heading-card font-light text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.4', 'Your Personalized Cookbook') : 'Your Personalized Cookbook'}
      </h2>
      <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
        {isReady ? t('aiAndRecipes.descriptions.7', 'Recipes designed to be as beautiful as they are delicious: clear, visual, and effortless to follow.') : 'Recipes designed to be as beautiful as they are delicious: clear, visual, and effortless to follow.'}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.1', 'High-quality Recipes') : 'High-quality Recipes'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.7', 'Categorized') : 'Categorized'}
        </span>
      </div>
    </div>,

    // 5 — Privacy
    <div key="desc-5" className="space-y-4">
      <h2 className="heading-card font-light text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.5', 'Quick. Smart. Private.') : 'Quick. Smart. Private.'}
      </h2>
      <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
        Powered by Apple Intelligence. No data leaves your device. No ads. No tracking.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.8', 'Private') : 'Private'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.9', 'Offline') : 'Offline'}
        </span>
      </div>
    </div>,
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 overflow-hidden py-16 sm:py-20 lg:py-24" id="product">
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 sm:mb-24 lg:mb-28">
            <h1 className="heading-hero font-extralight tracking-wider text-[#284139] mb-6 leading-tight">
              {isReady ? t('product.title', 'Discover ai.Cook') : 'Discover ai.Cook'}
            </h1>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </section>
  );
}
