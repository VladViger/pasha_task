import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import {
	LazyEntries,
	LazyLogInPanel,
	LazyRegisterPanel,
	LazyEntryCreator,
	LazyEntryEditor
} from '../lazyLoader/LazyLoadComponentsMaker';


const routes = (isLoggedIn) => (
	<div className="content">
		{isLoggedIn ? (
			<Switch>
				<Route exact path="/" component={LazyEntries} />
				<Route exact path="/create" component={LazyEntryCreator} />
				<Route exact path="/:id" component={LazyEntryEditor} />
				<Route exact path="/pages/:page" component={LazyEntries} />
				<Redirect to="/" />
				<Route component={LazyEntries} />
			</Switch>
		) : (
			<Switch>
				<Route exact path="/login" component={LazyLogInPanel} />
				<Route exact path="/register" component={LazyRegisterPanel} />
				<Redirect to="/login" />
				<Route component={LazyLogInPanel} />
			</Switch>
		)}
	</div>
);

export default routes;