import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import Header from './components/Header'
import GlobalStyled from './styles/global';

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
