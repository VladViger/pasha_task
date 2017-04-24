import { RECEIVE_ENTRIES, ADD_ENTRY, EDIT_ENTRY, DEL_ENTRY } from '../actions';

function createEntrie(action) {
	let newEntie = {
		id: action.id,
		name: action.name,
		email: action.email,
		dateOfBirth: action.dateOfBirth
	};
	return newEntie;
}

function entries(state = [], action) {
	switch (action.type) {
		case RECEIVE_ENTRIES:
			return (state.length) ? state : [ ...action.entries ];
		case ADD_ENTRY:
			return [
				...state,
				createEntrie(action)
			];
		case EDIT_ENTRY:
			return state.map(item => 
				(item.id === action.id) ? createEntrie(action) : item
			);
		case DEL_ENTRY:
			return state.filter( item => item.id !== action.id );
		default:
			return state;
	}
}

export default entries;