import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  updateText = event => {
    let searchText = event.target.value.toLowerCase()
    this.props.updateState({titleFilter: searchText})
  }
  render() {
    return(
      <div className="search-bar search-section">
        <input maxLength="25" placeholder="Search a game title!" className="search" onChange={this.updateText}/>
      </div>
    )
  }
}