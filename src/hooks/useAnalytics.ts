import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

/** Injects the GA4 script tags once and initialises gtag */
function loadGoogleAnalytics(measurementId: string): void {
  if (document.getElementById('ga-script')) return

  const script1 = document.createElement('script')
  script1.id = 'ga-script'
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script1)

  window.dataLayer = window.dataLayer ?? []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
    send_page_view: true,
  })
}

/** Track a page view (call on route change if you add react-router) */
export function trackPageView(path: string): void {
  if (!GA_ID || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}

/** Track a custom event */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!GA_ID || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

/** Hook — call once at app root */
export function useAnalytics(): void {
  useEffect(() => {
    if (!GA_ID) {
      console.warn(
        '[Angkor Security] VITE_GA_MEASUREMENT_ID is not set. ' +
        'Analytics will be disabled. Set it in your .env file.'
      )
      return
    }
    loadGoogleAnalytics(GA_ID)
  }, [])
}
