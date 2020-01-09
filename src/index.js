import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga'
import './styles/styles.scss'
import BananaApp from './components/BananaApp'

ReactGA.initialize('UA-92327390-5')
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<BananaApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
