/**
 * @file HomePage component
 * @description Displays the home page with standardized design system integration
 * @author ai.Cook
 * @version 2.0.0
 * @since 2025-09-22
 */
import { AnimatedWelcome } from "@/components/animations";
import AiAndRecipes from "@/components/aiAndRecipes";
import LandingPage from "@/components/landing";
import Product from "@/components/product";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Welcome section with semantic structure */}
      <section role="banner" aria-label="Welcome Animation">
        <AnimatedWelcome />
      </section>
      
      {/* Main landing section */}
      <section role="main" aria-label="Main Landing">
        <LandingPage />
      </section>
      
      {/* Product showcase section */}
      <section role="complementary" aria-label="Product Features">
        <Product />
      </section>
      
      {/* AI and Recipes section */}
      <section role="complementary" aria-label="AI Recipe Features">
        <AiAndRecipes />
      </section>
    </div>
  );
}