import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ClassCreateEntry from './Class.CreateEntry';
import ValidationHelper from '../helpers/ValidationHelper';

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
			<form className="entry-creator" action="#" onSubmit={ (e) => this.handleSubmit(e) }>
				<div className={'form-group' + (nameError ? ' has-error' : '')}>
					<label htmlFor="name" className="control-label">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						className="form-control"
						autoFocus
					/>
					{ nameError ?
						<span className="label label-danger">{nameError}</span> : false 
					}
				</div>
				<div className={'form-group' + (emailError ? ' has-error' : '')}>
					<label htmlFor="email" className="control-label">Email:</label>
					<input
						type="text"
						id="email"
						name="email"
						className="form-control"
					/>
					{ emailError ?
						<span className="label label-danger">{emailError}</span> : false 
					}
				</div>
				<div className={'form-group datepicker-custom-wraper' + (dateError ? ' has-error' : '')}>
					<label htmlFor="date" className="control-label">Date of birth:</label>
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
						className="form-control"
						autoComplete="off"
					/>
					{ dateError ?
						<span className="label label-danger">{dateError}</span> : false 
					}
				</div>
				<button className="btn btn-default" type="submit">Create Entry</button>
			</form>
		);
	}
}

export default EntryCreator;