import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import routes from '../routes';
import { receiveEntries, logOut } from '../actions';
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.less';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isConfirm: true
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn && !this.props.loggedIn) {
			this.props.initEntriesList();
		}
	}

	handleLogOut() {
		if (!this.props.loggedIn) return;
		this.props.logOut();
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
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: !!state.currentUserId,
	userName: function() {
		const currentUser = state.entries.filter( item => item.id === state.currentUserId )[0];
		return currentUser ? currentUser.name : null;
	}()
});

const mapDispatchToProps = {
	initEntriesList: receiveEntries,
	logOut
};

let VisibleApp = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);

export default VisibleApp;