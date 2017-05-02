import { CHECK_ENTRY_EXISTENCE } from '../actions';

function allowNewEntry(state = true, action) {
	switch (action.type) {
		case CHECK_ENTRY_EXISTENCE:
			return !action.existence;
		default:
			return state;
	}
}

export default allowNewEntry;