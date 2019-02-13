import React, {Component} from 'react';

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
      <form>
        <input onChange={SOMETHING}/>
      </form>
    )
  }
}