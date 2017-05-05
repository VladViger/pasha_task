import React from 'react';
import { Redirect } from 'react-router-dom';

import ValidationHelper from '../helpers/ValidationHelper';

class LogInPanel extends React.Component {

	_validationRules = {
		email: {
		  presence:   { message: () => '^Email is required' },
		  userExists: { message: () => '^Such user is not exist' }
		},
		password: {
		  presence: { message: () => '^Password is required' }
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			errors: {}
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const email    = e.target.email.value.toLowerCase();
		const password = e.target.pass.value;

		const validationErrors = ValidationHelper.validate(
			{ email, password },
			this._validationRules
		);
		if (validationErrors) {
			this.setState({
				errors: { ...validationErrors }
			});
		} else {
            this.props.initEntriesList();
		}
	}

	render() {
		return (this.props.loggedIn) ? (
			<Redirect to="/" />
		) : (
			<div className="login-panel">
				<form action="#" onSubmit={ (e) => this.handleSubmit(e) } noValidate="novalidate">
					<label htmlFor="login-email">Email ID:</label>
					<input
						type="text"
						id="login-email"
						name="email"
						autoFocus
						required
					/>
					{ this.state.errors.email ? <div>{this.state.errors.email}</div> : null }
					<br />
					<label htmlFor="login-pass">Password:</label>
					<input
						type="password"
						id="login-pass"
						name="pass"
						required
					/>
					{ this.state.errors.password ? <div>{this.state.errors.password}</div> : false }
					<br />
					<button type="submit">Log In</button>
				</form>
			</div>
		);
	}
}

export default LogInPanel;