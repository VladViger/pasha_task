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