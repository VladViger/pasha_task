import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {  } from '../actions';

class RegisterPanel extends React.Component {
	render() {
		return (this.props.loggedIn) ? (
			<Redirect to="/" />
		) : (
			<div>Register Panel</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: !!state.currentUserId
});

const mapDispatchToProps = {
	
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterPanel);