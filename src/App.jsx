import './App.css'
import Game from './components/game'
import {Routes, Route} from 'react-router-dom'
import ChooseCategory from './components/choose-category'
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<ChooseCategory/>} />
      <Route path="/choose-category" element={<ChooseCategory/>} />
      <Route path="/game" element={<Game/>} />
      </Routes>
    </div>
  )
}

export default App
