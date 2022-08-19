import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {

  const [board, setBoard] = useState(["🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊"])

  const handleGamePlay = (index) => {
    alert(index)
  }

    return(
      <>
        <h1>Under the Sea</h1>
        <div className="boardgame">
            {board.map((value, index) => {
              return(
                <Square value={value} index={index} handleGamePlay={handleGamePlay} />
            )})}
          </div>
      </>
    )
  }

export default App
