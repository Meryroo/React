import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [test, setTest] = useState("")

  const handleInput = (ev) => {
setTest(ev.target.value)
  }

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Escribe tu nombre" onChange={handleInput}/>
        <h1>Hola {test}</h1>
        </div>
    </div>
  )
}

export default App
