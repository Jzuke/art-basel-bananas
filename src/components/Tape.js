import React from 'react'

const Tape = (props) => {

	return (
		<>
			<div className="line" style={{top:`${props.position.y + 65}px`, left: `${props.position.x - 35}px`}}></div>
		</>
	)
}

export { Tape as default }