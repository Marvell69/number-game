"use client"

import { motion, AnimatePresence } from "framer-motion"

interface GuessHistoryProps {
  guesses: number[]
}

export function GuessHistory({ guesses }: GuessHistoryProps) {
  if (guesses.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border-4 border-purple-400/40 shadow-xl">
        <div className="text-center">
          <p className="text-cyan-300 font-black text-xl mb-2">Your Guesses</p>
          <p className="text-slate-400 text-lg">None yet</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-slate-800 via-purple-900/30 to-slate-900 rounded-3xl p-6 border-4 border-cyan-400/40 shadow-2xl">
      <p className="text-cyan-300 font-black text-xl mb-4 text-center">📝 Your Guesses History</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <AnimatePresence>
          {guesses.map((guess, index) => (
            <motion.div
              key={`${guess}-${index}`}
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-2xl text-lg font-black shadow-xl border-2 border-cyan-400/50 hover:scale-110 transition-transform"
            >
              {guess}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
