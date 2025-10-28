"use client"

import { motion } from "framer-motion"

interface ResultModalProps {
  won: boolean
  secretNumber: number
  attempts: number
  maxAttempts: number
  onRestart: () => void
}

export function ResultModal({ won, secretNumber, attempts, maxAttempts, onRestart }: ResultModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-10 md:p-12 max-w-md w-full border-4 border-cyan-400/50 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-center mb-8"
        >
          {won ? <div className="text-8xl mb-4">🎉</div> : <div className="text-8xl mb-4">😢</div>}
        </motion.div>

        <h2 className={`text-4xl md:text-5xl font-black text-center mb-6 ${won ? "text-emerald-400" : "text-rose-400"}`}>
          {won ? "You Won!" : "Game Over!"}
        </h2>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 mb-8 space-y-3 border-4 border-purple-400/40 shadow-lg">
          <p className="text-cyan-300 font-bold text-lg">
            <span>Secret Number: </span>
            <span className="text-cyan-400 text-2xl">{secretNumber}</span>
          </p>
          <p className="text-cyan-300 font-bold text-lg">
            <span>Attempts Used: </span>
            <span className="text-cyan-400 text-2xl">{attempts}/{maxAttempts}</span>
          </p>
          {won && (
            <p className="text-emerald-400 font-black text-xl mt-4">
              Great job! You guessed it in {attempts} {attempts === 1 ? "attempt" : "attempts"}!
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black rounded-2xl hover:shadow-2xl transition-all text-xl border-4 border-cyan-400/50"
        >
          Play Again 🎮
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
