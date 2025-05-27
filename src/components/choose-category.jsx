import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import theme from '../assets/theme.mp3';

function ChooseCategory() {
  const [player1Category, setPlayer1Category] = useState(null);
  const [player2Category, setPlayer2Category] = useState(null);
  const themeSound = useRef(null);

  if (!themeSound.current) {
    themeSound.current = new Audio(theme);
    themeSound.current.loop = true;
    themeSound.current.volume = 0.5;
  }

  useEffect(() => {
    themeSound.current.play().catch(() => {
      console.log("Audio wwill play on interaction.");
    });

    return () => {
    };
  }, []);

  const handleStartGame = () => {
    themeSound.current.pause();
    themeSound.current.currentTime = 0;
  };

  const allCategories = {
    Work: ['💼', '🖊️', '🧑‍💻', '🗂️'],
    Food: ['🍕', '🍟', '🍔', '🍩'],
    Sports: ['⚽', '🏀', '🏈', '🎾'],
    Fire: ['🔥', '🔥', '🔥', '🔥'],
    Water: ['💧', '💧', '💧', '💧'],
  };

  const categories = Object.entries(allCategories);

  return (
    <div className="category-container">
      {!player1Category ? (
        <div className="category">
          <h2>Player 1: Choose Your Emoji Category</h2>
          <div className="buttons">
            {categories.map(([category, emojis]) => (
              <button key={category} onClick={() => setPlayer1Category(category)}>
                <span className="outerspan">
                  <span>{category}</span>
                  <span className="innerspan">{emojis.join(' ')}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : !player2Category ? (
        <div className="category">
          <h2>Player 2: Choose Your Emoji Category</h2>
          <div className="buttons">
            {categories
              .filter(([category]) => category !== player1Category)
              .map(([category, emojis]) => (
                <button key={category} onClick={() => setPlayer2Category(category)}>
                  <span className="outerspan">
                    <span>{category}</span>
                    <span className="innerspan">{emojis.join(' ')}</span>
                  </span>
                </button>
              ))}
          </div>
        </div>
      ) : (
        <div className="category">
          <h2>Both players are ready!</h2>
          <p className="h2" style={{ fontSize: '1.2rem' }}>
            <span className="ready">Player 1</span><br />
            <span>{player1Category} - {allCategories[player1Category].join(' ')}</span>
          </p>
          <p className="h2" style={{ fontSize: '1.2rem' }}>
            <span className="ready">Player 2</span><br />
            <span>{player2Category} - {allCategories[player2Category].join(' ')}</span>
          </p>
          <Link
            to="/game"
            className="startreset"
            style={{ fontSize: '1.2rem' }}
            state={{
              player1Category,
              player2Category,
              emojis: {
                player1: allCategories[player1Category],
                player2: allCategories[player2Category],
              },
            }}
            onClick={handleStartGame}
          >
            Start Game
          </Link>
        </div>
      )}
    </div>
  );
}

export default ChooseCategory;
