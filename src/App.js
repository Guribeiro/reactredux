import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './styles/global';

import Header from './components/Header'
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './store';


// import { Container } from './styles';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyled />
				<Header />
				<Routes />
			</BrowserRouter>
		</Provider>
	)
}
export default App;
