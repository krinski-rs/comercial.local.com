import React from 'react';
import PropTypes from 'prop-types';

class ItemSideBar extends React.Component {
	render() {
		return (
			<li>
				<a href={ this.props.href } className={ this.props.itemClass }>
					<i className={ this.props.itemIcon }></i>&nbsp;{ this.props.text }
				</a>
			</li>
		);
	}
}

ItemSideBar.propTypes = {
		text: PropTypes.string,
		href: PropTypes.string,
		itemClass: PropTypes.string,
		itemIcon: PropTypes.string
};

ItemSideBar.defaultProps = {
		text: 'Item Menu',
		href: '#',
		itemClass: '',
		itemIcon: ''
};

export default ItemSideBar;
