import type { ReactNode } from "react"

interface GameContainerProps {
  children: ReactNode
}

export function GameContainer({ children }: GameContainerProps) {
  return (
    <div className="w-full max-w-4xl">
      <div className="relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-3xl blur-2xl opacity-60 animate-pulse" />
        
        {/* Main container */}
        <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl shadow-2xl p-10 md:p-12 border-4 border-cyan-400/50">
          {children}
        </div>
      </div>
    </div>
  )
}
