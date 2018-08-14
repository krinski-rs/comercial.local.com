import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	  constructor(props) {
		    super(props);
		    this.state = {isToggleOn: true};

		    // This binding is necessary to make `this` work in the callback
		    this.handleClick = this.handleClick.bind(this);
		  }

	
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){
		fetch('http://pessoa.local.com')
		.then(response=>response.json())
		.then(parsedJSON => console.log(parsedJSON.results))
		.catch(error => console.log('parsing failed', error));
	}
	
	  handleClick() {
		  this.fetchData();
		  }

	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.handleClick}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
