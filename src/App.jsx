import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import boxes from './components/boxes'
import Box from './components/box'

function App() {

  const [squares,setSquares] = React.useState(boxes);

  const boxElements = squares.map(square => (
    <Box key={square.id} on={square.on} />
  ))

  return (
      <>
        {boxElements}
      </>
  )
}

export default App
