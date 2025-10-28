"use client"

import { motion } from "framer-motion"

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: "easy" | "medium" | "hard") => void
}

const difficulties = [
  {
    level: "easy" as const,
    label: "Easy",
    attempts: 15,
    description: "15 attempts",
    icon: "🌟",
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.4)]",
  },
  {
    level: "medium" as const,
    label: "Medium",
    attempts: 10,
    description: "10 attempts",
    icon: "⚡",
    gradient: "from-purple-500 via-indigo-500 to-purple-600",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.4)]",
  },
  {
    level: "hard" as const,
    label: "Hard",
    attempts: 5,
    description: "5 attempts",
    icon: "🔥",
    gradient: "from-pink-500 via-rose-500 to-purple-500",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.4)]",
  },
]

export function DifficultySelector({ onSelectDifficulty }: DifficultySelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-10"
    >
      {/* Main Title */}
      <div className="space-y-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-3xl blur-2xl opacity-50"></div>
          <h1 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent py-4">
            NUMBER GUESSER
          </h1>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-xl font-bold"
        >
          Test your skills in this exciting guessing challenge!
        </motion.p>
      </div>

      {/* Difficulty Cards */}
      <div className="space-y-6">
        <p className="text-cyan-400 font-black text-2xl uppercase tracking-widest">Choose Your Difficulty</p>
        <div className="grid gap-6 md:grid-cols-3">
          {difficulties.map((diff, index) => (
            <motion.button
              key={diff.level}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectDifficulty(diff.level)}
              className={`py-8 px-6 rounded-3xl font-black text-white transition-all duration-300 relative overflow-hidden group bg-gradient-to-br ${diff.gradient} shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] border-4 border-white/50`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative flex flex-col items-center justify-center gap-4">
                <span className="text-6xl">{diff.icon}</span>
                <div>
                  <div className="text-3xl mb-2">{diff.label}</div>
                  <div className="text-base opacity-90">{diff.description}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-slate-400 text-lg font-semibold"
      >
        Ready to play? Select a difficulty to begin! 🎯
      </motion.p>
    </motion.div>
  )
}
