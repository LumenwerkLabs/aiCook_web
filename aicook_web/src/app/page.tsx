/**
 * @file HomePage component - RESPONSIVE FIXED VERSION
 * @description Displays the home page with standardized design system integration and proper responsiveness
 * @author ai.Cook
 * @version 2.1.0
 * @since 2025-09-22
 */
import { AnimatedWelcome } from "@/components/animations";
import LandingPage from "@/components/landing";
import Product from "@/components/product";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <section
        role="banner"
        aria-label="Welcome Animation"
        className="relative w-full"
      >
        <AnimatedWelcome />
      </section>

      <section
        aria-label="Main Landing"
        className="relative w-full"
      >
        <LandingPage />
      </section>

      <section
        aria-label="Product Features"
        className="relative w-full"
      >
        <Product />
      </section>
    </div>
  );
}