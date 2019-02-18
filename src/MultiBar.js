import React, { Component } from 'react';
import './MultiBar.css';

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  handleToggle = event => {
    event.preventDefault();
  }
  render() {
    return (
      <div className="multi-bar search-section">
        <form>
          <button className="button" onClick={this.handleToggle}> MULTIPLAYER</button>
        </form>
      </div>
    )
  }
}