import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ClassCreateEntry from './Class.CreateEntry';
import ValidationHelper from '../helpers/ValidationHelper';

class EntryEditor extends ClassCreateEntry {
	componentWillMount() {
		if (!this.props.id) {
			this.props.history.push('/');
			return;
		}
		let currentDate = moment(this.props.dateOfBirth, this._dateFormat);
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
			<form className="entry-editor" action="#" onSubmit={ (e) => this.handleSubmit(e) }>
				<div className={'form-group' + (nameError ? ' has-error' : '')}>
					<label htmlFor="edit-name" className="control-label">Name:</label>
					<input
						type="text"
						defaultValue={this.props.name}
						id="edit-name"
						name="name"
						className="form-control"
						autoFocus
					/>
					{ nameError ?
						<span className="label label-danger">{nameError}</span> : false 
					}
				</div>
				<div className={'form-group' + (emailError ? ' has-error' : '')}>
					<label htmlFor="edit-email" className="control-label">Email:</label>
					<input
						type="text"
						defaultValue={this.props.email}
						id="edit-email"
						className="form-control"
						name="email"
					/>
					{ emailError ?
						<span className="label label-danger">{emailError}</span> : false 
					}
				</div>
				<div className={'form-group datepicker-custom-wraper' + (dateError ? ' has-error' : '')}>
					<label htmlFor="edit-date" className="control-label">Date of birth:</label>
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
						className="form-control"
						autoComplete="off"
					/>
					{ dateError ?
						<span className="label label-danger">{dateError}</span> : false 
					}
				</div>
				<div className="btn-group">
					<button className="btn btn-default" type="submit">Apply changes</button>
					<button
						className="btn btn-default"
						type="button"
						onClick={ () => this.comeBack() }
					>Come Back</button>
				</div>
			</form>
		);
	}
}

export default EntryEditor;