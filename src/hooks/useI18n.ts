// src/hooks/useI18n.ts
import { useState, useEffect, useCallback } from 'react'
import { SupportedLocales, type Locale, type AppTranslations, type TranslationKey, type I18nContextValue } from '../types/i18n'

const SUPPORTED_LOCALES: SupportedLocales[] = [
  SupportedLocales.EN,
  SupportedLocales.ES,
  SupportedLocales.DE,
]

const DEFAULT_LOCALE = SupportedLocales.EN
const STORAGE_KEY = 'preferred-language'

// Available languages with metadata
const AVAILABLE_LANGUAGES: Locale[] = [
  { code: SupportedLocales.EN, name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: SupportedLocales.ES, name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: SupportedLocales.DE, name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
]

// Dynamic import function for translations with better error handling
const loadTranslations = async (locale: SupportedLocales): Promise<AppTranslations> => {
  try {
    // Dynamic import with proper typing
    const translations = await import(`../locales/${locale}.json`)
    
    // Validate that the loaded translations match our expected structure
    const loadedTranslations = translations.default as AppTranslations
    
    if (!loadedTranslations || typeof loadedTranslations !== 'object') {
      throw new Error(`Invalid translations format for ${locale}`)
    }
    
    return loadedTranslations
  } catch (error) {
    console.warn(`Failed to load translations for ${locale}, falling back to ${DEFAULT_LOCALE}. ${error}`)
    
    // If we're already trying to load the default locale, throw the error
    if (locale === DEFAULT_LOCALE) {
      throw new Error(`Could not load default translations for ${DEFAULT_LOCALE}. ${error}`)
    }
    
    // Recursively try to load the default locale
    return loadTranslations(DEFAULT_LOCALE)
  }
}

// Detect browser language with better type safety
const detectBrowserLanguage = (): SupportedLocales => {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  try {
    const browserLang = navigator.language.split('-')[0].toLowerCase()
    
    // Check if the browser language is supported
    const supportedLang = SUPPORTED_LOCALES.find(
      locale => locale.toLowerCase() === browserLang
    )
    
    return supportedLang || DEFAULT_LOCALE
  } catch {
    return DEFAULT_LOCALE
  }
}

// Custom hook for i18n functionality
export default function useI18n(): I18nContextValue {
  const [locale, setLocale] = useState<SupportedLocales>(DEFAULT_LOCALE)
  const [translations, setTranslations] = useState<AppTranslations>({} as AppTranslations)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isReady, setIsReady] = useState<boolean>(false)

  // Translation function with nested key support and type safety
  const t = useCallback(
    (key: TranslationKey | string, fallback?: string): string => {
      if (!translations || !isReady) {
        return fallback || key
      }

      try {
        const keys = key.split('.')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value: any = translations

        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k]
          } else {
            console.warn(`Translation key not found: ${key}`)
            return fallback || key
          }
        }

        if (typeof value === 'string') {
          return value
        } else {
          console.warn(`Translation value is not a string for key: ${key}`)
          return fallback || key
        }
      } catch (err) {
        console.error(`Error accessing translation key: ${key}`, err)
        return fallback || key
      }
    },
    [translations, isReady]
  )

  // Change language function with proper error handling
  const changeLanguage = useCallback(
    async (newLocale: SupportedLocales): Promise<void> => {
      if (!SUPPORTED_LOCALES.includes(newLocale)) {
        console.warn(`Unsupported locale: ${newLocale}`)
        return
      }

      // Skip if already loaded and ready
      if (newLocale === locale && isReady && Object.keys(translations).length > 0) {
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const newTranslations = await loadTranslations(newLocale)

        setTranslations(newTranslations)
        setLocale(newLocale)
        setIsReady(true)

        // Save to localStorage and update HTML attributes
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, newLocale)
          document.documentElement.lang = newLocale
          
          // Set RTL direction for supported RTL languages (if you add Arabic, Hebrew, etc.)
          const rtlLanguages: SupportedLocales[] = []
          document.documentElement.dir = rtlLanguages.includes(newLocale) ? 'rtl' : 'ltr'
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load translations'
        setError(errorMessage)
        console.error('Failed to change language:', err, errorMessage)
        
        // If we failed to load and don't have any translations, try to load default
        if (!isReady) {
          try {
            const defaultTranslations = await loadTranslations(DEFAULT_LOCALE)
            setTranslations(defaultTranslations)
            setLocale(DEFAULT_LOCALE)
            setIsReady(true)
          } catch (defaultErr) {
            console.error('Failed to load default translations:', defaultErr)
            setError('Failed to load any translations')
          }
        }
      } finally {
        setIsLoading(false)
      }
    },
    [locale, translations, isReady]
  )

  // Initialize i18n on mount
  useEffect(() => {
    const initializeI18n = async (): Promise<void> => {
      let initialLocale = DEFAULT_LOCALE

      if (typeof window !== 'undefined') {
        try {
          // Priority: localStorage > browser language > default
          const savedLocale = localStorage.getItem(STORAGE_KEY) as SupportedLocales | null
          
          if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
            initialLocale = savedLocale
          } else {
            initialLocale = detectBrowserLanguage()
          }
        } catch (err) {
          console.warn('Error reading saved locale preference:', err)
        }
      }

      await changeLanguage(initialLocale)
    }

    initializeI18n()
  }, []) // Empty dependency array - only run once on mount

  // Get available languages with metadata
  const getAvailableLanguages = useCallback((): Locale[] => {
    return [...AVAILABLE_LANGUAGES]
  }, [])

  // Get current language metadata
  const getCurrentLanguage = useCallback((): Locale | undefined => {
    return AVAILABLE_LANGUAGES.find(lang => lang.code === locale)
  }, [locale])

  return {
    locale,
    translations,
    isLoading,
    error,
    t,
    changeLanguage,
    getAvailableLanguages,
    getCurrentLanguage,
    supportedLocales: [...SUPPORTED_LOCALES],
    isReady,
  }
}