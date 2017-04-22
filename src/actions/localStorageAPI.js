const ADDRESS = 'pashaTaskDB';

function getItems() {
	let items = JSON.parse( localStorage.getItem(ADDRESS) );
	if (!items) return [];
	
}