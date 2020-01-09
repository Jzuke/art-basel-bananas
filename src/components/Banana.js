import React from 'react'

const Banana = (props) => { 
return (
	<div className='svg-container' style={{top:`${props.position.y - 18}px`, left: `${props.position.x - 8}px`}}>
		<svg
		data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="64.8067" height="106.433" viewBox="0 0 64.8067 106.433">
		<defs>
		<filter id="dropshadow" height="130%">
		  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
		  <feOffset dx="2" dy="2" result="offsetblur"/> 
		  <feComponentTransfer>
  	  	<feFuncA type="linear" slope="0.5"/>
  		</feComponentTransfer>
	 	 	<feMerge> 
	    	<feMergeNode/> 
	    	<feMergeNode in="SourceGraphic"/>
  		</feMerge>
		</filter>
		
		<style>
		{`.cls-1{fill:#f8bf3c;}.cls-2{fill:#e8b920;}.cls-3{fill:#3c2711;}`}
		</style></defs>
		
		<path filter="url(#dropshadow)" className="cls-1" d="M76.1183,12.5236l-.0544.0543c-.6523.598-12.6656,11.5785-12.9918,15.3837-.38,3.9138-9.8933,28.3754,2.5549,44.7919,10.9805,14.4595,28.158,28.158,32.0719,31.2021a1.1965,1.1965,0,0,1,.3261,1.5221l-1.25,2.283a1.2519,1.2519,0,0,1-1.6308.5436c-5.0554-2.4461-25.3857-14.079-30.0606-21.3087a1.1851,1.1851,0,0,0-.1631-.2718c-1.4133-2.12-22.2329-26.4186-12.5026-54.0874.0544-.1087.1631-.2174.1631-.3261,1.25-4.4575,17.3406-18.1559,21.5262-22.3416a1.2432,1.2432,0,0,1,1.9026.2174l.4349.7067A1.3308,1.3308,0,0,1,76.1183,12.5236Z" transform="translate(-34.5243 -7.0354)"/><path className="cls-2" d="M75.9552,10.2405,74.0527,7.6313l-5.0554,4.2943s-7.1211,3.8052-13.8073,7.719A41.6217,41.6217,0,0,0,34.5879,57.696a9.6978,9.6978,0,0,0,.1088,1.25c1.7938,23.7,28.7559,50.5539,43.1611,53s18.3734.9241,18.3734.9241l.9241-3.0985-18.7-11.85s-15.4379-9.241-25.2769-34.8441S68.9973,15.2415,68.9973,15.2415Z" transform="translate(-34.5243 -7.0354)"/><path className="cls-3" d="M74.3245,9.3164a1.7685,1.7685,0,0,1,.6523.87c.2718.7067.8153,1.7395,1.5764,1.8482,1.1415.1631,1.359-3.2615,1.359-3.2615L75.3573,7.142a.87.87,0,0,0-1.25.5436C73.9983,8.1205,73.7265,8.8815,74.3245,9.3164Zm24.081,95.5089c2.4462-.4892-.4892,8.1539-2.6636,8.6431l-.5435-5.11Z" transform="translate(-34.5243 -7.0354)"/></svg>		
	</div>
	)
}

export { Banana as default }