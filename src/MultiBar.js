import React, { Component } from 'react';
import './MultiBar.css';

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      MULTIPLAYER: FALSE
    }
  }
  handleToggle = event => {
    event.preventDefault();
    this.props.DOSOMETHING(this.state.SOMETHING);
  }
  render() {
    return (
      <form>
        <button onClick={this.handleToggle}> MULTIPLAYER</button>
      </form>
    )
  }
}