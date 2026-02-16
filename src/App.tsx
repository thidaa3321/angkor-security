import { useState, useCallback } from 'react'
import { useAnalytics, trackEvent } from '@/hooks/useAnalytics'
import { Navbar }    from '@/components/Navbar'
import { Toast }     from '@/components/Toast'
import { Hero }      from '@/sections/Hero'
import { Services }  from '@/sections/Services'
import { Demo }      from '@/sections/Demo'
import { Pricing }   from '@/sections/Pricing'
import { Team }      from '@/sections/Team'
import { Contact }   from '@/sections/Contact'
import {
  StatsBar,
  Education,
  Compliance,
  FAQ,
  Footer,
} from '@/sections/Misc'
import type { NavSection, ToastData } from '@/types'

export default function App() {
  // Initialise Google Analytics 4
  useAnalytics()

  const [activeSection, setActiveSection] = useState<NavSection>('home')
  const [toast, setToast] = useState<ToastData | null>(null)

  /** Smooth-scroll to a section and update active nav state */
  const handleNavigate = useCallback((section: NavSection | string) => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveSection(section as NavSection)

    // Track navigation in GA
    trackEvent('navigation_click', { section })
  }, [])

  const handleToast = useCallback((data: ToastData) => {
    setToast(data)
  }, [])

  const dismissToast = useCallback(() => {
    setToast(null)
  }, [])

  return (
    <>
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        {/* ── Hero ── */}
        <Hero onNavigate={handleNavigate} />

        {/* ── Stats Bar ── */}
        <StatsBar />

        {/* ── Services ── */}
        <Services onNavigate={handleNavigate} />

        {/* ── Education ── */}
        <Education />

        {/* ── Live Demo ── */}
        <Demo />

        {/* ── Pricing ── */}
        <Pricing onNavigate={handleNavigate} />

        {/* ── Tools & Compliance ── */}
        <Compliance />

        {/* ── Team ── */}
        <Team />

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── Contact ── */}
        <Contact onToast={handleToast} />
      </main>

      {/* ── Footer ── */}
      <Footer onNavigate={handleNavigate} />

      {/* ── Toast Notification ── */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={dismissToast}
        />
      )}
    </>
  )
}
