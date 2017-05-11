import React from 'react';

class Entry extends React.Component {
	render() {
		let {name, email, dateOfBirth, onClick} = this.props;
		return (
			<tr onDoubleClick={this.props.onStartEdit}>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.dateOfBirth}</td>
				<td>
					<div onClick={this.props.onDelEntry}>X</div>
				</td>
			</tr>
		);
	}
}

export default Entry;