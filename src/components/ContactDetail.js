import React from 'react';
import { Link } from 'react-router-dom'
class ContactDetail extends React.Component {
	render() {
		const { params } = this.props;
		if(!params.id) return null;
		return (
			<div>
				<h2>Contact Detail</h2>
				<Link to='/contacts'>List all contacts</Link>
			</div>
		);
	}
}

export default ContactDetail;


