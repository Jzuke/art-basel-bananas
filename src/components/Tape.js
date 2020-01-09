import React from 'react'

const Tape = (props) => {

	return (
		<>
			<div className="show-desktop line" style={{top:`${props.position.y + 85}px`, left: `${props.position.x - 28}px`}}></div>
			<div className="show-mobile line" style={{top:`${props.position.y + 20}px`, left: `${props.position.x - 48}px`}}></div>
		</>
	)
}

export { Tape as default }