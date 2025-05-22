import {useState} from 'react'

const initialBoard = () => Array(9).fill(null)

function useTicTacBlink() {
    const [board, setBoard] = useState(initialBoard())
    const [isXNext, setIsXNext] = useState(true)
  
    const winningPatterns = []


    const calculateWinner = () => {}


    const handleClick = (index) => {
        const winner = calculateWinner(board)
        if (winner || board[index]) return
        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
    }


    const getStatusMessage = () => {}


    const resetGame = () => {} 

    return { board, handleClick, calculateWinner, resetGame, getStatusMessage }

}

export default useTicTacBlink;