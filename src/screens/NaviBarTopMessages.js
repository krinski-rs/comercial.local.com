import React from 'react';
import PropTypes from 'prop-types';

class NaviBarTopMessages extends React.Component {
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
			<li className={"dropdown"+(this.state.isToggleOn ? ' open' : '')} onClick={this.handleClick}>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                	<span className="label label-success">2</span>&nbsp;
                	<i className={ this.props.classIcon }></i>&nbsp;
                	<i className={"fa fa-caret-"+(this.state.isToggleOn ? 'up' : 'down')}></i>
                </a>
                <ul className="dropdown-menu dropdown-messages">
                {this.props.messages.map(function(objMessage, i){
                    return <li>
				                    <a href="#">
				                    <div>
				                        <strong>{ objMessage.title }</strong>
				                        <span className="pull-right text-muted">
				                            <em>{ objMessage.date }</em>
				                        </span>
				                    </div>
				                    <div>{ objMessage.text }</div>
				                </a>
				            </li>;
                })}                
                    <li className="divider"></li>
                    <li>
                        <a className="text-center" href="#">
                            <strong>Read All Messages</strong>
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
       );
	}
}

NaviBarTopMessages.propTypes = {
		classIcon: PropTypes.string,
		messages: PropTypes.array
};

NaviBarTopMessages.defaultProps = {
		classIcon: "fa fa-envelope fa-fw",
		messages: [
			{
				title: "Reinaldo Krinski",
				date: 'Yesterday',
				text: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
			},
			{
				title: "Murilo Krinski",
				date: '24/04/2009',
				text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
			}
		]
};

export default NaviBarTopMessages;
