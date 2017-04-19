import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../components/App';

const browserHistory = createBrowserHistory();

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>
);