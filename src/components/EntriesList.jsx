import React from 'react';
import Pagination from 'react-js-pagination';

import Entry from './Entry';

class EntriesList extends React.Component {
	constructor() {
		super();
		this.itemsOnPage = 5;
	}

	handlePageChanged(newPage) {
		this.props.history.push(`/pages/${newPage}`);
	}

	render() {
		const currentPage = +this.props.match.params.page || 1;
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
								onStartEdit={() => this.props.history.push(`/${item.id}`)}
							/>
						)}
					</tbody>
				</table>
				<Pagination
					activePage={currentPage}
					itemsCountPerPage={this.itemsOnPage}
					totalItemsCount={this.props.entries.length}
					onChange={(newPage) => this.handlePageChanged(newPage)}
				/>
			</div>
		);
	}
}

export default EntriesList;