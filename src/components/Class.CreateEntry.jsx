import React from 'react';
import moment from 'moment';

class ClassCreateEntry extends React.Component {
	constructor(props) {
		super(props);
		this._validationRules = {
			email: {
				presence: true,
				email: true,
				userExists: true
			},
			name: {
				presence: true
			},
			dateOfBirth: {
				// DatePicker return valid 'moment' object or null
				// add this: "^Select allowed date from the list"
				presence: true
			}
		};
		this._dateFormat = 'MM/DD/YYYY';
		this.state = {
			date: null,
			errors: {}
		}
	}

	handleChangeDate(date) {
		this.setState({ date: date });
	}

	getDateString() {
		let date = '';
		if (this.state.date) {
			date = moment(this.state.date).format(this._dateFormat);
		}
		return date;
	}

	comeBack() {
		// let another events finish
		setTimeout(() => { this.props.history.goBack() }, 0);
	}
}

export default ClassCreateEntry;