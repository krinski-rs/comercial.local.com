import React from 'react';
import Content from './Content';
import NaviBar from './NaviBar';


class Wrapper extends React.Component {
  render() {
    return (
    	<div id="wrap">
    		<NaviBar />
    		<Content />
    	</div>
    );
  }
}

export default Wrapper;
