import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import boxes from './components/boxes'
import Box from './components/box'

function App() {

  const [squares,setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }
  const squareElements = squares.map(square => (
    <Box 
        key={square.id}
        on={square.on} 
        handleClick={() => toggle(square.id)}
    />
))

  return (
      <>
        {squareElements}
      </>
  )
}

export default App
