"use client";
// src/context/I18nContext.tsx
import React, { createContext, useContext, ReactNode, ErrorInfo } from 'react'
import useI18n from '../hooks/useI18n'
import { type I18nContextValue } from '../types/i18n'

// Create context with proper typing
const I18nContext = createContext<I18nContextValue | null>(null)

// Error boundary for i18n context
interface I18nErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class I18nErrorBoundary extends React.Component<
  { children: ReactNode },
  I18nErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): I18nErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('I18n Error Boundary caught an error:', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Translation Error
            </h2>
            <p className="text-gray-600 mb-4">
              Failed to load language translations. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Props interface for the provider
interface I18nProviderProps {
  children: ReactNode
}

// Main provider component
const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const i18nValue = useI18n()

  return (
    <I18nErrorBoundary>
      <I18nContext.Provider value={i18nValue}>
        {children}
      </I18nContext.Provider>
    </I18nErrorBoundary>
  )
}

// Custom hook to use the i18n context with proper error handling
export const useI18nContext = (): I18nContextValue => {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error(
      'useI18nContext must be used within an I18nProvider. ' +
      'Make sure your component is wrapped in <I18nProvider>.'
    )
  }

  return context
}

// Export the provider and context
export default I18nProvider
export { I18nContext }

// Optional: Export hook with different name for consistency with your naming
export const useIContext = useI18nContext