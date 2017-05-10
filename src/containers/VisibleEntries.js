import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteEntry } from '../actions';
import EntriesList from '../components/EntriesList';

const mapStateToProps = (state) => ({
	entries: state.entries.filter( item => item.id !== state.currentUserId )
});

const mapDispatchToProps = {
	handleDelEntry: deleteEntry
};

let VisibleEntries = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(EntriesList)
);

export default VisibleEntries;