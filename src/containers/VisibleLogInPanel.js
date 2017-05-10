import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logIn } from '../actions';
import LogInPanel from '../components/LogInPanel';

const mapDispatchToProps = {
	handleLogIn: logIn
};

let VisibleLogInPanel = withRouter(
	connect(
		null,
		mapDispatchToProps
	)(LogInPanel)
);

export default VisibleLogInPanel;