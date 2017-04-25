import React from 'react';
import { connect } from 'react-redux';

import { editEntry } from '../actions';

class EntryEditor extends React.Component {
	render() {
		return (
			<form action="">
				<p>Editor</p>
				<input type="text"/>
				<input type="text"/>
				<input type="text"/>
				<button type="submit">Create</button>
			</form>
		);
	}
}

const mapDispatchToProps = {
	onCreate: editEntry
};

export default connect(null, mapDispatchToProps)(EntryEditor);