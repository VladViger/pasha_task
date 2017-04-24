import React from 'react';
import Entry from './Entry';

class EntriesList extends React.Component {
	componentDidMount() {
		this.props.initEntriesList(); // перенести на стр. авторизации
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Date of birth</th>
						<th></th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Date of birth</th>
						<th></th>
					</tr>
				</tfoot>
				<tbody>
					{this.props.entries.map(item => 
						<Entry
							key={item.id}
							{...item}
							onDelEntry={() => this.props.handleDelEntry(item.id)}
						/>
					)}
				</tbody>
			</table>
		);
	}
}

export default EntriesList;