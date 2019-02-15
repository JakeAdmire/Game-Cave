import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleChange = event => {
    console.log(event.target.value)
    this.setState({text: event.target.value})
    this.props.updateState({titleToFilter: this.state.text})
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