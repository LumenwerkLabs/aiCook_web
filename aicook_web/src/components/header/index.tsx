// components/Header.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18nContext } from "@/context/I18nContext";
import LanguageSelector from "../language_selector";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t, isReady } = useI18nContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.replace('/#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <header
      className={`backdrop-blur-md transition-all duration-500 fixed top-0 left-0 w-full z-50 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } bg-[#E8E4D9]/80`}
      style={{
        boxShadow: scrolled
          ? "0 4px 20px 0 rgba(40, 65, 57, 0.08), 0 2px 8px 0 rgba(40, 65, 57, 0.04)"
          : "0 2px 8px 0 rgba(40, 65, 57, 0.03)",
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(40, 65, 57, 0.06)'
          : '1px solid rgba(40, 65, 57, 0.03)'
      }}
    >
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 transition-all duration-500 max-w-7xl mx-auto">
        {/* Left Navigation */}
        <Link
          href="/#bot-and-recipes"
          onClick={handleSmoothScroll}
          className="text-body-small transition-all duration-300 hover:scale-105 active:scale-95 text-[#284139] font-light tracking-wide"
          style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
        >
          {isReady ? t('navigation.sneakPeek', 'sneak peek') : 'sneak peek'}
        </Link>

        {/* Center Content - Email Link */}
        <Link
          href="mailto:jointhewaitlist@aicook.com"
          className="text-body-small transition-all duration-300 hover:scale-105 active:scale-95 text-[#284139] font-light tracking-wide text-center px-2 max-w-[45vw] sm:max-w-none truncate"
          style={{
            textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)',
          }}
        >
          <span className="hidden lg:inline">
            {isReady ? t('navigation.joinWaitlist', 'join waitlist') : 'join waitlist'}
          </span>
          <span className="hidden sm:inline lg:hidden">
            {isReady ? t('navigation.joinWaitlist', 'join waitlist') : 'join waitlist'}
          </span>
          <span className="inline sm:hidden">
            {isReady ? t('navigation.joinWaitlist', 'join waitlist') : 'join waitlist'}
          </span>
        </Link>

        {/* Right Section - About Link and Language Selector */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <Link
            href="/#product"
            onClick={handleSmoothScroll}
            className="text-body-small transition-all duration-300 hover:scale-105 active:scale-95 text-[#284139] font-light tracking-wide"
            style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
          >
            {isReady ? t('navigation.about', 'about') : 'about'}
          </Link>
          
          {/* Language Selector - Different variants for different screen sizes */}
          <div className="flex items-center">
            {/* Mobile: Buttons variant for better touch targets */}
            <div className="block sm:hidden">
              <LanguageSelector variant="buttons" />
            </div>
            
            {/* Tablet and Desktop: Dropdown variant for cleaner look */}
            <div className="hidden sm:block">
              <LanguageSelector variant="dropdown" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}