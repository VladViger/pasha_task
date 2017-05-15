import React from 'react';
import { Link } from 'react-router-dom';
import Confirm from 'react-confirm-bootstrap';

const HeaderApp = (props) => (
	<header className="header-app">
		<div className="page-header">
			<h1>Birthdays entries<br /><small>simple CRUD application</small></h1>
		</div>
		<div className={props.userName ? 'hidden' : ''}>
			If you don't have an account, you may <Link to="/register">register</Link>.
		</div>
		<div className={!props.userName ? 'hidden' : ''}>
			<p>Hi, <span className="user-name">{props.userName}!</span></p>
			<p>You can edit any entry by double-clicking on it,<br />
				add a new entry on page <Link to="/create">"/create"</Link>,<br />
				or even delete any of them (be careful, it happens without confirmation).
			</p>
			<p>If you are tired of all this, just click 
				<a href="#" className="log-out" onClick={(e) => e.preventDefault()}>&nbsp;
					<Confirm
						onConfirm={props.handleLogOut}
						body="Are you sure you want to logout?"
						confirmText="I'm sure"
						title="LogOut"
						confirmBSStyle="primary"
					>
						<span>LogOut</span>
					</Confirm>
				</a>
			</p>
		</div>
	</header>
);

export default HeaderApp;