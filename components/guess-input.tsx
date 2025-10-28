"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled: boolean
}

export function GuessInput({ onGuess, disabled }: GuessInputProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const guess = Number.parseInt(input, 10)
    if (!isNaN(guess)) {
      onGuess(guess)
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your guess..."
          disabled={disabled}
          min="1"
          max="100"
          className="flex-1 px-6 py-4 bg-slate-900 border-4 border-cyan-400/40 rounded-2xl text-cyan-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-8 focus:ring-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg text-xl font-bold"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={disabled || !input}
          className="px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black rounded-2xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl text-lg border-4 border-cyan-400/50"
        >
          GUESS 🎯
        </motion.button>
      </div>
    </form>
  )
}
