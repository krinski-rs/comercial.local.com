import React from 'react';
import NavBar from './NavBar';
import Opa from './Opa';


class Container extends React.Component {
	render() {
		return (
			<div id="container-fluid">
				<NavBar />
				<Opa />
			</div>
    	);
	}
}

export default Container;
