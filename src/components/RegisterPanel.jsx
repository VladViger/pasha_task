import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ValidationHelper from '../helpers/ValidationHelper';

import 'react-datepicker/dist/react-datepicker.css';

class RegisterPanel extends React.Component {
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
			errors: {},
			isSent: false
		};
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
		let newEntry = {
			name: e.target.name.value,
			email: e.target.email.value.toLowerCase(),
			pass: e.target.pass.value,
			repass: e.target.repass.value,
			dateOfBirth: this.getDateString()
		};

		const validationErrors = ValidationHelper.validate(newEntry, this._validationRules);

		if (!validationErrors) {
			this.props.handleRegister(newEntry);
			this.setState({ isSent: true });
		}
		validationErrors ? 
			this.setState({ errors: validationErrors }) : this.setState({ errors: {} });
	}

	render() {
		const {
			name: nameError,
			email: emailError,
			dateOfBirth: dateError,
			pass: passError,
			repass: confirmPassError
		} = this.state.errors;

		return (this.props.loggedIn) ? (
			<Redirect to="/" />

		) : this.state.isSent ? (
			<div>
				Your registration request has been sent.<br />
				Now you can <Link to="/login">login</Link> to your account
			</div>

		) : (
			<div className="register-panel">
				<form action="#" onSubmit={ (e) => this.handleSubmit(e) }>
					<label htmlFor="reg-name">Name:</label>
					<input
						type="text"
						id="reg-name"
						name="name"
					/>
					{ nameError ? <div>{nameError}</div> : false }
					<br />
					<label htmlFor="reg-email">Email:</label>
					<input
						type="text"
						id="reg-email"
						name="email"
						autoFocus
					/>
					{ emailError ? <div>{emailError}</div> : false }
					<br />
					<label htmlFor="reg-date">Date of birth:</label>
					<DatePicker
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
					<label htmlFor="reg-pass">Password:</label>
					<input
						type="password"
						id="reg-pass"
						name="pass"
					/>
					{ passError ? <div>{passError}</div> : false }
					<br />
					<label htmlFor="reg-repass">Confirm password:</label>
					<input
						type="password"
						id="reg-repass"
						name="repass"
					/>
					{ confirmPassError ? <div>{confirmPassError}</div> : false }
					<br />
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}

export default RegisterPanel;