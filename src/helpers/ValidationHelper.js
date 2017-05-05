import validate from 'validate.js';

import LocalStorageHelper from './LocalStorageHelper';

export default class ValidationHelper {

    static init() {
        validate.validators.userExists = (value, options, key, attributes) => {
            const users = LocalStorageHelper.getData();
            if (!users.length) {
                return options.message;
            }
            // @todo: get users, iterate them and find existent by email & password pair
        };
    }

    static validate(data, rules) {
        const errors = validate(data, rules);
        if (errors) {
            for (const prop in errors) {
                errors[prop] = errors[prop][0]; // get 1st error
            }
        }

        return errors;
    }

}