import React from 'react';
import PropTypes from 'prop-types';

class NaviBarTopAlert extends React.Component {
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
                	<span className="label label-success">{ this.props.alerts.length }</span>&nbsp;
                	<i className={ this.props.classIcon }></i>&nbsp;
                	<i className={ "fa fa-caret-" + ( this.state.isToggleOn ? 'up' : 'down' ) }></i>
                </a>
                <ul className="dropdown-menu dropdown-alerts">
		            {this.props.alerts.map(function(objAlert, i){
		                return <li key={ i }>
			                    { (i > 0) ? <div className="divider"></div> : '' }
			                    <a href="#">
	                                <div>
	                                    <i className="fa fa-comment fa-fw"></i>&nbsp;{ objAlert.title }
	                                    <span className="pull-right text-muted small">&nbsp;{ objAlert.text }</span>
	                                </div>
	                            </a>
					           </li>;
		            })}                
		            { (this.props.alerts.length > 0) ? <li className="divider"></li> : null }
		            <li>
	                    <a className="text-center" href="#">
	                        <strong>See All Alerts</strong>&nbsp;&nbsp;
	                        <i className="fa fa-angle-right"></i>
	                    </a>
	                </li>
                </ul>
            </li>
       );
	}
}

NaviBarTopAlert.propTypes = {
		classIcon: PropTypes.string,
		alerts: PropTypes.array
};

NaviBarTopAlert.defaultProps = {
		classIcon: "fa fa-bell fa-fw",
		alerts: [
			{
				title: "Reinaldo Krinski",
				text: 'Yesterday',
				alertIcon: 'fa-comment'
			},
			{
				title: "Murilo Krinski",
				text: '24/04/2009',
				alertIcon: 'fa-comment'
			},
			{
				title: "Josnel Krinski",
				text: '27/04/2009',
				alertIcon: 'fa-comment'
			}
		]
};

export default NaviBarTopAlert;
