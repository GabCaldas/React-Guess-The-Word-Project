import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StartingScreen from '../components/StartingScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StartingScreen />
    </div>
  )
}

export default App
