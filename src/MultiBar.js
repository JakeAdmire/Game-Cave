import React, { Component } from 'react';
import './MultiBar.css';

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      MULTIPLAYER: false
    }
  }
  handleToggle = event => {
    event.preventDefault();
  }
  render() {
    return (
      <div className="multi-bar">
        <form>
          <button onClick={this.handleToggle}> MULTIPLAYER</button>
        </form>
      </div>
    )
  }
}