import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from '../components/App';
import Entries from '../containers/VisibleEntries';
import LogInPanel from '../containers/VisibleLogInPanel';
import RegisterPanel from '../containers/VisibleRegisterPanel';
import EntryCreator from '../containers/EntryCreator';

/*
	*see <Redirect> path in components render function
*/

const rootRouter = (
	<App>
		<Route exact path="/" component={Entries} />
		<Route path="/login" component={LogInPanel} />
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