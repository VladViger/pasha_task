const ADDRESS = 'pashaTaskDB';
const _getData = address => JSON.parse( localStorage.getItem(address) );

export function getItems() {
	let data = _getData(ADDRESS);
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
	let data = _getData(ADDRESS);
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

export function isItemExist(email) {
	let data = _getData(ADDRESS);
	if (!data || !data.usersData) return;

	for (let key in data.usersData) {
		if (data.usersData[key].email === email) {
			return true;
		}
	}
	return;
}