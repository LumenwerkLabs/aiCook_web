"use client"
import Image from "next/image";
import { FadeInMotion } from "../animations/motion"
import Swiper from "../swiper";
import { useI18nContext } from "@/context/I18nContext";

export default function AiAndRecipes() {
  const { t, isReady } = useI18nContext();

  const slides = [
    <Image
      key="ai-bot"
      src="/mockups/ai_recomm.png"
      alt="AI Bot Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipes"
      src="/mockups/recipes_screen.png"
      alt="Recipes Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipe-card"
      src="/mockups/recipe_ov.png"
      alt="Recipe Card Screen"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="recipe-steps"
      src="/mockups/recipe_steps.png"
      alt="Recipe Steps"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="unavailable"
      src="/mockups/unavailable.png"
      alt="Unavailable Ingredients"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
    <Image
      key="ai-substitution"
      src="/mockups/ai_subst.png"
      alt="AI Ingredient Substitution"
      className="w-full h-auto drop-shadow-2xl max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
      width={360}
      height={640}
      style={{ width: 'auto', height: 'auto' }}
    />,
  ];

  const descriptions = [
    <div key="desc-1" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('aiAndRecipes.headers.1', 'Your Intelligent Cooking Assistant') : 'Your Intelligent Cooking Assistant'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.1', 'Meet your personal AI chef that understands your preferences and helps you discover perfect recipes. Simply tell our smart assistant what you\'re craving, your available time, and preferred difficulty level.') : 'Meet your personal AI chef that understands your preferences and helps you discover perfect recipes. Simply tell our smart assistant what you\'re craving, your available time, and preferred difficulty level.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.2', 'The AI automatically detects your available ingredients and customizes recommendations based on cuisine preferences, cooking time, and skill level for a truly personalized experience.') : 'The AI automatically detects your available ingredients and customizes recommendations based on cuisine preferences, cooking time, and skill level for a truly personalized experience.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.1', 'AI Recommendations') : 'AI Recommendations'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.2', 'Smart Preferences') : 'Smart Preferences'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.3', 'Personalized Results') : 'Personalized Results'}
        </span>
      </div>
    </div>,
    <div key="desc-2" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('aiAndRecipes.headers.2', 'Smart Recipe Discovery') : 'Smart Recipe Discovery'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.3', 'Browse intelligently curated recipes tailored to your tastes and dietary preferences. Filter by cuisine type, cooking time, and ingredient availability with our advanced search system.') : 'Browse intelligently curated recipes tailored to your tastes and dietary preferences. Filter by cuisine type, cooking time, and ingredient availability with our advanced search system.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.4', 'Our database is continuously updated with fresh recipes from around the world, ensuring you always have new culinary adventures to explore while respecting your dietary needs and preferences.') : 'Our database is continuously updated with fresh recipes from around the world, ensuring you always have new culinary adventures to explore while respecting your dietary needs and preferences.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.4', 'Curated Collection') : 'Curated Collection'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.5', 'Smart Filtering') : 'Smart Filtering'}  
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.6', 'Global Cuisine') : 'Global Cuisine'}
        </span>
      </div>
    </div>,
    <div key="desc-3" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('aiAndRecipes.headers.3', 'Detailed Recipe Cards') : 'Detailed Recipe Cards'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.6', 'Every recipe features beautiful, comprehensive cards with complete ingredient lists, nutritional information, and cooking specifications. Visual indicators show ingredient availability and missing items at a glance.') : 'Every recipe features beautiful, comprehensive cards with complete ingredient lists, nutritional information, and cooking specifications. Visual indicators show ingredient availability and missing items at a glance.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.7', 'Interactive elements let you tap for ingredient details, measurements, and substitution suggestions. Our integrated AI assistant provides instant help with unfamiliar ingredients or cooking techniques.') : 'Interactive elements let you tap for ingredient details, measurements, and substitution suggestions. Our integrated AI assistant provides instant help with unfamiliar ingredients or cooking techniques.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.7', 'Visual Indicators') : 'Visual Indicators'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.8', 'Complete Information') : 'Complete Information'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.9', 'Interactive Help') : 'Interactive Help'}
        </span>
      </div>
    </div>,
    <div key="desc-4" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('aiAndRecipes.headers.4', 'Step-by-Step Cooking Guide') : 'Step-by-Step Cooking Guide'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.8', 'Follow clear, detailed cooking instructions with progressive steps that guide you through the entire cooking process. Each step includes timing, temperature, and technique details for perfect results.') : 'Follow clear, detailed cooking instructions with progressive steps that guide you through the entire cooking process. Each step includes timing, temperature, and technique details for perfect results.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.9', 'The intuitive progress tracker helps you stay organized, while built-in scheduling and sharing features let you plan meals and cook with others seamlessly.') : 'The intuitive progress tracker helps you stay organized, while built-in scheduling and sharing features let you plan meals and cook with others seamlessly.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.10', 'Progress Tracking') : 'Progress Tracking'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.11', 'Detailed Instructions') : 'Detailed Instructions'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.12', 'Meal Scheduling') : 'Meal Scheduling'}
        </span>
      </div>
    </div>,
    <div key="desc-5" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('aiAndRecipes.headers.5', 'Smart Ingredient Alerts') : 'Smart Ingredient Alerts'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.10', 'Get instant notifications about missing ingredients with smart alternatives and shopping suggestions. The system clearly identifies what you need and provides convenient solutions.') : 'Get instant notifications about missing ingredients with smart alternatives and shopping suggestions. The system clearly identifies what you need and provides convenient solutions.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.11', 'Choose to buy missing ingredients, find suitable substitutions through AI suggestions, or discover alternative recipes that match your current pantry inventory perfectly.') : 'Choose to buy missing ingredients, find suitable substitutions through AI suggestions, or discover alternative recipes that match your current pantry inventory perfectly.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.13', 'Smart Alerts') : 'Smart Alerts'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.14', 'Shopping Help') : 'Shopping Help'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.15', 'Alternative Solutions') : 'Alternative Solutions'}
        </span>
      </div>
    </div>,
    <div key="desc-6" className="space-y-3 sm:space-y-4 lg:space-y-6">
      <h2 className="font-melodrama-regular text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#284139] leading-tight" 
          style={{ letterSpacing: '0.03em', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {isReady ? t('aiAndRecipes.headers.6', 'AI-Powered Substitutions') : 'AI-Powered Substitutions'}
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#284139]/80 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.12', 'Discover intelligent ingredient alternatives that maintain flavor profiles and cooking properties. Our AI analyzes your pantry and suggests perfect substitutions for missing ingredients.') : 'Discover intelligent ingredient alternatives that maintain flavor profiles and cooking properties. Our AI analyzes your pantry and suggests perfect substitutions for missing ingredients.'}
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#284139]/70 leading-relaxed font-light">
          {isReady ? t('aiAndRecipes.descriptions.13', 'Get creative alternatives for butter, milk, and other common ingredients with detailed explanations of how each substitution affects taste, texture, and nutritional value.') : 'Get creative alternatives for butter, milk, and other common ingredients with detailed explanations of how each substitution affects taste, texture, and nutritional value.'}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.16', 'Smart Substitutions') : 'Smart Substitutions'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.17', 'Flavor Matching') : 'Flavor Matching'}
        </span>
        <span className="px-2 xs:px-3 py-1 xs:py-1.5 bg-[#284139]/10 text-[#284139] text-xs sm:text-sm rounded-full border border-[#284139]/20">
          {isReady ? t('aiAndRecipes.tags.18', 'Creative Alternatives') : 'Creative Alternatives'}
        </span>
      </div>
    </div>,
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen w-full bg-gradient-to-br from-[#E8E4D9]/90 via-[#F5F3ED]/85 to-[#E8E4D9]/90 py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden" id="bot-and-recipes">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#284139]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#284139]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#284139]/4 rounded-full blur-2xl"></div>
      </div>
      
      <FadeInMotion>
        <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-melodrama-medium text-[#284139] mb-4 sm:mb-6 lg:mb-8" 
                style={{ lineHeight: '1.1', textShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              {isReady ? t('aiAndRecipes.title', 'Discover ai.Cook') : 'Discover ai.Cook'}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#284139]/70 max-w-3xl mx-auto px-2 font-melodrama-regular leading-relaxed">
              {isReady ? t('aiAndRecipes.subtitle', 'Experience the future of cooking with our AI-powered assistant') : 'Experience the future of cooking with our AI-powered assistant'}
            </p>
          </div>
          <Swiper slides={slides} descriptions={descriptions} />
        </div>
      </FadeInMotion>
    </div>
  );
}