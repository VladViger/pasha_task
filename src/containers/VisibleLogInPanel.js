import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn, receiveEntries } from '../actions';
import LogInPanel from '../components/LogInPanel';

const mapStateToProps = (state) => ({
	loggedIn: !!state.currentUserId
});

const mapDispatchToProps = {
	handleLogIn: logIn,
	initEntriesList: receiveEntries
};

let VisibleLogInPanel = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(LogInPanel)
);

export default VisibleLogInPanel;