import React, { useState, useEffect } from 'react'
import numeral from 'numeral'
import Div100vh from 'react-div-100vh'
import TapedBanana from './TapedBanana'

const BananaApp = () => {
	const [netWorth, setNetWorth] = useState(0)
	const [tapedBananas, setTapedBananas] = useState([])
	
	useEffect(() => {

		const handleMouseClick = (e) => {
			setTapedBananas([...tapedBananas, { x:e.clientX, y:e.clientY }])
			setNetWorth(netWorth + 120000)	
		}
		document.addEventListener('click', handleMouseClick)

		return () => {
			document.removeEventListener('click', handleMouseClick)
		}
		
	}, [tapedBananas, netWorth]) 

	return (
		<Div100vh>
		<header className="header no-select"><a className="remove-decoration" href="https://www.jakezuke.me" rel="noopener noreferrer" target="_blank">Created by Jake Zuke</a></header>
		{tapedBananas.map((item, index) => <TapedBanana key={index} position={tapedBananas[index]} />)}
			<h4 className="show-desktop steps no-select">Step 1: Click Anywhere</h4>
			<h4 className="show-mobile steps no-select">Step 1: Tap Anywhere</h4>
			<h4 className="steps no-select">Step 2: Profit</h4>
			<h1 className='net-worth no-select'>Your net worth: {numeral(netWorth).format('$0,0')}</h1>
		</Div100vh>
	)
}

export { BananaApp as default }