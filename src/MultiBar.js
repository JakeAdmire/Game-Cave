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
    this.props.DOSOMETHING(this.state.SOMETHING);
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