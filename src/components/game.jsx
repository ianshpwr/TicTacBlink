import { useLocation } from 'react-router-dom';
import useTicTacBlink from '../hooks/use-tictacblink';
import './../App.css';
function Game() {
  const location = useLocation();
  const { player1Category, player2Category, emojis } = location.state || {};

  const game = useTicTacBlink(emojis || { player1: [], player2: [] });

  if (!player1Category || !player2Category) {
    return <h2>Invalid game state. Please select categories first.</h2>;
  }

  return (
    <div>
      <div className='heading'>
      <h1>Tic Tac Blink</h1>
      <h3>{game.getStatusMessage()}</h3>
      </div>
      <div className="game">
        <div className="board">
          {game.board.map((b, index) => (
            <button
              key={index}
              className="box"
              onClick={() => game.handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
      <button className="startreset" onClick={game.resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default Game;
