import React from 'react';
import { connect } from 'react-redux';

import { receiveEntries } from '../actions';
import VisibleEntries from './VisibleEntries';

class App extends React.Component {
	componentDidMount() {
		this.props.initEntriesList();
	}

	render() {
		return (
			<div className="layout">
				<VisibleEntries />
			</div>
		);
	}
}

const mapDispatchToProps = {
	initEntriesList: receiveEntries
};

export default connect(null, mapDispatchToProps)(App);