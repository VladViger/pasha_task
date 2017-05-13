import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ClassCreateEntry from './Class.CreateEntry';
import ValidationHelper from '../helpers/ValidationHelper';

import 'react-datepicker/dist/react-datepicker.css';

class EntryEditor extends ClassCreateEntry {
	componentWillMount() {
		if (!this.props.id) {
			this.props.history.push('/');
			return;
		}
		let currentDate = moment(this.props.dateOfBirth);
		this.setState({ date: currentDate });
	}

	whatChanged(entry) {
		let changed = null;
		if (entry.name !== this.props.name) changed = 'name';
		if (entry.email !== this.props.email) changed = 'email';
		if (entry.dateOfBirth !== this.props.dateOfBirth) changed = 'date';
		return changed;
	}

	handleSubmit(e) {
		e.preventDefault();
		let changedEntry = {
			name: e.target.name.value,
			email: e.target.email.value.toLowerCase(),
			dateOfBirth: this.getDateString()
		};

		const change = this.whatChanged(changedEntry);
		if (!change) {
			this.comeBack();
			return;
		} else if (change !== 'email') {
			this._validationRules.email.userExists = false;
		}

		const validationErrors = ValidationHelper.validate(changedEntry, this._validationRules);
		if (!validationErrors) {
			this.props.handleEdit({
				id: this.props.id,
				...changedEntry
			});
			this.comeBack();
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
					<label htmlFor="edit-name">Name:</label>
					<input
						type="text"
						defaultValue={this.props.name}
						id="edit-name"
						name="name"
						autoFocus
					/>
					{ nameError ? <div>{nameError}</div> : false }
					<br />
					<label htmlFor="edit-email">Email:</label>
					<input
						type="text"
						defaultValue={this.props.email}
						id="edit-email"
						name="email"
					/>
					{ emailError ? <div>{emailError}</div> : false }
					<br />
					<label htmlFor="edit-date">Date of birth:</label>
					<DatePicker
						id="edit-date"
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
					<button type="submit">Apply changes</button>
					<br />
					<button type="button" onClick={ () => this.comeBack() }>Come Back</button>
			</form>
		);
	}
}

export default EntryEditor;