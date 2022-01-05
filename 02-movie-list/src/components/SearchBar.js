import React from "react";

class SearchBar extends React.Component {
  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-row mb-5'>
          <div className='col-12'>
            <input
              type='text'
              className='form-control'
              placeholder='Search movie'
              onChange={this.props.search}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
