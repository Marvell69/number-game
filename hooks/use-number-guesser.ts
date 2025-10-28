"use client"

import { useState, useCallback, useEffect } from "react"

const DIFFICULTY_CONFIG = {
  easy: { maxAttempts: 15 },
  medium: { maxAttempts: 10 },
  hard: { maxAttempts: 5 },
}

export function useNumberGuesser(difficulty: "easy" | "medium" | "hard") {
  const [secretNumber, setSecretNumber] = useState(0)
  const [guesses, setGuesses] = useState<number[]>([])
  const [feedback, setFeedback] = useState("")
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)

  const maxAttempts = DIFFICULTY_CONFIG[difficulty].maxAttempts
  const attempts = guesses.length

  // Initialize game
  useEffect(() => {
    resetGame()
  }, [difficulty])

  const resetGame = useCallback(() => {
    const newSecret = Math.floor(Math.random() * 100) + 1
    setSecretNumber(newSecret)
    setGuesses([])
    setFeedback("")
    setGameOver(false)
    setWon(false)
  }, [])

  const makeGuess = useCallback(
    (guess: number) => {
      if (gameOver) return

      const newGuesses = [...guesses, guess]
      setGuesses(newGuesses)

      if (guess === secretNumber) {
        setFeedback("🎯 Correct! You found the number!")
        setGameOver(true)
        setWon(true)
      } else if (guess < secretNumber) {
        setFeedback("📈 Too low! Try a higher number.")
      } else {
        setFeedback("📉 Too high! Try a lower number.")
      }

      // Check if out of attempts
      if (newGuesses.length >= maxAttempts && guess !== secretNumber) {
        setGameOver(true)
        setWon(false)
        setFeedback(`Game Over! The number was ${secretNumber}.`)
      }
    },
    [secretNumber, guesses, gameOver, maxAttempts],
  )

  return {
    secretNumber,
    guesses,
    attempts,
    maxAttempts,
    feedback,
    gameOver,
    won,
    makeGuess,
    resetGame,
  }
}
