import React, { Component } from 'react';

export default class MultiBar extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  handleToggle = () => {
    if (this.props.multiplayerToggle === null) { this.props.updateState({ multiplayerToggle: true }) } 
    if (this.props.multiplayerToggle === true) { this.props.updateState({ multiplayerToggle: false }) }
    if (this.props.multiplayerToggle === false) { this.props.updateState({ multiplayerToggle: null }) }
  }
  render() {
    return (
      <div className="multi-bar search-section">
          <button className="button" onClick={this.handleToggle}> MULTIPLAYER</button>
      </div>
    )
  }
}