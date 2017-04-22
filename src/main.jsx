import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';
import rootRouter from './routes';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(rootReducer, applyMiddleware(middleware));

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				{ rootRouter }
			</ConnectedRouter>
		</Provider>,
		document.getElementById('root')
	);
};

renderApp();

if (module.hot) {
	module.hot.accept('./routes', renderApp);
}