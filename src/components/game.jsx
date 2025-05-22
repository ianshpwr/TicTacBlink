import useTicTacBlink from '../hooks/use-tictacblink';
import './../App.css'
function Game(){
    const { board, handleClick, calculateWinner, resetGame, getStatusMessage } = useTicTacBlink()
    return (
        <div>
            <h1>Tic Tac Blink</h1>
            {getStatusMessage()}
        <div className='game'>
            <div className='board'>
                {board.map((b, index) => (
                    <button key={index} className='box' onClick={()=>handleClick(index)} disabled={b !== null}>{b}</button>
                ))}

            </div>
        </div>
            <button className='reset' onClick={resetGame}>Reset Game</button>
        </div>
    )
}


export default Game;