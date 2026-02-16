import { useState, useEffect } from 'react'
import type { NavSection } from '@/types'
import { NAV_ITEMS } from '@/data'

interface NavbarProps {
  activeSection: NavSection
  onNavigate: (section: NavSection) => void
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (section: NavSection) => {
    onNavigate(section)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 bg-transparent border-none cursor-pointer"
        >
          <div className="w-9 h-9 bg-orange-500 rounded-md flex items-center justify-center shadow-orange-glow flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L3 7l9 5 9-5-9-5z" />
              <path d="M3 17l9 5 9-5" />
              <path d="M3 12l9 5 9-5" />
            </svg>
          </div>
          <div className="text-left">
            <div className="font-rajdhani font-bold text-lg tracking-wider text-white leading-none">
              ANGKOR
            </div>
            <div className="font-mono text-[9px] text-orange-500 tracking-[0.2em]">
              SECURITY
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
            >
              {id}
            </button>
          ))}
          <button
            className="btn-primary text-xs py-2.5 px-5"
            onClick={() => handleNav('contact')}
          >
            Book Assessment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-slate-300 hover:text-white transition-colors p-1"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/98 border-t border-border px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`nav-link text-left ${activeSection === id ? 'active' : ''}`}
            >
              {id}
            </button>
          ))}
          <button
            className="btn-primary justify-center"
            onClick={() => handleNav('contact')}
          >
            Book Assessment
          </button>
        </div>
      )}
    </nav>
  )
}
