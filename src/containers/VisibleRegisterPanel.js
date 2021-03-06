import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addEntry } from '../actions';
import RegisterPanel from '../components/RegisterPanel';

const mapDispatchToProps = {
	handleRegister: addEntry
};

let VisibleRegisterPanel = withRouter(
	connect(
		null,
		mapDispatchToProps
	)(RegisterPanel)
);

export default VisibleRegisterPanel;