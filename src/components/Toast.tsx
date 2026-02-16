import { useEffect } from 'react'
import type { ToastData } from '@/types'

interface ToastProps extends ToastData {
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4500)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div
      className={`
        fixed bottom-8 right-8 z-[9999] flex items-center gap-3 px-5 py-4
        rounded-lg border backdrop-blur-xl animate-slide-in-right
        ${isSuccess
          ? 'bg-green-500/10 border-green-500/30 text-green-400'
          : 'bg-red-500/10 border-red-500/30 text-red-400'
        }
      `}
    >
      <span className="text-lg">{isSuccess ? '✓' : '✕'}</span>
      <span className="font-mono text-sm text-slate-200">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-500 hover:text-slate-300 transition-colors bg-transparent border-none cursor-pointer text-lg leading-none"
      >
        ×
      </button>
    </div>
  )
}
