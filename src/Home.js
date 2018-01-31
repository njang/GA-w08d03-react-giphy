import React, { Component } from 'react';
import Search from './components/Search';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<h1>Hello World</h1>
      	<Search />
      </div>
    );
  }
}

export default Home;
