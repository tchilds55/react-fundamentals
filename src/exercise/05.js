// Styling
// http://localhost:3000/isolated/exercise/05.js
import * as React from 'react'
import '../box-styles.css'

const smallBox = (
  <Box size="small" style={{background: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{background: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{background: 'orange'}}>
    large orange box
  </Box>
)

function Box({size, style, ...otherProps}) {
  const boxSize = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${boxSize}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
