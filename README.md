# Number Guesser Game

A modern, interactive number-guessing game built with React, TypeScript, and Tailwind CSS. Guess the secret number between 1 and 100 with a limited number of attempts!

## Features

### Core Features
- 🎮 **Interactive Gameplay**: Guess a random number between 1 and 100
- 📊 **Real-time Feedback**: Get immediate feedback on whether your guess is too high, too low, or correct
- 🎯 **Attempt Tracking**: Monitor your remaining attempts with a visual progress bar
- 📝 **Guess History**: View all your previous guesses in one place
- ✨ **Smooth Animations**: Enjoy fluid animations and transitions throughout the game

### Difficulty Levels
Choose from three difficulty levels before starting:
- **Easy**: 15 attempts to find the number
- **Medium**: 10 attempts to find the number
- **Hard**: 5 attempts to find the number

### Additional Features
- 🔄 **Restart Without Reload**: Play again without refreshing the page
- 🎨 **Beautiful UI**: Modern dark theme with gradient buttons and smooth animations
- ⚠️ **Input Validation**: Prevents invalid inputs and duplicate guesses
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## How to Play

1. **Select Difficulty**: Choose your preferred difficulty level (Easy, Medium, or Hard)
2. **Make a Guess**: Enter a number between 1 and 100 in the input field
3. **Read Feedback**: Check if your guess is too high, too low, or correct
4. **Track Progress**: Monitor your remaining attempts using the progress bar
5. **Win or Lose**: 
   - **Win**: Guess the correct number before running out of attempts
   - **Lose**: Run out of attempts without guessing the correct number
6. **Play Again**: Click "Play Again" to restart the game with a new number

## Game Rules

- You must guess a number between 1 and 100
- Each guess must be unique (no duplicate guesses allowed)
- You have a limited number of attempts based on difficulty
- The game ends when you either:
  - Guess the correct number (Win)
  - Run out of attempts (Lose)
- After the game ends, you can restart without reloading the page

## Input Validation

The game includes robust error handling:
- ✅ Validates that input is a number
- ✅ Ensures the number is between 1 and 100
- ✅ Prevents duplicate guesses
- ✅ Displays clear error messages for invalid inputs
- ✅ Disables input after game ends

## Technical Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Build Tool**: Next.js (App Router)

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Main game page
│   └── globals.css           # Global styles
├── components/
│   ├── game-container.tsx    # Main container wrapper
│   ├── difficulty-selector.tsx # Difficulty selection UI
│   ├── game-board.tsx        # Main game board
│   ├── guess-input.tsx       # Input form component
│   ├── guess-history.tsx     # Previous guesses display
│   ├── attempt-counter.tsx   # Attempt tracking UI
│   └── result-modal.tsx      # Win/loss modal
├── hooks/
│   └── use-number-guesser.ts # Game logic hook
└── README.md                 # This file
\`\`\`

## Component Breakdown

### `GameContainer`
Wrapper component that provides consistent styling and layout for the game.

### `DifficultySelector`
Displays three difficulty options with animated buttons. Allows players to choose their preferred challenge level.

### `GameBoard`
Main game interface that combines all game components and manages the game flow.

### `GuessInput`
Form component for entering guesses with validation and submit functionality.

### `GuessHistory`
Displays all previous guesses in an animated list format.

### `AttemptCounter`
Shows remaining attempts with a dynamic progress bar that changes color based on remaining attempts.

### `ResultModal`
Modal dialog that appears when the game ends, showing the result, secret number, and attempts used.

### `useNumberGuesser` Hook
Custom React hook that manages all game logic:
- Generates random secret number
- Tracks guesses and attempts
- Provides feedback on each guess
- Manages game state (win/lose/in-progress)
- Handles game reset

## Getting Started

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd number-guesser-game
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Git Workflow

This project uses feature branches for development:

\`\`\`bash
# Create a feature branch
git checkout -b feature/feature-name

# Make your changes and commit
git add .
git commit -m "feat: description of changes"

# Push to remote
git push origin feature/feature-name

# Create a pull request
\`\`\`

### Commit History

- `feat: setup project structure and core game logic`
- `feat: build main game UI components`
- `feat: add difficulty levels system`
- `feat: add animations and styling`
- `feat: add restart functionality`
- `docs: create comprehensive README`

## Customization

### Changing the Number Range
Edit the `useNumberGuesser` hook to change the range:
\`\`\`typescript
const newSecret = Math.floor(Math.random() * 100) + 1; // Change 100 to desired max
\`\`\`

### Adjusting Difficulty Levels
Modify `DIFFICULTY_CONFIG` in `use-number-guesser.ts`:
\`\`\`typescript
const DIFFICULTY_CONFIG = {
  easy: { maxAttempts: 20 },    // Increase attempts
  medium: { maxAttempts: 12 },
  hard: { maxAttempts: 6 },
}
\`\`\`

### Customizing Colors
Edit the Tailwind classes in components to change the color scheme. The game uses:
- Primary: Blue/Cyan gradient
- Success: Green
- Warning: Yellow
- Error: Red
- Background: Slate

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- ✅ Memoized callbacks with `useCallback`
- ✅ Optimized re-renders with proper state management
- ✅ Lazy animations with Framer Motion
- ✅ Efficient component composition

## Accessibility

- ✅ Semantic HTML elements
- ✅ Proper form labels and inputs
- ✅ Keyboard navigation support
- ✅ Clear error messages
- ✅ High contrast colors

## Future Enhancements

Potential features for future versions:
- 🌍 Multiplayer mode
- 🏆 Leaderboard system
- 🎵 Sound effects and background music
- 🎨 Theme customization (light/dark mode)
- 📊 Game statistics and analytics
- 🌐 Internationalization (i18n)
- 🔐 User accounts and progress saving

## Troubleshooting

### Game not starting?
- Ensure all dependencies are installed: `npm install`
- Clear browser cache and restart dev server

### Animations not working?
- Check that Framer Motion is installed: `npm install framer-motion`
- Verify Tailwind CSS is properly configured

### Input validation issues?
- Check browser console for error messages
- Ensure input is a valid number between 1-100

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Enjoy the game! 🎮**
