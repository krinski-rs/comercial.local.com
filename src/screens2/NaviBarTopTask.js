import React from 'react';
import PropTypes from 'prop-types';

class NaviBarTopTask extends React.Component {
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
/*
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span className="pull-right text-muted">40% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%'}}>
                                            <span className="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span className="pull-right text-muted">20% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%'}}>
                                            <span className="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span className="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%'}}>
                                            <span className="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span className="pull-right text-muted">80% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%'}}>
                                            <span className="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </li>

 */
	render() {
		return (
			<li className={"dropdown"+(this.state.isToggleOn ? ' open' : '')} onClick={ this.handleClick }>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                	<span className="label label-default">{ this.props.tasks.length }</span>&nbsp;
                    <i className={ this.props.classIcon }></i>&nbsp;
                    <i className={ "fa fa-caret-" + ( this.state.isToggleOn ? 'up' : 'down' ) }></i>
                </a>
                <ul className="dropdown-menu dropdown-tasks">				
		            {this.props.tasks.map(function(objTask, i){
		                return <li key={ i }>
		                    { (i > 0) ? <div className="divider"></div> : '' }
	                        <a href="#">
	                            <div>
	                                <p>
	                                    <strong>{ objTask.title }</strong>
	                                    <span className="pull-right text-muted">{ objTask.value + "% Complete" }</span>
	                                </p>
	                                <div className="progress progress-striped active">
	                                    <div className={ "progress-bar " + objTask.taskClass } role="progressbar" aria-valuenow={ objTask.value } aria-valuemin="0" aria-valuemax="100" style={{ width: objTask.value+'%' }}>
	                                        <span className="sr-only">{ objTask.value + "% Complete" }</span>
	                                    </div>
	                                </div>
	                            </div>
	                        </a>
	                    </li>
			            })}                
		            { (this.props.tasks.length > 0) ? <li className="divider"></li> : null }
                    <li>
                        <a className="text-center" href="#">
                            <strong>See All Tasks</strong>&nbsp;&nbsp;
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
       );
	}
}

NaviBarTopTask.propTypes = {
		classIcon: PropTypes.string,
		tasks: PropTypes.array
};

NaviBarTopTask.defaultProps = {
		classIcon: "fa fa-tasks fa-fw",
		tasks: [
			{
				title: "Task 1",
				value: 40,
				taskClass: 'progress-bar-success'
			},
			{
				title: "Task 2",
				value: 75,
				taskClass: 'progress-bar-warning'
			},
			{
				title: "Task 2",
				value: 75,
				taskClass: 'progress-bar-danger'
			}
		]
};

export default NaviBarTopTask;
