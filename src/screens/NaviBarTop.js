import React from 'react';
import PropTypes from 'prop-types';
import NaviBarTopMessage from './NaviBarTopMessage';
import NaviBarTopTask from './NaviBarTopTask';
import NaviBarTopAlert from './NaviBarTopAlert';
import NaviBarTopUser from './NaviBarTopUser';

class NaviBarTop extends React.Component {
	render() {
		return (
	        <ul className="nav navbar-top-links navbar-right">
	        	<NaviBarTopMessage />
	        	<NaviBarTopTask />
	        	<NaviBarTopAlert />
	        	<NaviBarTopUser />
            </ul>
       );
	}
}

NaviBarTop.propTypes = {
		margem: PropTypes.number
};

NaviBarTop.defaultProps = {
		margem: 0
};

export default NaviBarTop;
