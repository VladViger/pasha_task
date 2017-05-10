import React from 'react';
import { Redirect } from 'react-router-dom';

import ValidationHelper from '../helpers/ValidationHelper';

class LogInPanel extends React.Component {
	constructor(props) {
		super(props);
		this._validationRules = {
			email: {
				presence: true,
				email: true
			},
			pass: {
				presence: true
			}
		};
		this.state = {
			errors: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn) this.props.initEntriesList();
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = e.target.email.value.toLowerCase();
		const pass = e.target.pass.value;

		const validationErrors = ValidationHelper.validate({email, pass}, this._validationRules);

		if (!validationErrors) this.props.handleLogIn(email, pass);
		validationErrors ?
			this.setState({ errors: validationErrors }) : this.setState({ errors: {} });
	}

	render() {
		const { email: emailError, pass: passError } = this.state.errors;

		return (this.props.loggedIn) ? (
			<Redirect to="/" />
		) : (
			<div className="login-panel">
				<form action="#" onSubmit={ (e) => this.handleSubmit(e) }>
					<label htmlFor="login-email">Email ID:</label>
					<input
						type="text"
						id="login-email"
						name="email"
						autoFocus
					/>
					{ emailError ? <div>{emailError}</div> : false }
					<br />
					<label htmlFor="login-pass">Password:</label>
					<input
						type="password"
						id="login-pass"
						name="pass"
					/>
					{ passError ? (<div>{passError}</div>) : false }
					<br />
					<button type="submit">Log In</button>
				</form>
			</div>
		);
	}
}

export default LogInPanel;