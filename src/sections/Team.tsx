import { Reveal } from '@/components/Reveal'
import { TEAM_MEMBERS } from '@/data'

export function Team() {
  return (
    <section
      id="team"
      className="py-24 px-6 bg-bg-card border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="section-label justify-center">06 / The Team</div>
            <h2 className="section-title">
              Built by{' '}
              <span className="text-orange-500">Security-Minded Engineers</span>
            </h2>
            <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
              Telecommunications & Networking students at IDT Cambodia, combining academic
              rigor with real-world security expertise.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="card p-5 text-center h-full flex flex-col items-center">
                <div className="w-14 h-14 bg-orange-500/10 border border-border rounded-xl flex items-center justify-center text-2xl mb-4">
                  {member.icon}
                </div>
                <div className="font-rajdhani font-bold text-white text-base leading-tight mb-1">
                  {member.name}
                </div>
                <div className="font-mono text-[10px] text-orange-500 tracking-wider mb-2">
                  {member.role}
                </div>
                <div className="font-mono text-[10px] text-slate-600 leading-relaxed text-center">
                  {member.specializations.join(' · ')}
                </div>
                <div className="font-mono text-[10px] text-slate-700 mt-2">{member.id}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* AI Enhancement callout */}
        <Reveal delay={200}>
          <div className="mt-8 bg-orange-500/[0.04] border border-border rounded-lg p-6 flex gap-4 items-start">
            <span className="text-3xl flex-shrink-0">🤖</span>
            <div>
              <div className="font-rajdhani font-bold text-white text-xl mb-2">
                AI-Enhanced Testing Edge
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                We leverage the{' '}
                <strong className="text-orange-500">Anthropic Claude API</strong> and Langchain to
                automate reconnaissance, endpoint enumeration, and report generation — reducing
                testing time by approximately{' '}
                <strong className="text-white">40%</strong> while maintaining accuracy. Our AI
                agents handle the repetitive work so our analysts focus on creative attack scenarios.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
