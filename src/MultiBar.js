import React, { Component } from 'react';

export default class MultiBar extends Component {
  constructor(props) {
    super(props)
    this.state = { multiplayerStatus: null }
  }
  handleToggle = () => {
    // convert to switch statement
    if (this.props.multiplayerToggle === null) { this.props.updateState({ multiplayerToggle: true }) } 
    if (this.props.multiplayerToggle === true) { this.props.updateState({ multiplayerToggle: false }) } 
    if (this.props.multiplayerToggle === false) { this.props.updateState({ multiplayerToggle: null }) } 
    console.log(this.props.multiplayerToggle);
  }
  render() {
    return (
      <div className="multi-bar search-section">
          <button className="button" onClick={this.handleToggle}> MULTIPLAYER</button>
      </div>
    )
  }
}

// button is clicked

// multiplayer switches between three states

