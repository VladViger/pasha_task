import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from '../components/App';
import VisibleEntries from '../containers/VisibleEntries';
import VisibleLogInPanel from '../containers/VisibleLogInPanel';
import RegisterPanel from '../containers/RegisterPanel';
import EntryCreator from '../containers/EntryCreator';

/*
	*see <Redirect> path in components render function
*/

const rootRouter = (
	<App>
		<Route exact path="/" component={VisibleEntries} />
		<Route path="/login" component={VisibleLogInPanel} />
		<Route path="/register" component={RegisterPanel} />
		<Route path="/create" component={EntryCreator} />

		<hr />
		<ul>
			<li><Link to="/">index</Link></li>
			<li><Link to="/create">create</Link></li>
			<li><Link to="/login">login</Link></li>
			<li><Link to="/register">register</Link></li>
		</ul>
	</App>
);

export default rootRouter;