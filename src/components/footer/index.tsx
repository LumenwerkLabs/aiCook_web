"use client";
// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { useI18nContext } from "@/context/I18nContext";

export default function Footer() {
  const { t, isReady } = useI18nContext();

  return (
    <footer className="w-full bg-[#284139] text-[#e8e4d9] border-t border-[#e8e4d9]/10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 gap-6 sm:gap-8 font-light">
        {/* Logo and name */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Image
            src="/logo.svg"
            alt="AI Cook Logo"
            width={40}
            height={40}
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
          <span className="tracking-widest font-casta-regular text-body-large sm:text-heading-card">
            {isReady ? t('footer.aiCook', 'ai.Cook') : 'ai.Cook'}
          </span>
        </div>
        
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 text-center">
          <Link
            href="mailto:jointhewaitlist@aicook.com"
            className="hover:text-[#e8e4d9]/80 hover:underline underline-offset-4 transition-all duration-300 ease-out text-body-small font-light tracking-wide"
          >
            {isReady ? t('footer.contactUs', 'Contact Us') : 'Contact Us'}
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-caption text-[#e8e4d9]/60 text-center sm:text-right font-extralight tracking-wide">
          {isReady ? t('footer.copyright', `© ${new Date().getFullYear()} ai.Cook. All rights reserved.`) : `© ${new Date().getFullYear()} ai.Cook. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}