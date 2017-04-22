import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from '../containers/App';
import LogInPanel from '../components/LogInPanel';
import RegisterPanel from '../components/RegisterPanel';

const rootRouter = (
	<div>
		<Route exact path="/" component={App}>
			
		</Route>
		<Route path="/login" component={LogInPanel} />
		<Route path="/register" component={RegisterPanel} />

		<hr />
		<ul>
			<li><Link to="/">index</Link></li>
			<li><Link to="/login">login</Link></li>
			<li><Link to="/register">register</Link></li>
		</ul>
	</div>
);

export default rootRouter;