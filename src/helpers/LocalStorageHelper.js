class LocalStorageHelper {
	static get _address() {
		return 'pashaTaskDB';
	}

	static get _data() {
		const address = LocalStorageHelper._address;
		return JSON.parse( window.localStorage.getItem(address) );
	}

	static _setData(newData) {
		const address = LocalStorageHelper._address;
		window.localStorage.setItem(address, JSON.stringify(newData));
	}

	static getItems() {
		let data = LocalStorageHelper._data;
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

	static authorization(email, pass) {
		let data = LocalStorageHelper._data;
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

	static isItemExist(email) {
		let data = LocalStorageHelper._data;
		if (!data || !data.usersData) return false;

		for (let key in data.usersData) {
			if (data.usersData[key].email === email) {
				return true;
			}
		}
		return false;
	}

	static addItem(item, pass) {
		let newData = LocalStorageHelper._data || {usersData: {}, usersPass: {}};
		newData.usersData[item.id] = item;
		if (pass) newData.usersPass[item.id] = pass;
		LocalStorageHelper._setData(newData);
	}
}

export default LocalStorageHelper;