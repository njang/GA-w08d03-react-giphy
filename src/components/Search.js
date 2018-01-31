import React, { Component } from 'react';

class Search extends Component {
	constructor(){
    super()
    this.state = {query: ""}
  }

  render() {
    return (
      <div className="Search">
      	<form onSubmit={ this.props.handleFormSubmit } >
      		<input type="text" onChange={ this.props.handleFormInput } />
      		<button type="submit" >Search</button>
      	</form>
      </div>
    );
  }
}

export default Search;
