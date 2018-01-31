import React, { Component } from 'react';

class Search extends Component {
  handleButtonClick(e) {
    // It is good practice to still prevent default behavior
    e.preventDefault();
    console.log("Searched!");
  }

  render() {
    return (
      <div className="Search">
      	<form>
      		<input type="text" />
      		<button type="submit" onClick={(e) => this.handleButtonClick(e)}>Search</button>
      	</form>
      </div>
    );
  }
}

export default Search;
