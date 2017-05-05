
export default class LocalStorageHelper {

    static _prefix = 'pashaTaskDB';
    static _data   = [];

    static _combineKey(key = '') {
        return `${LocalStorageHelper._prefix}:${key}`;
    }

    static init() {
        const usersKey = LocalStorageHelper._combineKey('users');
        const data     = window.localStorage.getItem(usersKey);

        LocalStorageHelper._data = data ? JSON.parse(data) : [];
    }

    static getData() {
        return LocalStorageHelper._data;
    }

}
