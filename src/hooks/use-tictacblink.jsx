import {useState} from 'react'

const initialBoard = () => Array(9).fill(null)

function useTicTacBlink() {
    const [board, setBoard] = useState(initialBoard())
    const [isXNext, setIsXNext] = useState(true)
    const [playerMoves, setPlayerMoves] = useState({player1: [],player2: []});

  
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]


    const calculateWinner = (currentBoard) => {
        for (let i=0;i<winningPatterns.length;i++){
            const [a, b, c] = winningPatterns[i]
            if (currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c]) 
            {
                return currentBoard[a]
            }
        }
        return null
    }


   const handleClick = (index) => {
    const winner = calculateWinner(board)
    if (winner || board[index]) return

    const currentPlayer = isXNext ? 'player1' : 'player2'
    const symbol = isXNext ? 'X' : 'O'
    const moves = [...playerMoves[currentPlayer]]
    const newBoard = [...board]

    if (moves.length === 3) {
        const oldest = moves.shift()
        if (oldest === index) return 
        newBoard[oldest] = null
    }

    newBoard[index] = symbol
    moves.push(index)

    setBoard(newBoard)
    setPlayerMoves(prev=>({...prev,[currentPlayer]: moves}))
    setIsXNext(!isXNext)
}



    const getStatusMessage = () => {
        const winner = calculateWinner(board)
        if (winner) {
            return `Winner: ${winner}`
        } else {
            return `Next player: ${isXNext ? 'X' : 'O'}`
        }
    }


    const resetGame = () => {
        setBoard(initialBoard())
        setIsXNext(true)
    } 
    return { board, handleClick, calculateWinner, resetGame, getStatusMessage }
}

export default useTicTacBlink;