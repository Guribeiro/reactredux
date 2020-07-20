import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';

import Header from './components/Header'
import Routes from './routes';


// import { Container } from './styles';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyled />
			<Header />
			<Routes />
		</BrowserRouter>
	)
}
export default App;
