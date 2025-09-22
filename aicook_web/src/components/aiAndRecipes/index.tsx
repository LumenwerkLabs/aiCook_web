/**
 * @file AiAndRecipes component - COMPLETE FIXED VERSION
 * @description Displays the aiAndRecipes page with standardized design system
 * @author ai.Cook
 * @version 2.1.0
 * @since 2025-09-22
 */
"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion"
import Swiper from "../swiper";
import { useI18nContext } from "@/context/I18nContext";

export default function AiAndRecipes() {
  const { t, isReady } = useI18nContext();

  const slides = [
    // Slide 1 - AI Recommendation
    <div key="ai-bot" className="stable-image-container">
      <Image
        src="/mockups/ai_recomm.png"
        alt="AI Bot Screen"
        className="image-single"
        width={360}
        height={640}
        priority
      />
    </div>,
      
    // Slide 2 - Dual Images (AI Recipes Dialog + Substitution Dialog)
    <div key="ai-duo" className="stable-image-container">
      <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center w-full max-w-4xl">
        <Image
          src="/mockups/ai_recipes_dialog.png"
          alt="Recipes Screen"
          className="image-dual"
          width={360}
          height={640}
        />
        <Image
          src="/mockups/subst_dialog.png"
          alt="Unavailable Ingredients"
          className="image-dual"
          width={360}
          height={640}
        />
      </div>
    </div>,
    
    // Slide 3 - Recipe Steps
    <div key="recipe-steps" className="stable-image-container">
      <Image
        src="/mockups/recipe_ov_widget.png"
        alt="Recipe Steps"
        className="image-single"
        width={360}
        height={640}
      />
    </div>,
    
    // Slide 4 - Dual Images (Recipe Card + Steps Dialog)
    <div key="recipes-duo" className="stable-image-container">
      <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center w-full max-w-4xl">
        <Image
          src="/mockups/recipes_screen.png"
          alt="Recipe Card Screen"
          className="image-dual"
          width={360}
          height={640}
        />
        <Image
          src="/mockups/steps_dialog.png"
          alt="AI Ingredient Substitution"
          className="image-dual"
          width={360}
          height={640}
        />
      </div>
    </div>,
    
    // Slide 5 - Community Widget
    <div key="community" className="stable-image-container">
      <Image
        src="/mockups/community_widget.png"
        alt="Community Widget"
        className="image-single"
        width={360}
        height={640}
      />
    </div>
  ];

  const descriptions = [
    // Description 1
    <div key="desc-1" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.1', 'Smart Recommendations') : 'Smart Recommendations'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.1', 'Enter your available time, preferred difficulty level and any additional preferences, and let ai.Cook handle the rest.') : 'Enter your available time, preferred difficulty level and any additional preferences, and let ai.Cook handle the rest.'}
        </p>
        <p className="text-body-small text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.2', 'The combination of our smart algorithms and AI help you by finding through thousands of recipes, the ones that match with you the most.') : 'The combination of our smart algorithms and AI help you by finding through thousands of recipes, the ones that match with you the most.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.2', 'AI-powered') : 'AI-powered'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.3', 'Personalized Recommendations') : 'Personalized Recommendations'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.9', 'Diet Support') : 'Diet Support'}
        </span>
      </div>
    </div>,

    // Description 2
    <div key="desc-2" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.2', 'Tailored-to-you Recipes') : 'Tailored-to-you Recipes'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.3', 'In a matter of seconds, you\'ll get easy-to-follow recipes that match the most with your available ingredients and preferences.') : 'In a matter of seconds, you\'ll get easy-to-follow recipes that match the most with your available ingredients and preferences.'}
        </p>
        <p className="text-body-small text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.4', 'You can also explore variations, ingredient swaps, and pro culinary tips.') : 'You can also explore variations, ingredient swaps, and pro culinary tips.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.5', 'Easy to Follow') : 'Easy to Follow'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.5', 'Smart Substitutions') : 'Smart Substitutions'}  
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.8', 'Cooking Tips') : 'Cooking Tips'}
        </span>
      </div>
    </div>,

    // Description 3
    <div key="desc-3" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.3', 'Restaurant-quality Results') : 'Restaurant-quality Results'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.5', 'ai.Cook recipes are one-by-one curated and updated to accomplish the highest taste standards.') : 'ai.Cook recipes are one-by-one curated and updated to accomplish the highest taste standards.'}
        </p>
        <p className="text-body-small text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.6', 'They must make sense for you, your time, skills, preferences and ingredients - while maintaining the excellence of the final result. That\'s why the recipes themselves are human-created and reviewed. We all love AI, but we love the human touch even more.') : 'They must make sense for you, your time, skills, preferences and ingredients - while maintaining the excellence of the final result. That\'s why the recipes themselves are human-created and reviewed. We all love AI, but we love the human touch even more.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.1', 'High-quality recipes') : 'High-quality recipes'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.3', 'Human-created and reviewed') : 'Human-created and reviewed'}
        </span>
      </div>
    </div>,

    // Description 4
    <div key="desc-4" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.4', 'Your Personalized Cookbook') : 'Your Personalized Cookbook'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.7', 'Our recipes are designed to be as beautiful as they are delicious: clear, visual, and effortless to follow. Organize your cookbook effortlessly by categories, diets, and more.') : 'Our recipes are designed to be as beautiful as they are delicious: clear, visual, and effortless to follow. Organize your cookbook effortlessly by categories, diets, and more.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.6', 'Easy to Follow') : 'Easy to Follow'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.7', 'Categorized Recipes') : 'Categorized Recipes'}
        </span>
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.8', 'Cooking Tips') : 'Cooking Tips'}
        </span>
      </div>
    </div>,

    // Description 5
    <div key="desc-5" className="space-y-4 md:space-y-6">
      <h2 className="heading-card font-melodrama-regular text-[#284139] leading-tight tracking-wide">
        {isReady ? t('aiAndRecipes.headers.5', 'Save and Share') : 'Save and Share'}
      </h2>
      <div className="space-y-4">
        <p className="text-body-large text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.8', 'Save or share your favorite recipes with the ai.Cook community.') : 'Save or share your favorite recipes with the ai.Cook community.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="tag-base bg-[#284139]/10 text-[#284139] border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.10', 'Community-driven') : 'Community-driven'}
        </span>
      </div>
    </div>
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 overflow-hidden py-16 sm:py-20 lg:py-24" id="bot-and-recipes">
      {/* Background decorative elements using standardized animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-16 left-8 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[#284139]/8 rounded-full blur-3xl animate-drift"></div>
        <div className="absolute bottom-16 right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#284139]/6 rounded-full blur-3xl animate-float-y"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#284139]/7 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-[#284139]/5 rounded-full blur-xl animate-float-x"></div>
      </div>
      
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 sm:mb-28 lg:mb-32">
            <h1 className="heading-hero font-melodrama-medium text-[#284139] mb-6 leading-tight">
              {isReady ? t('aiAndRecipes.title', 'The Only Cookbook You\'ll Ever Need') : 'The Only Cookbook You\'ll Ever Need'}
            </h1>
            <p className="text-body-large text-[#284139]/70 max-w-4xl mx-auto font-melodrama-regular leading-relaxed">
              {isReady ? t('aiAndRecipes.subtitle', 'Discover personalized recipes tailored to your pantry and preferences. All displayed in a beautiful, state-of-the-art user interface.') : 'Discover personalized recipes tailored to your pantry and preferences. All displayed in a beautiful, state-of-the-art user interface.'}
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </section>
  );
}