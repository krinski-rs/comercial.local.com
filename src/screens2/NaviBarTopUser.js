import React from 'react';
import PropTypes from 'prop-types';

class NaviBarTopUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: false
		};
	    this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
			})
		);
	}
	render() {
		return (
			<li className={"dropdown"+(this.state.isToggleOn ? ' open' : '')} onClick={ this.handleClick }>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                	<span className="label label-success">{ this.props.users.length }</span>&nbsp;
                	<i className={ this.props.classIcon }></i>&nbsp;
                	<i className={ "fa fa-caret-" + ( this.state.isToggleOn ? 'up' : 'down' ) }></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
		            {this.props.users.map(function(objUser, i){
		                return <li key={ i }>
			                    <a href="#">
			                    	<i className={ "fa " + objUser.userIcon + "fa-fw" }></i>&nbsp;{ objUser.text }
	                            </a>
					           </li>;
		            })}
		            { (this.props.users.length > 0) ? <li className="divider"></li> : null }
		            <li>
		            	<a href="/logout">
		            		<i className="fa fa-sign-out fa-fw"></i>&nbsp;Logout
		            	</a>
		            </li>
                </ul>
            </li>
       );
	}
}

NaviBarTopUser.propTypes = {
		classIcon: PropTypes.string,
		users: PropTypes.array
};

NaviBarTopUser.defaultProps = {
		classIcon: "fa fa-user fa-fw",
		users: [
			{
				text: 'User Profile',
				userIcon: 'fa-user'
			},
			{
				text: 'Settings',
				userIcon: 'fa-gear'
			}
		]
};

export default NaviBarTopUser;
