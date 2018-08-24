import React from 'react';
import PropTypes from 'prop-types';
import ItemSideBar from './ItemSideBar';

class SideBarItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		};
	    this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		console.log(this.props.itens);
		event.preventDefault();
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
			})
		);
	}

	render() {
		return (
	            <li onClick={ this.handleClick }>
	                <a href={this.props.href}>
	                	<i className={this.props.itemClass}></i>&nbsp;{ this.props.text}
	                	<span className="fa arrow"></span>
	                </a>
	                <ul className={"nav nav-"+this.props.level+"-level" + (this.state.isToggleOn ? ' collapse' : '')}>
                    {
                    	this.props.itens.map(function(obj, idx){
                    		if(!!obj.itens && (obj.itens.length > 0)){
                    			return <SideBarItem text={obj.text} level={obj.level} itemClass={obj.itemClass} itens={ obj.itens } key={idx} />
                    		}else{
                    			return <ItemSideBar text={obj.text} itemIcon={obj.itemIcon} key={idx} />
                    		}
                    	})
                    }
	                </ul>
	            </li>
       );
  }
}

SideBarItem.propTypes = {
	level: PropTypes.string,
	href: PropTypes.string,
	text: PropTypes.string,
	itemClass: PropTypes.string,
	itens: PropTypes.array
};

SideBarItem.defaultProps = {
	level: 'second',
	href: '',
	text: 'Item Menu',
	itemClass: '',
	itens: []
};

export default SideBarItem;
