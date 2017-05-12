import React from 'react';
import { Link } from 'react-router-dom';

class EntriesPagination extends React.Component {
	handleNextPage(e) {
		e.preventDefault();
		if (this.props.currentPage >= this.props.totalPages) return;
		this.props.push(`/pages/${+this.props.currentPage + 1}`);
	}

	handlePrevPage(e) {
		e.preventDefault();
		if (this.props.currentPage <= 1) return;
		this.props.push(`/pages/${this.props.currentPage - 1}`);
	}

	render() {
		return (
			<div>
				<a
					href="#"
					title="prev page"
					onClick={(e) => this.handlePrevPage(e)}
				>&larr;</a>
				{[...Array(this.props.totalPages)].map((item, i) =>
					<Link to={`/pages/${i+1}`} key={i}>{i+1}</Link>
				)}
				<a
					href="#"
					title="next page"
					onClick={(e) => this.handleNextPage(e)}
				>&rarr;</a>
			</div>
		);
	}
}

export default EntriesPagination;