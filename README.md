# TicTacBlink

TicTacBlink is a playful twist on the classic Tic-Tac-Toe game, using emoji categories as player symbols and a fun "blinking" mechanic: each player is only allowed three active symbols on the board, and the oldest one disappears when a new one is placed.

## Demo

- Play the game live: https://tictacblink.vercel.app/

## Tech Stack

- **React** (with hooks)
- **Vite** (for fast dev/build)
- **React Router DOM** (multi-page SPA routing)
- **ESLint** (code linting)
- **Confetti effect** (on victory)
- Audio feedback (sound on move)
- Modern JS (ES6+), CSS modules

## Game Flow

1. **Category Selection:**  
   Each player picks an emoji category (e.g., Work, Food, Sports, Fire, Water) from the provided UI. 
2. **Gameplay:**  
   - Players alternate turns, clicking on the board to place a random emoji from their chosen category.
   - **Blinking Mechanic:**  
     - Each player can only have up to 3 emojis on the board at any one time.
     - When a player tries to place a fourth emoji, their oldest emoji is removed, keeping only the 3 most recent.
     - If the player tries to place a new emoji in the spot of their oldest, the move is ignored (prevents accidental overwrites).
   - Audio feedback and confetti effects enhance the experience.
3. **Victory:**  
   - The game checks for standard Tic-Tac-Toe wins (three-in-a-row, column, or diagonal).
   - Only a row of the same player’s emojis (from their chosen category) counts as a win.

## Core Logic

The heart of the game logic is in the custom React hook: [`useTicTacBlink`](src/hooks/use-tictacblink.jsx).

### Emoji "Blinking" Mechanism

```js
if (moves.length === 3) {
  const oldest = moves.shift();
  if (oldest === index) return; // Prevents placing in the spot being removed
  newBoard[oldest] = null; // Remove oldest emoji from board
}
newBoard[index] = symbol; // Place new emoji
moves.push(index); // Track move order
```
- Each player’s moves are tracked in an array.
- When a player has made 3 moves, the oldest is removed before adding a new one.
- The code ensures a new emoji isn’t placed on the very cell that’s about to be cleared.

### Win Detection

- The board is checked after each move for all classic Tic-Tac-Toe lines.
- A win is only counted if all emojis in a line belong to the current player's chosen category.

## Project Structure

```
src/
  App.jsx                  # Main router
  components/
    game.jsx               # Game board and UI
    choose-category.jsx    # Category/emoji selection
    help.jsx               # (likely) Help/about page
    landingpage.jsx        # Welcome screen
  hooks/
    use-tictacblink.jsx    # Game logic (emoji management, win detection, etc.)
  assets/                  # Static assets (e.g., sounds)
  App.css, index.css       # Styles
public/
  ...                      # Static files
```

## Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

You can add or edit emoji categories in `src/components/choose-category.jsx`.

## License

MIT

---

