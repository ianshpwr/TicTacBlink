import './App.css'
import Game from './components/game'
import {Routes, Route} from 'react-router-dom'
import ChooseCategory from './components/choose-category'
import LandingPage from './components/landingpage'
import Help from './components/help'
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/choose-category" element={<ChooseCategory/>} />
      <Route path="/game" element={<Game/>} />
      </Routes>
    </div>
  )
}

export default App
