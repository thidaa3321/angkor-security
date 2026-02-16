import { Terminal } from '@/components/Terminal'
import { TERMINAL_LINES } from '@/data'

interface HeroProps {
  onNavigate: (section: 'services' | 'demo' | 'contact') => void
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="grid-bg relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-20 right-0 w-[40vw] h-[40vw] bg-orange-glow pointer-events-none" />

      {/* Floating hex particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {['0xA3F', 'VULN', 'API', 'JWT', 'XSS', 'SQL', 'CSRF', '0xFF', 'CVE', 'OWASP'].map(
          (hex, i) => (
            <div
              key={hex}
              className="absolute font-mono font-bold text-orange-500/[0.07]"
              style={{
                left: `${8 + i * 9}%`,
                top: `${12 + (i % 4) * 20}%`,
                fontSize: `${0.55 + (i % 3) * 0.2}rem`,
                animation: `float ${6 + i * 1.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              {hex}
            </div>
          )
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Copy */}
          <div>
            {/* Status indicator */}
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80] animate-pulse" />
              <span className="font-mono text-[11px] text-slate-500 tracking-widest">
                SYSTEM ACTIVE · PHNOM PENH, KH
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-rajdhani font-bold text-5xl md:text-6xl xl:text-7xl text-white leading-[0.95] mb-6">
              SECURE YOUR<br />
              <span
                className="glitch text-orange-500"
                data-text="API"
              >
                API
              </span>
              {' '}BEFORE<br />
              HACKERS DO
            </h1>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Cambodia's first specialized API & web application penetration testing firm.
              Professional-grade security assessments starting at{' '}
              <strong className="text-orange-500">$800</strong>, delivered in{' '}
              <strong className="text-white">10 days</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="btn-primary text-base px-8 py-4"
                onClick={() => onNavigate('contact')}
              >
                Get Free Consultation →
              </button>
              <button
                className="btn-outline text-base px-8 py-4"
                onClick={() => onNavigate('demo')}
              >
                See Live Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {['OWASP Aligned', 'PCI DSS Ready', 'CVSS v3.1 Scored', 'NDA Guaranteed'].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF6B00">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                      {badge}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="relative">
            <Terminal lines={TERMINAL_LINES} />

            {/* Floating stat cards */}
            <div className="absolute -bottom-5 -left-5 card p-3 px-4 shadow-xl">
              <div className="font-mono text-[9px] text-slate-600 tracking-widest mb-0.5">
                TURNAROUND
              </div>
              <div className="font-rajdhani font-bold text-2xl text-orange-500">
                10 Days
              </div>
            </div>

            <div className="absolute -top-4 -right-4 card p-3 px-4 shadow-xl">
              <div className="font-mono text-[9px] text-slate-600 tracking-widest mb-0.5">
                STARTING FROM
              </div>
              <div className="font-rajdhani font-bold text-2xl text-green-400">
                $800
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
