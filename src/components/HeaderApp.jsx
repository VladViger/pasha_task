import React from 'react';

const HeaderApp = (props) => (
	<header className="header">
		<div className="user">{props.userName}</div>
		<div className="log-out">
			<span onClick={props.handleLogOut}>LogOut</span>
		</div>
	</header>
);

export default HeaderApp;