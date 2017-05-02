import React from 'react';
import { Redirect } from 'react-router-dom';
import validate from 'validate.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class RegisterPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: null,
			validationError: {
				isExist: false,
				name: false,
				email: false,
				date: false,
				pass: false
			}
		};
	}

	handleChangeDate(date) {
		this.setState({ date: moment(date).format('MM/DD/YYYY') });
	}

	validation(item) {
		let error = {};

		this.props.checkExistence(item.email);
		if (!this.props.allowNewEntry) {
			error.isExist = true;
		}
		if ( validate.single(item.email, {presence: true, email: true}) ) {
			error.email = true;
		}
		if ( validate.single(item.name, {presence: true}) ) {
			name.email = true;
		}


		
		console.log(error);
	}

	handleSubmit(e) {
		e.preventDefault();
		let newEntry = {
			name: e.target.name.value,
			email: e.target.email.value.toLowerCase(),
			dateOfBirth: this.state.date,
			pass: e.target.pass.value,
			repass: e.target.repass.value
		};
		this.validation(newEntry);
		//console.log(newEntry);
	}

	render() {
		return (this.props.loggedIn) ? (
			<Redirect to="/" />
		) : (
			<div className="register-panel">
				<form action="#" onSubmit={ (e) => this.handleSubmit(e) }>
					<label htmlFor="reg-name">Name:</label>
					<input
						type="text"
						id="reg-name"
						name="name"
						required
					/>
					<br />
					<label htmlFor="reg-email">Email:</label>
					<input
						type="text"
						id="reg-email"
						name="email"
						autoFocus
						required
					/>
					<br />
					<label htmlFor="reg-date">Date of birth:</label>
					<DatePicker
						dateFormat="MM/DD/YYYY"
						locale="en-gb"
						maxDate={ moment() }
						onChange={ (d) => this.handleChangeDate(d) }
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						placeholderText="Click to select a date"
					/>
					<br />
					<label htmlFor="reg-pass">Password:</label>
					<input
						type="password"
						id="reg-pass"
						name="pass"
						required
					/>
					<br />
					<label htmlFor="reg-repass">Confirm password:</label>
					<input
						type="password"
						id="reg-repass"
						name="repass"
						required
					/>
					<br />
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}

export default RegisterPanel;