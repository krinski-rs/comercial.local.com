import React, { Component } from 'react';
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
	  Switch,
	  Redirect
	} from "react-router-dom";
	
import createBrowserHistory from  'history/createBrowserHistory'

import Container from './screens/Container';
import HomeCliente from './screens/pessoas/clientes/Home';
import WillMatch from './components/WillMatch';
import NoMatch from './components/NoMatch';
import Opa from './screens/Opa';

import './css/bootstrap/css/bootstrap.css';
import './css/home.css';

const history = new createBrowserHistory();


class App extends Component {
	render(){
		return(
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={ Container } />
					<Route path="/pessoas/clientes/" exact component={ HomeCliente } />
					<Route component={ NoMatch } />
				</Switch>
			</Router>			
		);
	}
}

export default App;
