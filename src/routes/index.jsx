import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import App from '../components/App';

import VisibleEntries from '../containers/VisibleEntries';
import EntryCreator from '../containers/EntryCreator';
import LogInPanel from '../components/LogInPanel';
import RegisterPanel from '../components/RegisterPanel';

const rootRouter = (
	<App>
		<Route exact path="/" component={VisibleEntries} />
		<Route path="/create" component={EntryCreator} />
		<Route path="/login" component={LogInPanel} />
		<Route path="/register" component={RegisterPanel} />

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