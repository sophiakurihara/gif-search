import React from 'react';

function SearchForm(props) {

  const onSearchChange = e => {
  //  Update state
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  }

    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
}

export default SearchForm;