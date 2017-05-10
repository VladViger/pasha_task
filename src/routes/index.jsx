import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Entries from '../containers/VisibleEntries';
import LogInPanel from '../containers/VisibleLogInPanel';
import RegisterPanel from '../containers/VisibleRegisterPanel';
import EntryCreator from '../containers/VisibleEntryCreator';


const routes = (isLoggedIn) => (
	<div className="content">

		<Route exact path="/" render={() => (
			!isLoggedIn ? <Redirect to="/login" /> : <Entries />
		)} />

		<Route path="/login" render={() => (
			!!isLoggedIn ? <Redirect to="/" /> : <LogInPanel />
		)} />

		<Route path="/register" render={() => (
			!!isLoggedIn ? <Redirect to="/" /> : <RegisterPanel />
		)} />

		<Route path="/create" render={() => (
			!isLoggedIn ? <Redirect to="/login" /> : <EntryCreator />
		)} />

	</div>
);

export default routes;