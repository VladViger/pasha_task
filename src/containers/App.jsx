import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import routes from '../routes';
import { receiveEntries, logOut } from '../actions';
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn && !this.props.loggedIn) {
			this.props.initEntriesList();
		}
	}

	handleLogOut() {
		if (!this.props.loggedIn) return;
		confirm('Are you sure?') ? this.props.logOut() : false;
	}

	render() {
		return (
			<div className="layout">
				<HeaderApp
					userName={this.props.userName}
					handleLogOut={() => this.handleLogOut()}
				/>
				{ routes(this.props.loggedIn) }
				<FooterApp />
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
	loggedIn: !!state.currentUserId,
	userName: function() {
		const currentUser = state.entries.filter( item => item.id === state.currentUserId )[0];
		return currentUser ? currentUser.name : 'Guest';
	}()
});

const mapDispatchToProps = {
	initEntriesList: receiveEntries,
	logOut: logOut
};

let VisibleApp = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);

export default VisibleApp;