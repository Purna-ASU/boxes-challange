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
    console.log(id)
  }
  const squareElements = squares.map(square => (
    <Box 
        key={square.id} 
        id={square.id}
        on={square.on} 
        handleClick={toggle}
    />
))

  return (
      <>
        {squareElements}
      </>
  )
}

export default App
