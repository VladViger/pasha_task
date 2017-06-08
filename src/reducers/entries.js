import { RECEIVE_ENTRIES, ADD_ENTRY, EDIT_ENTRY, DEL_ENTRY } from '../actions';

function getEntrie(action) {
	return {
		id: action.id,
		name: action.name,
		email: action.email,
		dateOfBirth: action.dateOfBirth
	}
}

function entries(state = [], action) {
	switch (action.type) {
		case RECEIVE_ENTRIES:
			return [ ...action.entries ];
		case ADD_ENTRY:
			return [
				...state,
				getEntrie(action)
			];
		case EDIT_ENTRY:
			return state.map(item => 
				(item.id === action.id) ? getEntrie(action) : item
			);
		case DEL_ENTRY:
			return state.filter( item => item.id !== action.id );
		default:
			return state;
	}
}

export default entries;