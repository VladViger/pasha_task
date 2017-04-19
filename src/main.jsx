import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Router from './routes/Router';

const store = createStore(reducer);

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router />
		</Provider>,
		document.getElementById('root')
	);
};

renderApp();

if (module.hot) {
	module.hot.accept('./routes/Router', renderApp);
}