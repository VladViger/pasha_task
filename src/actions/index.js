import * as LS_API from './localStorageAPI';

/*
-- action types --
*/
export const LOG_IN = 'LOG_IN';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const CHECK_ENTRY_EXISTENCE = 'CHECK_ENTRY_EXISTENCE';
export const ADD_ENTRY = 'ADD_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const DEL_ENTRY = 'DEL_ENTRY';
export const REGISTRATION = 'REGISTRATION';

/*
-- action creators --
*/
export function logIn(email, pass) {
	let id = LS_API.authorization(email, pass) || null;
	let action = {
		type: LOG_IN,
		id
	};
	return action;
}

export function receiveEntries() {
	let entries = LS_API.getItems();
	let action = {
		type: RECEIVE_ENTRIES,
		entries
	};
	return action;
}

export function checkEntryExistence(email) {
	let action = {
		type: CHECK_ENTRY_EXISTENCE,
		existence: false
	};
	if ( LS_API.isItemExist(email) ) action.existence = true;
	return action;
}



export function addEntry(name, email, dateOfBirth) {
	let action = {
		type: ADD_ENTRY,
		name,
		email,
		dateOfBirth,
		id: 'id' + Math.random().toString(36).substring(2)
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

/*

export function registration(name, email, dateOfBirth, pass) {
	let newEntry = {
		name,
		email,
		dateOfBirth,
		pass,
		id: 'id' + Math.random().toString(36).substring(2)
	};
	console.log(newEntry);
	LS_API.registration(newEntry);
	let action = {
		type: REGISTRATION,
		...newEntry
	}
	return action;
}

*/