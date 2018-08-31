import React, { Component } from 'react';
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
	  Switch,
	  Redirect
	} from "react-router-dom";
import Container from './screens/Container';
import WillMatch from './components/WillMatch';
import NoMatch from './components/NoMatch';

import './css/bootstrap/css/bootstrap.css';
import './css/home.css';
//import { fas } from '@fortawesome/free-solid-svg-icons'
//
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStroopwafel, faHome } from '@fortawesome/free-solid-svg-icons'
//library.add(faStroopwafel)
//library.add(faHome)
/*<link href="%PUBLIC_URL%/css/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- MetisMenu CSS -->
<link href="%PUBLIC_URL%/css/metisMenu.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="%PUBLIC_URL%/css/sb-admin-2.css" rel="stylesheet">

<!-- Morris Charts CSS -->
<link href="%PUBLIC_URL%/css/morrisjs/morris.css" rel="stylesheet">

<!-- Custom Fonts -->
<link href="%PUBLIC_URL%/css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
*/
class App extends Component {
	render(){
		return(
			<Router>
				<Switch>
					<Route path="/" exact component={ Container } />
					<Route component={ NoMatch } />
				</Switch>
			</Router>			
		);
	}
}

export default App;
