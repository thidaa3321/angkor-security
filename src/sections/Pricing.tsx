import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { ONE_TIME_PRICING } from '@/data'

type PricingTab = 'onetime' | 'retainer' | 'training'

interface PricingProps {
  onNavigate: (section: 'contact') => void
}

export function Pricing({ onNavigate }: PricingProps) {
  const [activeTab, setActiveTab] = useState<PricingTab>('onetime')

  const tabs: { id: PricingTab; label: string }[] = [
    { id: 'onetime',  label: 'One-Time Testing' },
    { id: 'retainer', label: 'Annual Retainer' },
    { id: 'training', label: 'Training & Consulting' },
  ]

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-bg-card border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="section-label justify-center">04 / Pricing</div>
            <h2 className="section-title">
              Transparent,{' '}
              <span className="text-orange-500">Startup-Friendly Pricing</span>
            </h2>
            <p className="text-slate-400 mt-3 text-lg">
              60–80% lower than enterprise alternatives. No hidden fees.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="flex gap-2 justify-center flex-wrap mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`price-tab ${activeTab === t.id ? 'active' : ''}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── One-Time ── */}
        {activeTab === 'onetime' && (
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ONE_TIME_PRICING.map((tier) => (
                <div
                  key={tier.name}
                  className={`
                    flex flex-col p-8 rounded-lg border relative
                    ${tier.featured
                      ? 'bg-bg-card border-orange-500/40 shadow-[0_0_40px_rgba(255,107,0,0.10)]'
                      : 'bg-bg border-border'
                    }
                  `}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-mono text-[10px] tracking-widest uppercase px-4 py-0.5 rounded-sm whitespace-nowrap">
                      Best Value
                    </div>
                  )}

                  <div className="font-rajdhani font-bold text-xl text-white mb-2">
                    {tier.name}
                  </div>
                  <div
                    className="font-rajdhani font-bold text-6xl leading-none mb-1"
                    style={{ color: tier.color }}
                  >
                    ${tier.price}
                  </div>
                  <div className="font-mono text-[10px] text-slate-600 mb-6">
                    {tier.unit}
                  </div>

                  <ul className="flex-1 flex flex-col gap-2 mb-6">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span style={{ color: tier.color }} className="flex-shrink-0 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="font-mono text-[10px] text-slate-600 mb-4">
                    Target: {tier.volume}
                  </div>

                  <button
                    className={`w-full justify-center ${tier.featured ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => onNavigate('contact')}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* ── Retainer ── */}
        {activeTab === 'retainer' && (
          <Reveal>
            <div className="max-w-xl mx-auto">
              <div className="card-featured p-10 text-center rounded-lg">
                <div className="font-mono text-[10px] text-orange-500 tracking-widest mb-2">
                  ANNUAL SECURITY RETAINER
                </div>
                <div className="font-rajdhani font-bold text-7xl text-orange-500 leading-none mb-1">
                  $3,600
                </div>
                <div className="text-slate-400 text-sm mb-8">$300/month · Billed annually</div>

                <div className="text-left space-y-3 mb-8">
                  {[
                    'Quarterly penetration testing (4 tests/year)',
                    'Continuous vulnerability monitoring',
                    'Priority response for security incidents',
                    'Unlimited email & chat support',
                    'Dedicated Slack channel',
                    'Emergency advisory included',
                  ].map((f) => (
                    <div key={f} className="flex gap-3 items-start">
                      <span className="text-orange-500 flex-shrink-0">✓</span>
                      <span className="text-slate-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="btn-primary w-full justify-center text-base py-4"
                  onClick={() => onNavigate('contact')}
                >
                  Request Retainer Proposal
                </button>
              </div>
            </div>
          </Reveal>
        )}

        {/* ── Training ── */}
        {activeTab === 'training' && (
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎓',
                  name: 'Security Workshop',
                  price: '$500',
                  unit: 'per session',
                  desc: '3-hour hands-on API security workshop. OWASP Top 10 training with certificate of completion.',
                  planned: false,
                },
                {
                  icon: '🔧',
                  name: 'Remediation Consulting',
                  price: '$75',
                  unit: 'per hour',
                  desc: 'Developer consulting for fixing found vulnerabilities. Code review for patched issues.',
                  planned: false,
                },
                {
                  icon: '📅',
                  name: 'Monthly Subscription',
                  price: '$200',
                  unit: 'per month',
                  desc: 'Monthly automated scanning + quarterly manual test. Launching in Capstone II.',
                  planned: true,
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`card p-8 flex flex-col ${t.planned ? 'opacity-60' : ''}`}
                >
                  <div className="text-3xl mb-4">{t.icon}</div>
                  {t.planned && (
                    <span className="badge-info mb-3 self-start">COMING SOON</span>
                  )}
                  <div className="font-rajdhani font-bold text-xl text-white mb-1">{t.name}</div>
                  <div className="font-rajdhani font-bold text-5xl text-orange-500 leading-none mb-1">
                    {t.price}
                  </div>
                  <div className="font-mono text-[10px] text-slate-600 mb-4">{t.unit}</div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{t.desc}</p>
                  {!t.planned && (
                    <button
                      className="btn-outline mt-6 w-full justify-center"
                      onClick={() => onNavigate('contact')}
                    >
                      Enquire
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
