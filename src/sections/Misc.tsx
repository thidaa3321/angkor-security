import { useRef } from 'react'
import { Reveal } from '@/components/Reveal'
import { useCounter } from '@/hooks/useCounter'
import { FAQS } from '@/data'
import { useState } from 'react'

// ── Animated Stat ──────────────────────────────────────────────────────────────
interface StatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

function AnimatedStat({ value, suffix = '', prefix = '', label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useCounter(value, 1800, ref)
  return (
    <div ref={ref} className="text-center">
      <div className="font-rajdhani font-bold text-4xl md:text-5xl text-orange-500">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono text-[10px] text-slate-500 tracking-[0.15em] uppercase mt-1">
        {label}
      </div>
    </div>
  )
}

// ── Stats Bar ──────────────────────────────────────────────────────────────────
export function StatsBar() {
  return (
    <div className="border-t border-b border-border bg-bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value={40}  suffix="%" label="Faster with AI"              />
          <AnimatedStat value={10}  suffix="+" label="OWASP Vulns Covered"         />
          <AnimatedStat value={800} prefix="$" label="Starting Price"              />
          <AnimatedStat value={200} suffix="+" label="Cambodian Startups in Market"/>
        </div>
      </div>
    </div>
  )
}

// ── Education ─────────────────────────────────────────────────────────────────
export function Education() {
  const cards = [
    {
      icon: '💸',
      title: 'High Cost of Breach',
      stat: '$10K–$500K',
      body: 'Regulatory fines faced by Southeast Asian startups after data breaches. Early security costs a fraction of breach remediation.',
    },
    {
      icon: '📉',
      title: 'User Trust Collapse',
      stat: '40%+ Churn',
      body: 'Average user abandonment following a publicized security incident. Lost customers rarely return.',
    },
    {
      icon: '🚫',
      title: 'Failed Funding Rounds',
      stat: '↑ Investor Scrutiny',
      body: 'Investors increasingly require security documentation before committing to fintech, healthtech, and SaaS startups.',
    },
    {
      icon: '⚡',
      title: 'API-First Attack Surface',
      stat: 'OWASP API Top 10',
      body: 'Modern startups integrate payment gateways, AI models, and partners via APIs — each endpoint a potential attack vector.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="section-label">02 / Education</div>
            <h2 className="section-title">
              Why API Security{' '}
              <span className="text-orange-500">Cannot Wait</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="card p-6 h-full">
                <div className="text-3xl mb-4">{c.icon}</div>
                <div className="font-rajdhani font-bold text-white text-lg mb-1">{c.title}</div>
                <div className="font-mono text-[11px] text-orange-500 mb-3">{c.stat}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Compliance ────────────────────────────────────────────────────────────────
export function Compliance() {
  const tools = [
    { name: 'Burp Suite',  type: 'Black Box' },
    { name: 'OWASP ZAP',  type: 'Black Box' },
    { name: 'SQLMap',      type: 'Injection' },
    { name: 'Nuclei',      type: 'Scanning' },
    { name: 'jwt_tool',    type: 'Auth Testing' },
    { name: 'Postman',     type: 'API Testing' },
    { name: 'SonarQube',   type: 'White Box' },
    { name: 'Semgrep',     type: 'Static Analysis' },
    { name: 'Trivy',       type: 'Container' },
  ]

  const frameworks = [
    { icon: '🛡️', name: 'OWASP Top 10 (2021)',   sub: 'OWASP API Security Top 10 (2023) · Testing Guide v4.2' },
    { icon: '💳', name: 'PCI DSS',                sub: 'Requirements 6.5, 11.3, 12.6 · ASV-approved tooling' },
    { icon: '🔖', name: 'CWE / CVE Alignment',    sub: 'Every vulnerability mapped to CWE · CVSS v3.1 scoring' },
    { icon: '📋', name: 'ISO 27001 Informed',      sub: 'Risk assessment aligned with Annex A controls' },
    { icon: '🏛️', name: 'NIST Framework',          sub: 'Procedures based on NIST SP 800-115 methodology' },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="section-label">05 / Technology & Compliance</div>
            <h2 className="section-title">
              Industry-Standard Tools{' '}
              <span className="text-orange-500">& Frameworks</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tools */}
          <div>
            <h3 className="font-rajdhani font-bold text-xl text-white mb-5">
              Testing Toolkit
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tools.map((t, i) => (
                <Reveal key={t.name} delay={i * 40}>
                  <div className="card px-4 py-3">
                    <div className="font-rajdhani font-bold text-white text-base">{t.name}</div>
                    <div className="font-mono text-[10px] text-orange-500">{t.type}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="font-rajdhani font-bold text-xl text-white mb-5">
              Compliance Frameworks
            </h3>
            <div className="flex flex-col gap-3">
              {frameworks.map((f, i) => (
                <Reveal key={f.name} delay={i * 60}>
                  <div className="card px-5 py-4 flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <div className="font-rajdhani font-bold text-white">{f.name}</div>
                      <div className="font-mono text-[10px] text-slate-500">{f.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span
          className="text-orange-500 text-xl flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 text-slate-400 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="section-label justify-center">07 / FAQ</div>
            <h2 className="section-title">
              Common <span className="text-orange-500">Questions</span>
            </h2>
          </div>
        </Reveal>

        <div>
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
interface FooterProps {
  onNavigate: (section: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2L3 7l9 5 9-5-9-5z" />
                  <path d="M3 17l9 5 9-5" />
                  <path d="M3 12l9 5 9-5" />
                </svg>
              </div>
              <div>
                <div className="font-rajdhani font-bold text-white tracking-wider leading-none">
                  ANGKOR SECURITY
                </div>
                <div className="font-mono text-[9px] text-orange-500 tracking-widest">
                  API PENETRATION TESTING
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Democratizing cybersecurity for Cambodia's startup ecosystem. Affordable, specialized API security testing.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mb-4">
              Services
            </div>
            {['Black Box Testing', 'White Box Testing', 'Grey Box Testing', 'Annual Retainer', 'Security Workshops'].map((s) => (
              <button
                key={s}
                onClick={() => onNavigate('services')}
                className="block text-slate-500 hover:text-slate-300 text-sm mb-2.5 transition-colors bg-transparent border-none cursor-pointer text-left"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Standards */}
          <div>
            <div className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mb-4">
              Standards & Compliance
            </div>
            {['OWASP Top 10 (2021)', 'OWASP API Security Top 10', 'PCI DSS Req. 11.3', 'CVSS v3.1 Scoring', 'ISO 27001 Informed'].map((s) => (
              <div key={s} className="text-slate-500 text-sm mb-2.5">{s}</div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-slate-600 text-center sm:text-left">
            © 2026 Angkor Security · IDT Capstone Project I · Term 2 Year 3 · Phnom Penh, Cambodia
          </div>
          <div className="flex gap-5">
            {['Ethical Disclosure', 'Privacy Policy', 'NDA Template'].map((l) => (
              <span
                key={l}
                className="font-mono text-[10px] text-slate-600 hover:text-orange-500 cursor-pointer transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
