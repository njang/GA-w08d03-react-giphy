import React, { Component } from 'react';
// import Search from './components/Search';
import SearchContainer from './containers/SearchContainer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<h1>Giphy Lab</h1>
      	<SearchContainer />
      </div>
    );
  }
}

export default Home;
