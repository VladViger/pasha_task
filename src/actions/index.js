import LS_API from '../helpers/LocalStorageHelper';

/*
-- action types --
*/
export const LOG_IN = 'LOG_IN';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const DEL_ENTRY = 'DEL_ENTRY';

/*
-- action creators --
*/
export function logIn(email, pass) {
	const id = LS_API.authorization(email, pass) || null;
	const action = {
		type: LOG_IN,
		id
	};
	return action;
}

export function receiveEntries() {
	const entries = LS_API.getItems();
	const action = {
		type: RECEIVE_ENTRIES,
		entries
	};
	return action;
}

export function addEntry(newEntryData) {
	const id = 'id' + Math.random().toString(36).substring(2);
	const { name, email, dateOfBirth } = newEntryData;

	const entry = { id, name, email, dateOfBirth };
	LS_API.addItem(entry, newEntryData.pass);

	const action = {
		type: ADD_ENTRY,
		...entry
	};
	return action;
}




export function editEntry(id, name, email, dateOfBirth) {
	let action = {
		type: EDIT_ENTRY,
		id,
		name,
		email,
		dateOfBirth
	};
	return action;
}

export function deleteEntry(id) {
	let action = {
		type: DEL_ENTRY,
		id
	};
	return action;
}