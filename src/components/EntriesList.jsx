import React from 'react';

import Entry from './Entry';
import EntriesPagination from './EntriesPagination';

class EntriesList extends React.Component {
	constructor() {
		super();
		this.itemsOnPage = 5;
	}

	getPagesNum() {
		return Math.ceil(this.props.entries.length / this.itemsOnPage);
	}

	render() {
		const currentPage = this.props.match.params.page || 1;
		const showEntries = this.props.entries.filter((item, i) => 
			i < currentPage*this.itemsOnPage && i > (currentPage - 1)*this.itemsOnPage
		);
		return (
			<div>
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
						{showEntries.map(item => 
							<Entry
								key={item.id}
								{...item}
								onDelEntry={() => this.props.handleDelEntry(item.id)}
								onStartEdit={() => this.props.history.push(item.id)}
							/>
						)}
					</tbody>
				</table>
				<EntriesPagination
					totalPages={this.getPagesNum()}
					currentPage={currentPage}
					push={this.props.history.push}
				/>
			</div>
		);
	}
}

export default EntriesList;