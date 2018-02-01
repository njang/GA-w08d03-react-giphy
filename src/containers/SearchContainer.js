import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';

class SearchContainer extends Component {
	constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searched: false // initialize this.state.searched to be false
    }

  }
  handleSubmit(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    console.log(this.state.query);
    this.setState({ searched: true });
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
    	<div className="searchContainer">
    		{ !this.state.searched ? 
    			<Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> :
    			<Results />
    		}
    	</div>
    );
  }
}

export default SearchContainer;
