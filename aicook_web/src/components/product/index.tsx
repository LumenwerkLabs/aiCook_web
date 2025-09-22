/**
 * @file Product component - COMPLETE FIXED VERSION
 * @description Displays the product page with standardized design system
 * @author ai.Cook
 * @version 2.1.0 
 * @since 2025-09-22
 */

"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion";
import Swiper from "../swiper";
import { useI18nContext } from "@/context/I18nContext";

export default function Product() {
  const { t, isReady } = useI18nContext();
  
  const slides = [
    // Slide 1 - Home Screen
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
    
    // Slide 2 - Cupboard Screen
    <div key="cupboard" className="stable-image-container">
      <Image
        src="/mockups/cupboard_screen.png"
        alt="Cupboard Screen"
        className="image-single"
        width={360}
        height={640}
      />
    </div>,
    
    // Slide 3 - Dual Images (Add Ingredient Dialogs)
    <div key="adding-duo" className="stable-image-container">
        <Image
          src="/mockups/add_global_ing_dialog.png"
          alt="Add Global Ingredient Dialog"
          className="image-dual"
          width={360}
          height={640}
        />
        <Image
          src="/mockups/add_custom_ing_dialog.png"
          alt="Add Custom Ingredient Dialog"
          className="image-dual"
          width={360}
          height={640}
        />
    </div>,
    
    // Slide 4 - Smart Shopping List
    <div key="smart_shopping_list" className="stable-image-container">
      <Image
        src="/mockups/shop_list_widget.png"
        alt="Smart Shopping List Widget"
        className="image-single"
        width={360}
        height={640}
      />
    </div>,
    
    // Slide 5 - Apple Intelligence
    <div key="privacy-container" className="stable-image-container">
      <Image
        src="/mockups/apple_intelligence.png"
        alt="Apple Intelligence"
        className="image-large"
        width={360}
        height={640}
      />
    </div>
  ];

  const descriptions = [
    // Description 1
    <div key="desc-1" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.1', 'Say hi to ai.Cook') : 'Say hi to ai.Cook'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.1', "We waste food, repeat meals, and struggle to stay healthy - all because we lack smart, personalized and targeted guidance about what to eat.") : "We waste food, repeat meals, and struggle to stay healthy - all because we lack smart, personalized and targeted guidance about what to eat."}
        </p>
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.2', "That's where ai.Cook comes in. Our AI-powered assistant learns from your preferences, available time, and nutritional goals, and helps you discover perfect recipes.") : "That's where ai.Cook comes in. Our AI-powered assistant learns from your preferences, available time, and nutritional goals, and helps you discover perfect recipes."}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.1', 'Smart Detection') : 'Smart Detection'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.2', 'Personal Preferences') : 'Personal Preferences'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.3', 'Time Management') : 'Time Management'}
        </span>
      </div>
    </div>,

    // Description 2
    <div key="desc-2" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.2', 'Smart Ingredient Management') : 'Smart Ingredient Management'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.4', 'Build your personal pantry list with your available ingredients.') : 'Build your personal pantry list with your available ingredients.'}
        </p>
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.5', 'You can classify them by categories, diets, intolerances, and more.') : 'You can classify them by categories, diets, intolerances, and more.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.10', 'Rich Database') : 'Rich Database'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.2', 'Personal Preferences') : 'Personal Preferences'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.12', 'Auto Nutrition') : 'Auto Nutrition'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.13', 'Categorized Ingredients') : 'Categorized Ingredients'}
        </span>
      </div>
    </div>,

    // Description 3
    <div key="desc-3" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.3', 'Your Kitchen. Your Rules.') : 'Your Kitchen. Your Rules.'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.3', 'Add the ingredients you have to your pantry quickly and easily.') : 'Add the ingredients you have to your pantry quickly and easily.'}
        </p>
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          You can either pick from a rich ingredient list with nutritional information or add your own.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.11', 'Custom Ingredients') : 'Custom Ingredients'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.4', 'Fresh Content') : 'Fresh Content'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.5', 'Fully Personalized') : 'Fully Personalized'}
        </span>
      </div>
    </div>,

    // Description 4
    <div key="desc-4" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.4', 'Track Your Ingredients Like a Pro') : 'Track Your Ingredients Like a Pro'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('product.descriptions.6', 'Need a smart shopping list?') : 'Need a smart shopping list?'}
        </p>
        <p className="text-body-small text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('product.descriptions.7', 'ai.Cook keeps track of your ingredients, their freshness, and availability, and alerts you when you&apos;re running low on something.') : 'ai.Cook keeps track of your ingredients, their freshness, and availability, and alerts you when you&apos;re running low on something.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.1', 'Smart Detection') : 'Smart Detection'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.7', 'Smart Tips') : 'Smart Tips'}
        </span>
      </div>
    </div>,

    // Description 5
    <div key="desc-5" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('product.headers.5', 'Quick. Smart. Private') : 'Quick. Smart. Private'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          We think privacy and data protection matter, that&apos;s why ai.Cook is powered by Apple Intelligence LLMs, which live at the core of your iPhone.
        </p>
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          No data leaves your device. No ads. No tracking. Works completely offline.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.6', 'Integrated Help') : 'Integrated Help'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.8', 'Private') : 'Private'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('product.tags.9', 'Secure') : 'Secure'}
        </span>
      </div>
    </div>
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 overflow-hidden py-16 sm:py-20 lg:py-24" id="product">
      {/* Background pattern using standardized approach */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#284139]/8 rounded-full blur-3xl animate-float-y"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#284139]/6 rounded-full blur-3xl animate-float-x"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-[#284139]/5 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 sm:mb-24 lg:mb-28">
            <h1 className="heading-hero font-melodrama-medium text-[#284139] mb-6 leading-tight">
              {isReady ? t('product.title', 'Discover ai.Cook') : 'Discover ai.Cook'}
            </h1>
            <p className="text-body-large text-[#284139]/70 max-w-4xl mx-auto font-melodrama-regular leading-relaxed">
              {isReady ? t('product.subtitle', 'Experience the future of cooking with your AI-powered culinary assistant') : 'Experience the future of cooking with your AI-powered culinary assistant'}
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </section>
  );
}