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

	static init() {
		if ( !LocalStorageHelper._data ) {
			const newStorage = { usersData: {}, usersPass: {} };
			LocalStorageHelper._setData(newStorage);
		}
	}

	static getItems() {
		let data = LocalStorageHelper._data;
		data = data.usersData;

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
		for (let key in data.usersData) {
			if (data.usersData[key].email === email) {
				return true;
			}
		}
		return false;
	}

	static addItem(data, pass) {
		let newData = LocalStorageHelper._data;
		newData.usersData[data.id] = {
			name: data.name,
			email: data.email,
			dateOfBirth: data.dateOfBirth
		};

		if (pass) newData.usersPass[data.id] = pass;
		LocalStorageHelper._setData(newData);
	}

	static deleteItem(id) {
		let newData = LocalStorageHelper._data;
		if (!newData) return;
		if (newData.usersData) delete newData.usersData[id];
		if (newData.usersPass) delete newData.usersPass[id];
		LocalStorageHelper._setData(newData);
	}
}

LocalStorageHelper.init();
export default LocalStorageHelper;