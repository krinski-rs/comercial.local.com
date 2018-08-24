import React from 'react';
import PropTypes from 'prop-types';
import SideBarSearch from './SideBarSearch';
import SideBarItem from './SideBarItem';
import ItemSideBar from './ItemSideBar';

class SideBar extends React.Component {
	render() {
		return (
			<div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <SideBarSearch />
                        {
                        	this.props.menu.map(function(obj, idx){
                        		if(!!obj.itens && (obj.itens.length > 0)){
                        			return <SideBarItem text={obj.text} itemClass={obj.itemClass} itens={ obj.itens } key={idx}/>
                        		}else{
                        			return <ItemSideBar text={obj.text} itemIcon={obj.itemIcon} key={idx}/>
                        		}
                        	})
                        }
                        <li>
                            <a href="#">
                            	<i className="fa fa-sitemap fa-fw"></i>&nbsp;Multi-Level Dropdown
                            	<span className="fa arrow"></span>
                            </a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a className="active" href="blank.html">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.html">Login Page</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
       );
  }
}

SideBar.propTypes = {
	menu: PropTypes.array
};

SideBar.defaultProps = {
	menu: [
		{
			text: 'Dashboard',
			href: '#',
			itemClass: '',
			itemIcon: 'fa fa-dashboard fa-fw'
		},
		{
			text: 'Tables',
			href: '#',
			itemClass: '',
			itemIcon: 'fa fa-table fa-fw'
		},
		{
			text: 'Forms',
			href: '#',
			itemClass: '',
			itemIcon: 'fa fa-edit fa-fw'
		},
		{
			text: 'UI Elements',
			href: '#',
			itemClass: 'fa fa-wrench fa-fw',
			itens: [
				{
					text: 'Panels and Wells',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Buttons',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Notifications',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Typography',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Icons',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Grid',
					href: '#',
					itemClass: '',
					itemIcon: ''
				}
			]
		},
		{
			text: 'Multi-Level Dropdown',
			href: '#',
			itemClass: 'fa fa-sitemap fa-fw',
			itens: [
				{
					text: 'Second Level Item',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Second Level Item',
					href: '#',
					itemClass: '',
					itemIcon: ''
				},
				{
					text: 'Third Level',
					href: '#',
					itemClass: '',
					itens: [
						{
							text: 'Third Level Item',
							href: '#',
							itemClass: '',
							itemIcon: ''
						},
						{
							text: 'Third Level Item',
							href: '#',
							itemClass: '',
							itemIcon: ''
						},
						{
							text: 'Third Level Item',
							href: '#',
							itemClass: '',
							itemIcon: ''
						}
					]
				}
			]
		}
	]
};

export default SideBar;
