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
          <input maxLength="25" placeholder="Search a game title!" className="search" onChange={this.handleChange}/>
          <div className="clear-search">
            <div className="left-line"></div>
            <div className="right-line"></div>
          </div>
        </form>
      </div>
    )
  }
}