import { AnimatedWelcome } from "@/components/animations";
import AiAndRecipes from "@/components/aiAndRecipes";
import LandingPage from "@/components/landing";
import Product from "@/components/product";

export default function HomePage() {
  return (
    <div>
      <AnimatedWelcome/>
      <LandingPage />
      <Product />
      <AiAndRecipes />
    </div>
  );
}