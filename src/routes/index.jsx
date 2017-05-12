import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Entries from '../containers/VisibleEntries';
import LogInPanel from '../containers/VisibleLogInPanel';
import RegisterPanel from '../containers/VisibleRegisterPanel';
import EntryCreator from '../containers/VisibleEntryCreator';
import EntryEditor from '../containers/VisibleEntryEditor';


const routes = (isLoggedIn) => (
	<div className="content">
		{isLoggedIn ? (
			<Switch>
				<Route exact path="/" component={Entries} />
				<Route exact path="/create" component={EntryCreator} />
				<Route exact path="/:id" component={EntryEditor} />
				<Route exact path="/pages/:page" component={Entries} />
				<Redirect to="/" />
				<Route component={Entries} />
			</Switch>
		) : (
			<Switch>
				<Route exact path="/login" component={LogInPanel} />
				<Route exact path="/register" component={RegisterPanel} />
				<Redirect to="/login" />
				<Route component={LogInPanel} />
			</Switch>
		)}
	</div>
);

export default routes;