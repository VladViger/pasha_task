import validate from 'validate.js';
import moment from 'moment';

import LocalStorageHelper from './LocalStorageHelper';

class ValidationHelper {
	static _setCustomValidators() {
		validate.validators.userExists = (value, options, key, attributes) => {
			const isExist = LocalStorageHelper.isItemExist(value);
			if (isExist) {
				return options.message || "^Item already exists";
			}
		};
		validate.extend(validate.validators.datetime, {
			parse: (value, options) => +moment(value, options.format),
			format: (value, options) => moment(value).format(options.format)
		});
	}

	static _setCustomMessages() {
		validate.validators.presence.options = { message: "^This field can't be empty" };
		validate.validators.email.options = { message: "^Invalid email address" };
		validate.validators.userExists.options = { message: "^Such email already exists" };
		validate.validators.datetime.options = { message: "^Select allowed date from the list" };
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