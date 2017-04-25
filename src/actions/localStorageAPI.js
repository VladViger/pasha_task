const ADDRESS = 'pashaTaskDB';

export function getItems() {
	let data = JSON.parse( localStorage.getItem(ADDRESS) );
	if (data && data.usersData) data = data.usersData;

	let items = [];
	for (let key in data) {
		items.push({
			id: key,
			...data[key]
		});
	}
	return items;
}

export function authorization(email, pass) {
	let data = JSON.parse( localStorage.getItem(ADDRESS) );
	if (!data || !data.usersData || !data.usersPass) return;

	let id;
	for (let key in data.usersData) {
		if (data.usersData[key].email === email) {
			id = key;
			break;
		}
	}
	if (!data.usersPass[id]) return;
	return (data.usersPass[id] === pass) ? id : null;
}