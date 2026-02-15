// src/types/i18n.ts
export enum SupportedLocales {
    EN = 'en',
    ES = 'es',
    FR = 'fr',
    DE = 'de',
  }
  
  export interface Locale {
    code: SupportedLocales
    name: string
    nativeName: string
    flag: string
  }
  
  export interface AppTranslations {
    common: {
      loading: string
      error: string
    }
    navigation: {
      sneakPeek: string
      joinWaitlist: string
      about: string
    }
    animations: {
      title: string
      subtitle: string
    }
    landing: {
      title: string
      subtitle: string
    }
    aiAndRecipes: {
      title: string
      subtitle: string
      headers: Record<string, string>
      descriptions: Record<string, string>
      tags: Record<string, string>
    }
    product: {
      title: string
      subtitle: string
      headers: Record<string, string>
      descriptions: Record<string, string>
      tags: Record<string, string>
    }
    about: {
      label: string
      purpose: { title: string; p1: string; p2: string }
      vision: { title: string; p1: string; p2: string }
      approach: { title: string; p1: string; p2: string }
      cta: string
      ctaLink: string
    }
    footer: {
      aiCook: string
      contactUs: string
      copyright: string
    }
  }
  
  // Type for nested translation keys with dot notation
  export type TranslationKey = 
    | 'common.loading'
    | 'common.error'
    | 'navigation.sneakPeek'
    | 'navigation.joinWaitlist'
    | 'navigation.about'
    | 'animations.title'
    | 'animations.subtitle'
    | 'landing.title'
    | 'landing.subtitle'
    | 'aiAndRecipes.title'
    | 'aiAndRecipes.subtitle'
    | `aiAndRecipes.headers.${string}`
    | `aiAndRecipes.descriptions.${string}`
    | `aiAndRecipes.tags.${string}`
    | 'product.title'
    | 'product.subtitle'
    | `product.headers.${string}`
    | `product.descriptions.${string}`
    | `product.tags.${string}`
    | 'about.label'
    | 'about.purpose.title'
    | 'about.purpose.p1'
    | 'about.purpose.p2'
    | 'about.vision.title'
    | 'about.vision.p1'
    | 'about.vision.p2'
    | 'about.approach.title'
    | 'about.approach.p1'
    | 'about.approach.p2'
    | 'about.cta'
    | 'about.ctaLink'
    | 'footer.aiCook'
    | 'footer.contactUs'
    | 'footer.copyright'
  
  export interface I18nContextValue {
    locale: SupportedLocales
    translations: AppTranslations
    isLoading: boolean
    error: string | null
    t: (key: TranslationKey | string, fallback?: string) => string
    changeLanguage: (newLocale: SupportedLocales) => Promise<void>
    getAvailableLanguages: () => Locale[]
    getCurrentLanguage: () => Locale | undefined
    supportedLocales: SupportedLocales[]
    isReady: boolean
  }