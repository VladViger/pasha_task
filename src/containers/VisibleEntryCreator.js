import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addEntry } from '../actions';
import EntryCreator from '../components/EntryCreator';

const mapDispatchToProps = {
	handleCreate: addEntry
};

let VisibleEntryCreator = withRouter(
	connect(
		null,
		mapDispatchToProps
	)(EntryCreator)
);

export default VisibleEntryCreator;