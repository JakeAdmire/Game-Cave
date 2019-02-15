import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handleChange = event => {
    let searchText = event.target.value.toLowerCase()
    this.props.updateState({filteredGames: this.filterGames(searchText)})
  }
  filterGames (text) {
    if (text) {
    return this.props.games.filter(game => game.title.toLowerCase().includes(text))
    } else {
      return this.props.games
    }
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