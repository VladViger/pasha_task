import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ClassCreateEntry from './Class.CreateEntry';
import ValidationHelper from '../helpers/ValidationHelper';

import 'react-datepicker/dist/react-datepicker.css';

class EntryCreator extends ClassCreateEntry {
	handleSubmit(e) {
		e.preventDefault();
		let newEntry = {
			name: e.target.name.value,
			email: e.target.email.value.toLowerCase(),
			dateOfBirth: this.getDateString()
		};

		const validationErrors = ValidationHelper.validate(newEntry, this._validationRules);

		if (!validationErrors) {
			this.props.handleCreate(newEntry);
			this.props.history.push('/');
		}
		validationErrors ? 
			this.setState({ errors: validationErrors }) : this.setState({ errors: {} });
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
					<button type="submit">Create Entry</button>
			</form>
		);
	}
}

export default EntryCreator;