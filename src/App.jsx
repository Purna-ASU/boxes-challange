import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import boxes from './components/boxes'

function App() {

  const [squares,setSquares] = React.useState(boxes);

  const boxElements = squares.map(square => (
    <div className='box' key={square.id}></div>
  ))

  return (
      <>
        {boxElements}
      </>
  )
}

export default App
