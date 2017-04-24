import React from 'react';
import { connect } from 'react-redux';

import { addEntry } from '../actions';

class EntryCreator extends React.Component {
	render() {
		return (
			<form action="">
				<input type="text"/>
				<input type="text"/>
				<input type="text"/>
				<button type="submit">Create</button>
			</form>
		);
	}
}

const mapDispatchToProps = {
	onCreate: addEntry
};

export default connect(null, mapDispatchToProps)(EntryCreator);