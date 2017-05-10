import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

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
				presence: true
			},
			pass: {
				presence: true,
				length: { minimum: 4 }
			},
			repass: {
				presence: true,
				equality: {
					attribute: 'pass',
					message: "^Confirm password is not equal to password"
				}
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

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		const {
			name: nameError,
			email: emailError,
			dateOfBirth: dateError
		} = this.state.errors;

		return (
			<form action="#" onSubmit={ (e) => this.handleSubmit(e) }>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						autoFocus
					/>
					{ nameError ? <div>{nameError}</div> : false }
					<br />
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						id="email"
						name="email"
					/>
					{ emailError ? <div>{emailError}</div> : false }
					<br />
					<label htmlFor="date">Date of birth:</label>
					<DatePicker
						id="date"
						dateFormat={this._dateFormat}
						selected={this.state.date}
						locale="en-gb"
						maxDate={ moment() }
						onChange={ (d) => this.handleChangeDate(d) }
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						placeholderText="Click to select a date"
					/>
					{ dateError ? <div>{dateError}</div> : false }
					<br />
					<button type="submit">Submit</button>
			</form>
		);
	}
}

export default ClassCreateEntry;