"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion";
import Swiper from "../swiper";
import { useI18nContext } from "@/context/I18nContext";

export default function Product() {
  const { t, isReady } = useI18nContext();
  const slides = [
    // headers 1
    <Image
      key="home"
      src="/mockups/home_screen.png"
      alt="Home Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    // headers 2
    <Image
      key="cupboard"
      src="/mockups/cupboard_screen.png"
      alt="Cupboard Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    // headers 3 - Side by side images
    <div
      key="adding-duo"
      className="flex flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center items-center w-full px-4 sm:px-6 md:px-8"
    >
      <Image
        src="/mockups/add_global_ing_dialog.png"
        alt="Add Global Ingredient Dialog"
        className="w-full h-auto drop-shadow-2xl max-w-[160px] xs:max-w-[190px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px]"
        width={360}
        height={640}
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        src="/mockups/add_custom_ing_dialog.png"
        alt="Add Custom Ingredient Dialog"
        className="w-full h-auto drop-shadow-2xl max-w-[160px] xs:max-w-[190px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px]"
        width={360}
        height={640}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>,
    // headers 4
    <Image
      key="smart_shopping_list"
      src="/mockups/shop_list_widget.png"
      alt="Smart Shopping List Widget"
      className="w-full h-auto drop-shadow-2xl max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    // headers 5
    <div
      key="privacy-container"
      className="flex justify-center items-center w-full px-6 sm:px-8 md:px-10"
    >
      <Image
        key="privacy"
        src="/mockups/apple_intelligence.png"
        alt="Apple Intelligence"
        className="w-full h-auto drop-shadow-2xl max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[370px] lg:max-w-[420px]"
        width={360}
        height={640}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('product.headers.1', 'Say hi to ai.Cook') : 'Say hi to ai.Cook'}
      </h2>
      <div className="space-y-4 sm:space-y-5">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.1', "We waste food, repeat meals, and struggle to stay healthy - all because we lack smart, personalized and targeted guidance about what to eat.") : "We waste food, repeat meals, and struggle to stay healthy - all because we lack smart, personalized and targeted guidance about what to eat."}
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.2', "That's where ai.Cook comes in. Our AI-powered assistant learns from your preferences, available time, and nutritional goals, and helps you discover perfect recipes.") : "That's where ai.Cook comes in. Our AI-powered assistant learns from your preferences, available time, and nutritional goals, and helps you discover perfect recipes."}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.1', 'Smart Detection') : 'Smart Detection'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.2', 'Personal Preferences') : 'Personal Preferences'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.3', 'Time Management') : 'Time Management'}
        </span>
      </div>
    </div>,
    <div key="desc-2" className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
            style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('product.headers.2', 'Smart Ingredient Management') : 'Smart Ingredient Management'}
      </h2>
      <div className="space-y-4 sm:space-y-5">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.4', 'Build your personal pantry list with your available ingredients.') : 'Build your personal pantry list with your available ingredients.'}
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.5', 'You can classify them by categories, diets, intolerances, and more.') : 'You can classify them by categories, diets, intolerances, and more.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.10', 'Rich Database') : 'Rich Database'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.2', 'Personal Preferences') : 'Personal Preferences'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.12', 'Auto Nutrition') : 'Auto Nutrition'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.13', 'Categorized Ingredients') : 'Categorized Ingredients'}
        </span>
      </div>
    </div>,
    <div key="desc-3" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('product.headers.3', 'Your Kitchen. Your Rules.') : 'Your Kitchen. Your Rules.'}
      </h2>
      <div className="space-y-4 sm:space-y-5">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.3', 'Add the ingredients you have to your pantry quickly and easily.') : 'Add the ingredients you have to your pantry quickly and easily.'}
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          You can either pick from a rich ingredient list with nutritional information or add your own.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.11', 'Custom Ingredients') : 'Custom Ingredients'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.4', 'Fresh Content') : 'Fresh Content'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.5', 'Fully Personalized') : 'Fully Personalized'}
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('product.headers.4', 'Track Your Ingredients Like a Pro') : 'Track Your Ingredients Like a Pro'}
      </h2>
      <div className="space-y-4 sm:space-y-5">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.6', 'Need a smart shopping list?') : 'Need a smart shopping list?'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('product.descriptions.7', 'ai.Cook keeps track of your ingredients, their freshness, and availability, and alerts you when you\'re running low on something.') : 'ai.Cook keeps track of your ingredients, their freshness, and availability, and alerts you when you\'re running low on something.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.1', 'Smart Detection') : 'Smart Detection'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.7', 'Smart Tips') : 'Smart Tips'}
        </span>
      </div>
    </div>,
    <div key="desc-5" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('product.headers.5', 'Quick. Smart. Private') : 'Quick. Smart. Private'}
      </h2>
      <div className="space-y-4 sm:space-y-5">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          We think privacy and data protection matter, that's why ai.Cook is powered by Apple Intelligence LLMs, which live at the core of your iPhone.
        </p>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          No data leaves your device. No ads. No tracking. Works completely offline.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.6', 'Integrated Help') : 'Integrated Help'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.8', 'Private') : 'Private'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('product.tags.9', 'Secure') : 'Secure'}
        </span>
      </div>
    </div>
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden" id="product">
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-melodrama-medium text-[#284139] mb-4 sm:mb-6 lg:mb-8" 
                style={{ lineHeight: '1.1', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
              {isReady ? t('product.title', 'Discover ai.Cook') : 'Discover ai.Cook'}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#284139]/70 max-w-3xl mx-auto font-melodrama-regular leading-relaxed">
              {isReady ? t('product.subtitle', 'Experience the future of cooking with your AI-powered culinary assistant') : 'Experience the future of cooking with your AI-powered culinary assistant'}
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}