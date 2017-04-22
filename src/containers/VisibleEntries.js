import { connect } from 'react-redux';
import { deleteEntry } from '../actions';
import EntriesList from '../components/EntriesList';

const mapStateToProps = (state) => ({
	entries: state.entries.filter( item => item.id !== state.currentUserId )
});

const mapDispatchToProps = {
	handleDelEntry: deleteEntry
};

const VisibleEntries = connect(
	mapStateToProps,
	mapDispatchToProps
)(EntriesList);

export default VisibleEntries;