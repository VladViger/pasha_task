import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editEntry } from '../actions';
import EntryEditor from '../components/EntryEditor';

const mapStateToProps = (state, ownProps) => ({
	...state.entries.filter( item => item.id === ownProps.match.params.id )[0]
});

const mapDispatchToProps = {
	handleEdit: editEntry
};

let VisibleEntryEditor = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(EntryEditor)
);

export default VisibleEntryEditor;