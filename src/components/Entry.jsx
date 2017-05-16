import React from 'react';

class Entry extends React.Component {
	render() {
		let {name, email, dateOfBirth, onClick} = this.props;
		return this.props.ghost ? (
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
		) : (
			<tr onDoubleClick={this.props.onStartEdit}>
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.dateOfBirth}</td>
				<td className="remove-entry" onClick={this.props.onDelEntry} title="delete entry">
					<span className="glyphicon glyphicon-remove"></span>
				</td>
			</tr>
		);
	}
}

export default Entry;