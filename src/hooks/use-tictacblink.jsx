import { useState,useEffect,useRef } from 'react'
import ChooseCategory from '../components/choose-category'
import clicksound from '../assets/clicksound.wav'

const initialBoard = () => Array(9).fill(null)

function useTicTacBlink(emojiCategories) {
  const [board, setBoard] = useState(initialBoard())
  const [isXNext, setIsXNext] = useState(true)
  const [playerMoves, setPlayerMoves] = useState({ player1: [], player2: [] })
  const [player1winscount, setPlayer1Wins] = useState(0)
  const [player2winscount, setPlayer2Wins] = useState(0)
  const [winnerCounted, setWinnerCounted] = useState(false)
  const clickSound = useRef(new Audio(clicksound));
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const calculateWinner = (currentBoard) => {
    for (let [a, b, c] of winningPatterns) {
      const emojis = [currentBoard[a], currentBoard[b], currentBoard[c]]

      if (emojis.every(Boolean)) {
        const categories = Object.entries(emojiCategories)

        for (const [player, emojiList] of categories) {
          if (emojis.every(emoji => emojiList.includes(emoji))) {
            return player === 'player1' ? 'Player 1' : 'Player 2'
          }
        }
      }
    }
    return null
  }

const handleWinnerCounting = (board) => {
  const winner = calculateWinner(board);
  if (winner && !winnerCounted) {
    if (winner === 'Player 1') {
      setPlayer1Wins((count) => count + 1);
    } else if (winner === 'Player 2') {
      setPlayer2Wins((count) => count + 1);
    }
    setWinnerCounted(true);
  }
};


useEffect(() => {
  handleWinnerCounting(board);
}, [board]);


  const handleClick = (index) => {
    const winner = calculateWinner(board)
    if (winner || board[index]) return

    const currentPlayer = isXNext ? 'player1' : 'player2'
    const emojiList = emojiCategories[currentPlayer] || []
    const symbol = emojiList[Math.floor(Math.random() * emojiList.length)]
    const moves = [...playerMoves[currentPlayer]]
    const newBoard = [...board]
    
    clickSound.current.currentTime = 0;
    clickSound.current.play();
    if (moves.length === 3) {
      const oldest = moves.shift()
      if (oldest === index) return
      newBoard[oldest] = null
    }
    newBoard[index] = symbol
    moves.push(index)
    setBoard(newBoard)
    setPlayerMoves(prev => ({ ...prev, [currentPlayer]: moves }))
    setIsXNext(!isXNext)
  }
  const getStatusMessage = () => {
    const winner = calculateWinner(board)
    if (winner) return `Winner: ${winner}`
    return `Turn : ${isXNext ? 'Player 1' : 'Player 2'}`
  }
  const resetGame = () => {
    setBoard(initialBoard())
    setIsXNext(true)
    setPlayerMoves({ player1: [], player2: [] })
    setWinnerCounted(false);
  }
  return {board,handleClick,calculateWinner,resetGame,getStatusMessage,handleWinnerCounting,player1winscount,player2winscount}
}

export default useTicTacBlink
