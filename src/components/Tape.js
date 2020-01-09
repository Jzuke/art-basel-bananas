import React from 'react'

const Tape = (props) => {

	return (
		<>
			<div className="show-desktop line" style={{top:`${props.position.y + 75}px`, left: `${props.position.x - 35}px`}}></div>
			<div className="show-mobile line" style={{top:`${props.position.y + 5}px`, left: `${props.position.x - 45}px`}}></div>
		</>
	)
}

export { Tape as default }