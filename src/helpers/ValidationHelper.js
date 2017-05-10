import validate from 'validate.js';

import LocalStorageHelper from './LocalStorageHelper';

class ValidationHelper {
	static _setCustomValidators() {
		validate.validators.userExists = (value, options, key, attributes) => {
			const isExist = LocalStorageHelper.isItemExist(value);
			if (isExist) {
				return options.message || "^Item already exists";
			}
		};
	}

	static _setCustomMessages() {
		validate.validators.presence.options = { message: "^This field can't be empty" };
		validate.validators.email.options = { message: "^Invalid email address" };
		validate.validators.userExists.options = { message: "^Such email already exists" };
	}

	static init() {
		ValidationHelper._setCustomValidators();
		ValidationHelper._setCustomMessages();
	}

	static validate(data, rules) {
		const errors = validate(data, rules);
		if (errors) {
			for (const prop in errors) {
				errors[prop] = errors[prop][0];
			}
		}
		return errors;
	}
}

ValidationHelper.init();
export default ValidationHelper;