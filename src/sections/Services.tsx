import { Reveal } from '@/components/Reveal'
import { SERVICES } from '@/data'

interface ServicesProps {
  onNavigate: (section: 'contact') => void
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-14">
            <div className="section-label">01 / Services</div>
            <h2 className="section-title">
              Specialized<br />
              <span className="text-orange-500">API Security Testing</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl text-lg">
              Three engagement models built for Cambodia's startup reality — focused, affordable, and fast.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 120}>
              <div
                className={`
                  flex flex-col h-full p-8 rounded-lg border transition-all duration-300
                  hover:-translate-y-1 hover:shadow-card-hover relative
                  ${svc.featured
                    ? 'bg-bg-card border-orange-500/40 shadow-[0_0_40px_rgba(255,107,0,0.10)]'
                    : 'bg-bg-card border-border hover:border-border-bright'
                  }
                `}
              >
                {svc.featured && (
                  <div className="absolute -top-3 right-6 bg-orange-500 text-white font-mono text-[10px] tracking-widest uppercase px-3 py-0.5 rounded-sm">
                    Most Thorough
                  </div>
                )}

                <div className="text-3xl mb-4">{svc.icon}</div>

                <div
                  className="font-mono text-[10px] tracking-widest uppercase mb-1"
                  style={{ color: svc.color }}
                >
                  {svc.tagline}
                </div>

                <h3 className="font-rajdhani font-bold text-2xl text-white mb-1">
                  {svc.name} Testing
                </h3>

                <div
                  className="font-rajdhani font-bold text-5xl mb-1"
                  style={{ color: svc.featured ? '#FF6B00' : '#fff' }}
                >
                  {svc.price}
                </div>

                <div className="flex gap-3 mb-6 font-mono text-[10px] text-slate-600">
                  <span>{svc.hours}</span>
                  <span>·</span>
                  <span>{svc.reportPages} report</span>
                </div>

                <ul className="flex-1 flex flex-col gap-2 mb-6">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span style={{ color: svc.color }} className="flex-shrink-0 mt-0.5">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="border-t border-border pt-4 mb-6">
                  <div className="font-mono text-[9px] text-slate-600 tracking-widest uppercase mb-2">
                    Tools Used
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tools.map((t) => (
                      <span
                        key={t}
                        className="bg-white/[0.03] border border-border rounded px-2 py-0.5 font-mono text-[10px] text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className={svc.featured ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                  onClick={() => onNavigate('contact')}
                >
                  Start {svc.name} Testing
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Discount badges */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {[
              '🎓 Startup / University: 10% Off',
              '📦 Bundle 2+ Tests: 10% Off',
              '🤝 Referral Credit: $75',
            ].map((d) => (
              <div
                key={d}
                className="bg-orange-500/[0.07] border border-border rounded-md px-4 py-2 font-mono text-xs text-orange-400"
              >
                {d}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
