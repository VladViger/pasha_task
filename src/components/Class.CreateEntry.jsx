import React from 'react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ClassCreateEntry extends React.Component {
	constructor(props) {
		super(props);
		this._dateFormat = 'MM/DD/YYYY';
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
				datetime: {
					format: this._dateFormat
				},
				presence: true
			}
		};
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