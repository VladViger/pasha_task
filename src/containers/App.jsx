import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import routes from '../routes';
import { receiveEntries } from '../actions';

class App extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn && !this.props.loggedIn) {
			this.props.initEntriesList();
		}
	}

	render() {
		return (
			<div className="layout">
				{ routes(this.props.loggedIn) }
				<hr />
				<ul>
					<li><Link to="/">index</Link></li>
					<li><Link to="/login">login</Link></li>
					<li><Link to="/register">register</Link></li>
					<li><Link to="/create">create</Link></li>
					<li><Link to="/notfoundid">not found id</Link></li>
					<li><Link to="/notfound/path">not found path</Link></li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: !!state.currentUserId
});

const mapDispatchToProps = {
	initEntriesList: receiveEntries
};

let VisibleApp = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);

export default VisibleApp;