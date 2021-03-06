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
	render() {
		return (
				<div className="container-fluid">
			      <div className="row">
			        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
			          <div className="sidebar-sticky">
			            <ul className="nav flex-column">
			              <li className="nav-item">
			              <Link className="nav-link" to={"/dashboard/"}>
			              	<FontAwesomeIcon icon={ fas.faUsers }  />&nbsp;Pessoas
			              </Link>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faUserTie }  />&nbsp;Clientes
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faCogs }  />&nbsp;Configurações
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faPhoneSquare }  />&nbsp;Ramais
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faTabletAlt }  />&nbsp;Aplicações
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faChartBar }  />&nbsp;Estatísticas
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faPencilRuler }  />&nbsp;Engenharia
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faTachometerAlt }  />&nbsp;FAST
			                </a>
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
			                	<FontAwesomeIcon icon={ fas.faBroadcastTower }  />&nbsp;POP
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faMoneyCheckAlt }  />&nbsp;Pré-Vendas
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

			            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
			              <span>Saved reports</span>
			              <a className="d-flex align-items-center text-muted" href="#">
			              	<FontAwesomeIcon icon={ fas.faPlusCircle }  />
			              </a>
			            </h6>
			            <ul className="nav flex-column mb-2">
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                  <FontAwesomeIcon icon={ fas.faFileAlt }  />&nbsp;Current month
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faFileAlt }  />&nbsp;Last quarter
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faFileAlt }  />&nbsp;Social engagement
			                </a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" href="#">
			                	<FontAwesomeIcon icon={ fas.faFileAlt }  />&nbsp;Year-end sale
			                </a>
			              </li>
			            </ul>
			          </div>
			        </nav>

			        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
			          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
			            <h1 className="h2">Dashboard</h1>
			            <div className="btn-toolbar mb-2 mb-md-0">
			              <div className="btn-group mr-2">
			                <button className="btn btn-sm btn-outline-secondary">Share</button>
			                <button className="btn btn-sm btn-outline-secondary">Export</button>
			              </div>
			              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
			              	<FontAwesomeIcon icon={ fas.faCalendarAlt }  />&nbsp;This week
			              </button>
			            </div>
			          </div>

			          <LineChart width={1024} height={380} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
			          	<XAxis dataKey="name"/>
			          	<YAxis/>
			          	<CartesianGrid strokeDasharray="3 3" />
			          	<Tooltip/>
			          	<Legend />
			          	<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
			          	<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			          	<Line type="monotone" dataKey="xc" stroke="#ccc000" />
				      </LineChart>

			          <h2>Section title</h2>
			          <div className="table-responsive">
			            <table className="table table-striped table-sm">
			              <thead>
			                <tr>
			                  <th>#</th>
			                  <th>Header</th>
			                  <th>Header</th>
			                  <th>Header</th>
			                  <th>Header</th>
			                </tr>
			              </thead>
			              <tbody>
			                <tr>
			                  <td>1,001</td>
			                  <td>Lorem</td>
			                  <td>ipsum</td>
			                  <td>dolor</td>
			                  <td>sit</td>
			                </tr>
			                <tr>
			                  <td>1,002</td>
			                  <td>amet</td>
			                  <td>consectetur</td>
			                  <td>adipiscing</td>
			                  <td>elit</td>
			                </tr>
			                <tr>
			                  <td>1,003</td>
			                  <td>Integer</td>
			                  <td>nec</td>
			                  <td>odio</td>
			                  <td>Praesent</td>
			                </tr>
			                <tr>
			                  <td>1,003</td>
			                  <td>libero</td>
			                  <td>Sed</td>
			                  <td>cursus</td>
			                  <td>ante</td>
			                </tr>
			                <tr>
			                  <td>1,004</td>
			                  <td>dapibus</td>
			                  <td>diam</td>
			                  <td>Sed</td>
			                  <td>nisi</td>
			                </tr>
			                <tr>
			                  <td>1,005</td>
			                  <td>Nulla</td>
			                  <td>quis</td>
			                  <td>sem</td>
			                  <td>at</td>
			                </tr>
			                <tr>
			                  <td>1,006</td>
			                  <td>nibh</td>
			                  <td>elementum</td>
			                  <td>imperdiet</td>
			                  <td>Duis</td>
			                </tr>
			                <tr>
			                  <td>1,007</td>
			                  <td>sagittis</td>
			                  <td>ipsum</td>
			                  <td>Praesent</td>
			                  <td>mauris</td>
			                </tr>
			                <tr>
			                  <td>1,008</td>
			                  <td>Fusce</td>
			                  <td>nec</td>
			                  <td>tellus</td>
			                  <td>sed</td>
			                </tr>
			                <tr>
			                  <td>1,009</td>
			                  <td>augue</td>
			                  <td>semper</td>
			                  <td>porta</td>
			                  <td>Mauris</td>
			                </tr>
			                <tr>
			                  <td>1,010</td>
			                  <td>massa</td>
			                  <td>Vestibulum</td>
			                  <td>lacinia</td>
			                  <td>arcu</td>
			                </tr>
			                <tr>
			                  <td>1,011</td>
			                  <td>eget</td>
			                  <td>nulla</td>
			                  <td>Class</td>
			                  <td>aptent</td>
			                </tr>
			                <tr>
			                  <td>1,012</td>
			                  <td>taciti</td>
			                  <td>sociosqu</td>
			                  <td>ad</td>
			                  <td>litora</td>
			                </tr>
			                <tr>
			                  <td>1,013</td>
			                  <td>torquent</td>
			                  <td>per</td>
			                  <td>conubia</td>
			                  <td>nostra</td>
			                </tr>
			                <tr>
			                  <td>1,014</td>
			                  <td>per</td>
			                  <td>inceptos</td>
			                  <td>himenaeos</td>
			                  <td>Curabitur</td>
			                </tr>
			                <tr>
			                  <td>1,015</td>
			                  <td>sodales</td>
			                  <td>ligula</td>
			                  <td>in</td>
			                  <td>libero</td>
			                </tr>
			              </tbody>
			            </table>
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