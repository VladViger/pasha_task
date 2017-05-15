import React from 'react';

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

		return (
			<form className="login-panel" action="#" onSubmit={ (e) => this.handleSubmit(e) }>
				<div className={'form-group' + (emailError ? ' has-error' : '')}>
					<label htmlFor="login-email" className="control-label">Email ID:</label>
					<input
						type="text"
						id="login-email"
						name="email"
						className="form-control"
						autoFocus
					/>
					{ emailError ?
						<span className="label label-danger">{emailError}</span> : false 
					}
				</div>
				<div className={'form-group' + (passError ? ' has-error' : '')}>
					<label htmlFor="login-pass" className="control-label">Password:</label>
					<input
						type="password"
						id="login-pass"
						name="pass"
						className="form-control"
					/>
					{ passError ?
						<span className="label label-danger">{passError}</span> : false 
					}
				</div>
				<button className="btn btn-default" type="submit">Log In</button>
			</form>
		);
	}
}

export default LogInPanel;