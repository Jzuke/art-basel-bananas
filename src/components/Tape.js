import React from 'react'

const Tape = (props) => {
  const MOBILE_SCALE = 0.6; // Match banana scaling

  return (
    <>
      <div 
        className="show-desktop line" 
        style={{
          top:`${props.position.y + 85}px`, 
          left: `${props.position.x - 28}px`
        }}
      />
      <div 
        className="show-mobile line" 
        style={{
          top:`${props.position.y + (35 * MOBILE_SCALE)}px`, 
          left: `${props.position.x - (18 * MOBILE_SCALE)}px`,
          transform: `scale(${MOBILE_SCALE}) rotate(-35deg)`,
          transformOrigin: 'left'
        }}
      />
    </>
  )
}

export { Tape as default }