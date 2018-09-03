import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LineChart, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';
import Menu from './Menu';

class Opa extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render() {
		return (
				<div className="container-fluid">
			      <div className="row">
			        <Menu />
			        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
			          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			            <h1 className="h2">{ this.props.title }</h1>
			          </div>
			        </main>
			      </div>
			    </div>
    	);
	}
}

Opa.propTypes = {
	title: PropTypes.string
};

Opa.defaultProps = {
		title: "Home"
};

export default Opa;