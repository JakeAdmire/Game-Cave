import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  handleChange = event => {
    this.setState({SOMETHING: SOMETHING})
  }
  searchTitles() {

  }
  render() {
    return(
      <div className="search-bar">
        <form>
          <input onChange={SOMETHING}/>
        </form>
      </div>
    )
  }
}