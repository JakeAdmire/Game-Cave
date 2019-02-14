import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  handleChange = event => {
    this.setState({SOMETHING: 0})
  }
  searchTitles() {

  }
  render() {
    return(
      <div className="search-bar search-section">
        <form className="search-form">
          <input placeholder="Search a game title!" className="search" onChange={this.handleChange}/>
          <div className="clear-search">x</div>
        </form>
      </div>
    )
  }
}