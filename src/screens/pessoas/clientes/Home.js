import React from 'react';
import NavBar from '../../NavBar';
import Opa from '../../Opa';


class Home extends React.Component {
	render() {
		return (
			<div id="container-fluid">
				<NavBar />
				<Opa title={ "Home Cliente" } />
			</div>
    	);
	}
}

export default Home;
