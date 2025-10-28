"use client"

import { motion } from "framer-motion"

interface AttemptCounterProps {
  attempts: number
  maxAttempts: number
}

export function AttemptCounter({ attempts, maxAttempts }: AttemptCounterProps) {
  const remaining = maxAttempts - attempts
  const percentage = (remaining / maxAttempts) * 100

  const getColor = () => {
    if (percentage > 50) return "bg-green-500"
    if (percentage > 25) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="text-center mb-4">
        <span className="text-cyan-300 font-black text-xl">Attempts Remaining</span>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-cyan-400 font-black text-4xl drop-shadow-lg">
            {remaining}/{maxAttempts}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-10 overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full rounded-full ${getColor()} transition-colors shadow-lg`}
          />
        </div>
      </div>
    </motion.div>
  )
}
