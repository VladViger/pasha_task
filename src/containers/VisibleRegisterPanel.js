import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addEntry } from '../actions';
import RegisterPanel from '../components/RegisterPanel';

const mapStateToProps = (state) => ({
	loggedIn: !!state.currentUserId
});

const mapDispatchToProps = {
	handleRegister: addEntry
};

let VisibleRegisterPanel = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(RegisterPanel)
);

export default VisibleRegisterPanel