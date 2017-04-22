export const LOG_IN = 'LOG_IN';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const DEL_ENTRY = 'DEL_ENTRY';

export function receiveEntries() {
	let entries = [
		{
			id: 'id1',
			name: 'Vasia',
			email: 'vasia@mail.com',
			dateOfBirth: 220305
		}
	];
	let action = {
		type: RECEIVE_ENTRIES,
		entries
	};
	return action;
}

export const logIn = (id) => ({
	type: LOG_IN,
	id
});

export const addEntry = (name, email, dateOfBirth) => ({
	type: ADD_ENTRY,
	name,
	email,
	dateOfBirth,
	id: Math.random().toString(36).substring(2)
});

export const editEntry = (id, name, email, dateOfBirth) => ({
	type: EDIT_ENTRY,
	id,
	name,
	email,
	dateOfBirth
});

export const deleteEntry = (id) => ({
	type: DEL_ENTRY,
	id
});