import { Reveal } from '@/components/Reveal'
import { ContactForm } from '@/components/ContactForm'
import type { ToastData } from '@/types'

interface ContactProps {
  onToast: (toast: ToastData) => void
}

export function Contact({ onToast }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-bg-card border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — CTA copy */}
          <Reveal>
            <div>
              <div className="section-label">08 / Contact</div>
              <h2 className="section-title">
                Start Your{' '}
                <span className="text-orange-500">Security Assessment</span>
              </h2>
              <p className="text-slate-400 mt-4 text-lg leading-relaxed mb-8 max-w-lg">
                Free 30-minute consultation. We'll discuss your architecture, identify the right
                testing approach, and send a scoped proposal within 24 hours.
              </p>

              <div className="flex flex-col gap-5 mb-8">
                {[
                  { icon: '📍', label: 'Location',      value: 'Phnom Penh, Cambodia' },
                  { icon: '⚡', label: 'Response Time', value: 'Within 24 hours' },
                  { icon: '🔒', label: 'NDA Signed',    value: 'Before any testing begins' },
                  { icon: '📧', label: 'Secure Channel',value: 'ProtonMail / Signal available' },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3.5">
                    <span className="text-xl w-7 flex-shrink-0">{c.icon}</span>
                    <div>
                      <div className="font-mono text-[10px] text-slate-600 tracking-widest uppercase">
                        {c.label}
                      </div>
                      <div className="text-slate-300 text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ethical commitment */}
              <div className="bg-green-500/[0.05] border border-green-500/20 rounded-lg p-5">
                <div className="font-mono text-[10px] text-green-400 tracking-widest mb-2">
                  ETHICAL COMMITMENT
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We never test production systems without explicit written permission. All testing
                  is scoped, time-limited, and conducted under a signed NDA. Critical vulnerabilities
                  are disclosed immediately upon discovery.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={150}>
            <ContactForm onToast={onToast} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
