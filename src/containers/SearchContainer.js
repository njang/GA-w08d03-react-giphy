import React, { Component } from 'react';
import Search from '../components/Search';

class SearchContainer extends Component {
	constructor(props){
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
  }
  handleFormSubmit(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    console.log(this.state.query);
  }
  handleFormInput(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
    	<div className="searchContainer">
	    	<Search 
	    		handleFormSubmit={this.handleFormSubmit}
	    		handleFormInput={this.handleFormInput}    		
	    	/>
    	</div>
    );
  }
}

export default SearchContainer;
