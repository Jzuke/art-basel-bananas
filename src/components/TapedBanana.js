import React from 'react'
import Banana from './Banana'
import Tape from './Tape'

const TapedBanana = (props) => {

	return (
		<>
			<Tape position={props.position}/>
			<Banana position={props.position}/>
		</>
	)
}

export { TapedBanana as default }