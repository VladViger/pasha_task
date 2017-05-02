import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkEntryExistence } from '../actions';
import RegisterPanel from '../components/RegisterPanel';

const mapStateToProps = (state) => ({
	loggedIn: !!state.currentUserId,
	allowNewEntry: state.allowNewEntry
});

const mapDispatchToProps = {
	checkExistence: checkEntryExistence
};

let VisibleRegisterPanel = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(RegisterPanel)
);

export default VisibleRegisterPanel