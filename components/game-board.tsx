"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GuessInput } from "./guess-input"
import { GuessHistory } from "./guess-history"
import { AttemptCounter } from "./attempt-counter"

interface GameBoardProps {
  guesses: number[]
  attempts: number
  maxAttempts: number
  feedback: string
  gameOver: boolean
  onGuess: (guess: number) => void
  difficulty: "easy" | "medium" | "hard"
  onBack: () => void
  onTryAgain: () => void
}

export function GameBoard({ guesses, attempts, maxAttempts, feedback, gameOver, onGuess, difficulty, onBack, onTryAgain }: GameBoardProps) {
  const [inputError, setInputError] = useState("")

  const handleGuess = (guess: number) => {
    if (guess < 1 || guess > 100) {
      setInputError("Please enter a number between 1 and 100")
      return
    }
    if (guesses.includes(guess)) {
      setInputError("You already guessed this number!")
      return
    }
    setInputError("")
    onGuess(guess)
  }

  const getFeedbackColor = () => {
    if (feedback.includes("Correct")) return "text-emerald-400"
    if (feedback.includes("too high")) return "text-rose-400"
    if (feedback.includes("too low")) return "text-cyan-400"
    return "text-slate-300"
  }

  const getFeedbackIcon = () => {
    if (feedback.includes("Correct")) return "✓"
    if (feedback.includes("too high")) return "↓"
    if (feedback.includes("too low")) return "↑"
    return "?"
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <span className="text-xl">←</span> <span>Back</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onTryAgain}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-cyan-400/50"
          >
            <span>🔄</span> <span>Try Again</span>
          </motion.button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-2xl blur-md opacity-50"></div>
          <h2 className="relative text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent py-4">
            🎲 GUESS THE NUMBER
          </h2>
        </div>
        <p className="text-cyan-300 text-lg font-bold uppercase tracking-widest">Between 1 and 100</p>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 border-4 border-cyan-400/40 shadow-xl">
        <AttemptCounter attempts={attempts} maxAttempts={maxAttempts} />
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 border-4 border-purple-400/40 shadow-lg">
        <GuessInput onGuess={handleGuess} disabled={gameOver} />
      </div>

      {/* Feedback Section */}
      <AnimatePresence>
        {inputError && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.9 }}
            className="bg-red-900/30 border-4 border-red-500/50 text-red-300 px-6 py-4 rounded-2xl text-base font-bold shadow-lg backdrop-blur-sm"
          >
            ⚠️ {inputError}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`text-center font-black text-3xl md:text-4xl ${getFeedbackColor()} p-6 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-cyan-400/40 shadow-2xl`}
          >
            <span className="text-5xl mr-3">{getFeedbackIcon()}</span>
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* History Section */}
      <GuessHistory guesses={guesses} />
    </motion.div>
  )
}
