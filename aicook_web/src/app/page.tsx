/**
 * @file HomePage component - RESPONSIVE FIXED VERSION
 * @description Displays the home page with standardized design system integration and proper responsiveness
 * @author ai.Cook
 * @version 2.1.0
 * @since 2025-09-22
 */
import { AnimatedWelcome } from "@/components/animations";
import AiAndRecipes from "@/components/aiAndRecipes";
import LandingPage from "@/components/landing";
import Product from "@/components/product";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Welcome section with semantic structure and proper spacing */}
      <section 
        role="banner" 
        aria-label="Welcome Animation"
        className="relative w-full"
      >
        <AnimatedWelcome />
      </section>
      
      {/* Main landing section with consistent spacing */}
      <section 
        role="main" 
        aria-label="Main Landing"
        className="relative w-full"
      >
        <LandingPage />
      </section>
      
      {/* Product showcase section with proper mobile handling */}
      <section 
        role="complementary" 
        aria-label="Product Features"
        className="relative w-full"
      >
        <Product />
      </section>
      
      {/* AI and Recipes section with consistent layout */}
      <section 
        role="complementary" 
        aria-label="AI Recipe Features" 
        className="relative w-full"
      >
        <AiAndRecipes />
      </section>
    </div>
  );
}