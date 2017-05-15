import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ClassCreateEntry from './Class.CreateEntry';
import ValidationHelper from '../helpers/ValidationHelper';

class RegisterPanel extends ClassCreateEntry {
	constructor(props) {
		super(props);
		this._validationRules = {
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
			},
			...this._validationRules
		};
		this.state = {
			date: null,
			errors: {},
			isSent: false
		};
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

		return (this.state.isSent) ? (
			<p className="alert alert-success register-success">
				<span className="glyphicon glyphicon glyphicon-ok"></span>
				Your registration request has been sent.<br />
				Now you can <Link to="/login">login</Link> to your account
			</p>

		) : (
			<form className="register-panel" action="#" onSubmit={ (e) => this.handleSubmit(e) }>
				<div className={'form-group' + (nameError ? ' has-error' : '')}>
					<label htmlFor="reg-name" className="control-label">Name:</label>
					<input
						type="text"
						id="reg-name"
						name="name"
						className="form-control"
						autoFocus
					/>
					{ nameError ?
						<span className="label label-danger">{nameError}</span> : false 
					}
				</div>
				<div className={'form-group' + (emailError ? ' has-error' : '')}>
					<label htmlFor="reg-email" className="control-label">Email:</label>
					<input
						type="text"
						id="reg-email"
						name="email"
						className="form-control"
					/>
					{ emailError ?
						<span className="label label-danger">{emailError}</span> : false 
					}
				</div>
				<div className={'form-group datepicker-custom-wraper' + (dateError ? ' has-error' : '')}>
					<label htmlFor="reg-date" className="control-label">Date of birth:</label>
					<DatePicker
						id="reg-date"
						dateFormat={this._dateFormat}
						selected={this.state.date}
						locale="en-gb"
						maxDate={ moment() }
						onChange={ (d) => this.handleChangeDate(d) }
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						placeholderText="Click to select a date"
						className="form-control"
						autoComplete="off"
					/>
					{ dateError ?
						<span className="label label-danger">{dateError}</span> : false 
					}
				</div>
				<div className={'form-group' + (passError ? ' has-error' : '')}>
					<label htmlFor="reg-pass" className="control-label">Password:</label>
					<input
						type="password"
						id="reg-pass"
						name="pass"
						className="form-control"
					/>
					{ passError ?
						<span className="label label-danger">{passError}</span> : false 
					}
				</div>
				<div className={'form-group' + (confirmPassError ? ' has-error' : '')}>
					<label htmlFor="reg-repass" className="control-label">Confirm password:</label>
					<input
						type="password"
						id="reg-repass"
						name="repass"
						className="form-control"
					/>
					{ confirmPassError ?
						<span className="label label-danger">{confirmPassError}</span> : false 
					}
				</div>
				<button className="btn btn-default" type="submit">Register</button>
			</form>
		);
	}
}

export default RegisterPanel;