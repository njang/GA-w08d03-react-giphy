import React, { Component } from 'react';
import Search from '../components/Search';
import Results from '../components/Results';

class SearchContainer extends Component {
	constructor(props){
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);

    this.state = {
      searched: false // initialize this.state.searched to be false
    }

  }
  handleFormSubmit(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    console.log(this.state.query);
    this.setState({ searched: true });
  }
  handleFormInput(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
    	<div className="searchContainer">
    		{ !this.state.searched ? 
    			<Search handleFormSubmit={this.handleFormSubmit} handleFormInput={this.handleFormInput} /> :
    			<Results />
    		}
    	</div>
    );
  }
}

export default SearchContainer;
