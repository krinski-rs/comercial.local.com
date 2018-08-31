import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from './MenuItem';
import MenuItemList from './MenuItemList';

class Menu extends React.Component {
	
	render() {
		return (
			<nav className="col-md-2 d-none d-md-block bg-light sidebar">
				<div className="sidebar-sticky">
					<ul className="nav flex-column">
	                    {
	                    	this.props.menu.map(function(obj, idx){
                        		if(!!obj.itens && (obj.itens.length > 0)){
                        			return <MenuItemList href={ obj.href } text={obj.text} icon={obj.icon} key={idx} itens={obj.itens} />
                        		}else{
                        			return <MenuItem href={ obj.href } text={obj.text} icon={obj.icon} key={idx} />
                        		}
	                    	})
	                    }
						<li className="nav-item ">
							<Link className="nav-link" to={"/aplicacoes/"}>
			                	<FontAwesomeIcon icon={ fas.faChartBar }  />&nbsp;Estatísticas
		                	</Link>
			            </li>
			            <li className="nav-item">
			            	<a className="nav-link pl-3 dropdown-toggle text-nowrap collapsed" href="#" data-toggle="collapse" aria-expanded="false">
			            		<FontAwesomeIcon icon={ fas.faFileInvoiceDollar }  />&nbsp;Dropdown
			            	</a>
			            	<div className="collapse">
			            		<ul className="flex-column nav">
			            			<a className="nav-link px-5 text-truncate" href="#">Sub</a>
			            			<a className="nav-link px-5 text-truncate" href="#">Sub longer</a>
			            		</ul>
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
    	);
	}
}

Menu.propTypes = {
	menu: PropTypes.array
};

Menu.defaultProps = {
	menu: [
		{
			text: 'Pessoas',
			href: '#',
			icon: fas.faUsers,
			itens: [
				{
					text: 'Clientes',
					href: '/pessoas/clientes',
					icon: fas.faUserTie,
					itens: []
				},
				{
					text: 'Fornecedores',
					href: '/pessoas/fornecedor',
					icon: fas.faUserTag,
					itens: []
				},
				{
					text: 'Pessoa Jurídica',
					href: '/pessoas/juridica',
					icon: fas.faUserGraduate,
					itens: []
				},
				{
					text: 'Pessoa Física',
					href: '/pessoas/fisica',
					icon: fas.faUserAlt,
					itens: []
				}
			]
		},
		{
			text: 'Luma',
			href: '#',
			icon: fas.faDolly,
			itens: [
				{
					text: 'Produtos',
					href: '/luma/produtos',
					icon: fas.faBoxOpen,
					itens: []
				},
				{
					text: 'Unidades',
					href: '/luma/unidades',
					icon: fas.faWarehouse,
					itens: []
				},
				{
					text: 'Abastecimento',
					href: '/luma/abastecimento',
					icon: fas.faUserGraduate,
					itens: []
				}
			]
		}
	]
};

export default Menu;