import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LineChart, Line, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, xc: 2300, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, xc: 1852, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, xc: 8562, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, xc: 2400, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, xc: 3560, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, xc: 3000, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, xc: 4000, amt: 2100},
];

class Opa extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render() {
		return (
				<div className="container-fluid">
			      <div className="row">
			        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
			          <div className="sidebar-sticky">
			            <ul className="nav flex-column">
			              <li className="nav-item">
				              <Link className="nav-link" to={"/pessoas/"}>
				              	<FontAwesomeIcon icon={ fas.faUsers }  />&nbsp;Pessoas
				              </Link>
			              </li>
			              <li className="nav-item ">
			              	<Link className="nav-link" to={"/aplicacoes/"}>
			                	<FontAwesomeIcon icon={ fas.faChartBar }  />&nbsp;Estatísticas
		                	</Link>
			              </li>
			              <li className="nav-item dropdown">
			              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
			              <div className="dropdown-menu">
			                <a className="dropdown-item" href="#one">one</a>
			                <a className="dropdown-item" href="#two">two</a>
			                <div role="separator" className="dropdown-divider"></div>
			                <a className="dropdown-item" href="#three">three</a>
			              </div>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faFileInvoiceDollar }  />&nbsp;Financeiro
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faCarAlt }  />&nbsp;Frota
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faLink }  />&nbsp;Implantação
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faMapMarkedAlt }  />&nbsp;Localidades
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faDolly }  />&nbsp;LUMA
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faDonate }  />&nbsp;MOVI
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faPhone }  />&nbsp;Voice
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faUserCircle }  />&nbsp;RH
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faUserCircle }  />&nbsp;TroubleTicket
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faUserCircle }  />&nbsp;CRV
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faUserCircle }  />&nbsp;Auditoria
			                </a>
			              </li>
			            </ul>
			          </div>
			        </nav>
			        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
			          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			            <h1 className="h2">Home</h1>
			          </div>
			        </main>
			      </div>
			    </div>
    	);
	}
}

Opa.propTypes = {
		companyName: PropTypes.string
};

Opa.defaultProps = {
		companyName: "RK Admin V1.0"
};

export default Opa;