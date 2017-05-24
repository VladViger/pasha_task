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
		let showEntries = props.entries.filter((item, i) => 
			i < currentPage*this.itemsOnPage && i >= (currentPage - 1)*this.itemsOnPage
		);
		// let each page has the same number of rows
		function GhostEntry() {
			this.id = Math.random();
			this.ghost = true;
		}
		while (showEntries.length % this.itemsOnPage) {
			showEntries.push(new GhostEntry());
		}
		return showEntries;
	}

	handlePageChanged(newPage) {
		this.props.history.push(`/pages/${newPage}`);
	}

	render() {
		const currentPage = this.state.currentPage;
		const showEntries = this.state.showEntries;
		return !showEntries.length ? (
			<p className="alert alert-info main-table-info">
				Currently there are no entries.<br />
				If you just want to see how it works,<br />
				<a href="#" onClick={(e) => { e.preventDefault(); this.props.getExample(); }}>
					load the sample data.
				</a>
			</p>
		) : (
			<div className="main-table-wrapper">
				<table className="table table-bordered table-hover main-table">
					<thead>
						<tr>
							<th className="col-name">Name</th>
							<th className="col-email">Email</th>
							<th className="col-date">Date of birth</th>
							<th className="col-remove"></th>
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
								onDelEntry={() => this.props.handleDelEntry(item.id)}
								onStartEdit={() => this.props.history.push(`/${item.id}`)}
								{...item}
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