import React from 'react';
import { Redirect } from 'react-router-dom';
import validate from 'validate.js';

class LogInPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailNoValid: false,
			passNoValid: false
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		let email = e.target.email.value;
		let pass = e.target.pass.value;

		let validationError = validate.single(email, {presence: true, email: true});
		if (validationError) {
			this.setState({ emailNoValid: true });
			return;
		}
		
		let action = this.props.handleLogIn(email, pass);
		if (!action.id) {
			this.setState({ passNoValid: true });
			return;
		}

		this.props.initEntriesList();
	}

	render() {
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
						required
					/>
					{ (this.state.emailNoValid) ? (<div>Email incorrect!</div>) : false }
					<br />
					<label htmlFor="login-pass">Password:</label>
					<input
						type="password"
						id="login-pass"
						name="pass"
						required
					/>
					{ (this.state.passNoValid) ? (<div>Password incorrect!</div>) : false }
					<br />
					<button type="submit">Log In</button>
				</form>
			</div>
		);
	}
}

export default LogInPanel;