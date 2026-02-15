// src/components/LanguageSelector.tsx
import { useI18nContext } from '@/context/I18nContext'
import { SupportedLocales } from '@/types/i18n'
import React, { useState, useRef, useEffect } from 'react'

interface LanguageSelectorProps {
  variant?: 'dropdown' | 'select' | 'buttons'
  className?: string
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  variant = 'dropdown',
  className = '' 
}) => {
  const { 
    locale, 
    changeLanguage, 
    getAvailableLanguages, 
    getCurrentLanguage,
    isLoading 
  } = useI18nContext()
  
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = getAvailableLanguages()
  const currentLang = getCurrentLanguage()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageSelect = async (languageCode: SupportedLocales): Promise<void> => {
    setIsOpen(false)
    await changeLanguage(languageCode)
  }

  // Simple select variant - styled to match header
  if (variant === 'select') {
    return (
      <select
        value={locale}
        onChange={(e) => handleLanguageSelect(e.target.value as SupportedLocales)}
        disabled={isLoading}
        className={`
          text-body-small
          transition-all duration-300 hover:scale-105 active:scale-95 
          text-[#284139] font-light tracking-wide
          bg-transparent border-none outline-none cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          appearance-none pr-6 pl-2
          ${className}
        `}
        style={{ 
          textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23284139' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.25rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em'
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.code.toUpperCase()}
          </option>
        ))}
      </select>
    )
  }

  // Button group variant - styled to match header
  if (variant === 'buttons') {
    return (
      <div className={`flex gap-1 sm:gap-2 ${className}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            disabled={isLoading}
            className={`
              tag-base
              disabled:opacity-50 disabled:cursor-not-allowed
              ${
                locale === lang.code
                  ? 'bg-[#284139]/10 text-[#284139] border border-[#284139]/20'
                  : 'text-[#284139]/70 hover:text-[#284139] hover:bg-[#284139]/5'
              }
            `}
            style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
          >
            <span className="text-sm sm:text-base">{lang.flag}</span>
          </button>
        ))}
      </div>
    )
  }

  // Default dropdown variant - styled to match header
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className={`
          inline-flex items-center justify-center
          text-body-small
          transition-all duration-300 hover:scale-105 active:scale-95 
          text-[#284139] font-light tracking-wide
          bg-transparent border-none outline-none cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          px-2 sm:px-3 py-1 sm:py-1.5
          rounded-full hover:bg-[#284139]/5
        `}
        style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border border-[#284139] border-t-transparent mr-2" />
        ) : (
          <span className="mr-1 sm:mr-2 text-sm sm:text-base">{currentLang?.flag}</span>
        )}
        <svg
          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown menu */}
          <div 
            className="absolute right-0 z-50 w-44 sm:w-48 lg:w-52 mt-2 origin-top-right"
            style={{
              backgroundColor: 'rgba(232, 228, 217, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '12px',
              border: '1px solid rgba(40, 65, 57, 0.1)',
              boxShadow: '0 4px 20px 0 rgba(40, 65, 57, 0.12), 0 2px 8px 0 rgba(40, 65, 57, 0.06)'
            }}
          >
            <div className="py-2" role="menu" aria-orientation="vertical">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  disabled={isLoading}
                  className={`
                    flex items-center w-full px-3 sm:px-4 py-2 sm:py-2.5
                    text-caption
                    font-light tracking-wide
                    transition-all duration-200
                    hover:bg-[#284139]/8 focus:bg-[#284139]/8 focus:outline-none 
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${
                      language.code === locale
                        ? 'bg-[#284139]/12 text-[#284139]'
                        : 'text-[#284139]/80 hover:text-[#284139]'
                    }
                  `}
                  style={{ textShadow: '0 1px 2px rgba(40, 65, 57, 0.1)' }}
                  role="menuitem"
                  type="button"
                >
                  <span className="mr-2 sm:mr-3 text-base lg:text-lg" aria-hidden="true">
                    {language.flag}
                  </span>
                  <div className="flex-grow text-left">
                    <div className="font-medium">{language.nativeName}</div>
                    <div className="text-xs text-[#284139]/50">{language.name}</div>
                  </div>
                  {language.code === locale && (
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4 text-[#284139] ml-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      aria-hidden="true"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSelector