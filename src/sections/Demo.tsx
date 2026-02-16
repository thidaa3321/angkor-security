import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { VULN_DEMOS } from '@/data'
import type { Severity } from '@/types'

function SeverityBadge({ severity }: { severity: Severity }) {
  const cls =
    severity === 'CRITICAL'
      ? 'badge-critical'
      : severity === 'HIGH'
      ? 'badge-high'
      : 'badge-info'
  return <span className={cls}>{severity}</span>
}

const STEPS = [
  'Discovery & Reconnaissance',
  'Vulnerability Assessment',
  'Proof-of-Concept Exploit',
  'Report & Remediation Guide',
]

export function Demo() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = VULN_DEMOS[activeIdx]

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="section-label">03 / Live Demonstration</div>
            <h2 className="section-title">
              Real Vulnerabilities,{' '}
              <span className="text-orange-500">Simulated Environment</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl text-lg">
              Our deliberately insecure e-commerce API demonstrates the exact vulnerabilities we
              identify and how we fix them — proving our expertise to clients.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {VULN_DEMOS.map((v, i) => (
            <button
              key={v.name}
              onClick={() => setActiveIdx(i)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded text-sm font-rajdhani font-semibold
                tracking-wider uppercase transition-all duration-200 border cursor-pointer
                ${activeIdx === i
                  ? v.severity === 'CRITICAL'
                    ? 'bg-red-500/10 border-red-500/40 text-red-400'
                    : 'bg-orange-500/10 border-orange-500/40 text-orange-400'
                  : 'bg-transparent border-border text-slate-500 hover:border-border-bright hover:text-slate-300'
                }
              `}
            >
              {v.name}
              <SeverityBadge severity={v.severity} />
            </button>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vulnerable Code Panel */}
            <div className="bg-[#0a0c10] border border-red-500/20 rounded-lg overflow-hidden">
              <div className="bg-red-500/[0.06] px-5 py-3 border-b border-red-500/15 flex justify-between items-center">
                <span className="font-mono text-[11px] text-red-400 tracking-widest">
                  ⚠ VULNERABLE CODE — SIMULATION APP
                </span>
                <SeverityBadge severity={active.severity} />
              </div>
              <pre className="p-6 font-mono text-[13px] text-slate-400 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {active.code}
              </pre>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              {/* Fix */}
              <div className="card p-5 border-green-500/20 hover:border-green-500/40">
                <div className="font-mono text-[10px] text-green-400 tracking-widest mb-3">
                  ✓ REMEDIATION
                </div>
                <pre className="font-mono text-[13px] text-slate-400 leading-relaxed whitespace-pre-wrap overflow-x-auto">
                  {active.fix}
                </pre>
              </div>

              {/* Methodology */}
              <div className="card p-5 flex-1">
                <div className="font-mono text-[10px] text-orange-500 tracking-widest mb-4">
                  TESTING METHODOLOGY
                </div>
                <div className="flex flex-col gap-3">
                  {STEPS.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center font-mono text-[11px] text-orange-500 flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-400 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OWASP mapping */}
              <div className="card p-5">
                <div className="font-mono text-[10px] text-slate-600 tracking-widest mb-3">
                  COMPLIANCE MAPPING
                </div>
                <div className="flex flex-wrap gap-2">
                  {['OWASP Top 10 (2021)', 'OWASP API Top 10', 'PCI DSS Req 6.5'].map((c) => (
                    <span key={c} className="badge-info">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Ethical note */}
        <Reveal delay={100}>
          <div className="mt-6 bg-green-500/[0.04] border border-green-500/15 rounded-lg p-4 flex gap-3 items-start">
            <span className="text-green-400 text-lg flex-shrink-0">🔒</span>
            <p className="text-slate-500 text-sm leading-relaxed">
              <strong className="text-slate-400">Ethical Use Statement:</strong> This simulation app is
              clearly labeled as a training tool, hosted in an isolated environment, and never used for
              malicious purposes. All code includes educational comments explaining the security flaws.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
