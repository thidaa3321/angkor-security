import { useEffect, useState } from 'react'

interface TerminalProps {
  lines: string[]
}

export function Terminal({ lines }: TerminalProps) {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= lines.length) return

    const currentLine = lines[lineIdx]

    if (charIdx < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev]
          next[lineIdx] = currentLine.slice(0, charIdx + 1)
          return next
        })
        setCharIdx((c) => c + 1)
      }, 30)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setLineIdx((l) => l + 1)
        setCharIdx(0)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [lineIdx, charIdx, lines])

  const getLineColor = (line: string): string => {
    if (line.includes('[CRITICAL]')) return 'text-red-400'
    if (line.includes('[HIGH]')) return 'text-orange-400'
    if (line.includes('[MEDIUM]')) return 'text-yellow-400'
    if (line.includes('Done') || line.includes('✓')) return 'text-green-400'
    return 'text-slate-300'
  }

  return (
    <div className="terminal-window">
      {/* Header */}
      <div className="terminal-header">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-3 font-mono text-[11px] text-slate-500">
          angkor-security ~ terminal
        </span>
      </div>

      {/* Body */}
      <div className="p-6 min-h-[280px] font-mono text-sm leading-relaxed">
        {displayed.map((line, i) => (
          <div key={i} className="mb-1.5 flex items-start gap-2">
            <span className="text-orange-500 flex-shrink-0">$</span>
            <span className={getLineColor(line)}>{line}</span>
            {i === lineIdx && (
              <span className="border-r-2 border-orange-500 h-4 mt-0.5 animate-blink" />
            )}
          </div>
        ))}
        {/* Idle cursor after all lines complete */}
        {lineIdx >= lines.length && (
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-orange-500">$</span>
            <span className="border-r-2 border-orange-500 h-4 mt-0.5 animate-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
