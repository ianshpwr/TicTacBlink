import { useState } from 'react';
import { Link } from 'react-router-dom';

function ChooseCategory() {
  const [player1Category, setPlayer1Category] = useState(null);
  const [player2Category, setPlayer2Category] = useState(null);

  const allCategories = {
    Work: ['💼','🖊️','🧑‍💻','🗂️'],
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
            <span className='outerspan'><span>{category}</span><span className='innerspan'>{emojis.join(' ')}</span></span>
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
                  {category}: {emojis.join(' ')}
                </button>
              ))}
          </div>
        </div>
      ) : (
        <div className="category">
          <h2>Both players are ready!</h2>
          <p>
            Player 1: {player1Category} - {allCategories[player1Category].join(' ')}
          </p>
          <p>
            Player 2: {player2Category} - {allCategories[player2Category].join(' ')}
          </p>
          <Link
            to="/game"
            state={{
              player1Category,
              player2Category,
              emojis: {
                player1: allCategories[player1Category],
                player2: allCategories[player2Category],
              },
            }}
          >
            Start Game
          </Link>
        </div>
      )}
    </div>
  );
}

export default ChooseCategory;
