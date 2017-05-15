import React from 'react';
import Pagination from 'react-js-pagination';

import Entry from './Entry';

class EntriesList extends React.Component {
	constructor(props) {
		super(props);
		this.itemsOnPage = 5;
		this.state = {
			currentPage: +props.match.params.page || 1,
			showEntries: this.getShowEntries(props)
		}
	}

	componentWillReceiveProps(nextProps) {
		const currentPage = +nextProps.match.params.page || 1;
		const showEntries = this.getShowEntries(nextProps);
		if (currentPage > 1 && !showEntries.length) {
			this.handlePageChanged(currentPage - 1);
			return;
		}
		this.setState({currentPage, showEntries});
	}

	getShowEntries(props) {
		const currentPage = +props.match.params.page || 1;
		return props.entries.filter((item, i) => 
			i < currentPage*this.itemsOnPage && i >= (currentPage - 1)*this.itemsOnPage
		);
	}

	handlePageChanged(newPage) {
		this.props.history.push(`/pages/${newPage}`);
	}

	render() {
		const currentPage = this.state.currentPage;
		const showEntries = this.state.showEntries;
		return !showEntries.length ? (
			<p className="alert alert-info main-table-info">Currently there are no entries.</p>
		) : (
			<div className="main-table-wrapper">
				<table className="table table-bordered table-hover main-table">
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