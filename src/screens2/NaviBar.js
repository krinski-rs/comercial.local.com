import React from 'react';
import PropTypes from 'prop-types';
import NaviBarTop from './NaviBarTop';
import SideBar from './SideBar';

class NaviBar extends React.Component {
	render() {
		return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: this.props.margem }}>
	            <div className="navbar-header">
	                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	                    <span className="sr-only">Toggle navigation</span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                </button>
	                <a className="navbar-brand" href="index.html">R&K Admin v1.0</a>
	            </div>
	            <NaviBarTop />
	            <SideBar />
	        </nav>
       );
  }
}

NaviBar.propTypes = {
		margem: PropTypes.number
};

NaviBar.defaultProps = {
		margem: 0
};

export default NaviBar;
