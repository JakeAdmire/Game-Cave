import React, { Component } from 'react';

export default class MultiBar extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  handleToggle = () => {
    if (this.props.multiplayerToggle === null) { this.props.updateState({ multiplayerToggle: true }) } 
    else if (this.props.multiplayerToggle === true) { this.props.updateState({ multiplayerToggle: false }) }
    else { this.props.updateState({ multiplayerToggle: null }) }
  }
  render() {
    let multiplayerStatus = "ANY";
    if (this.props.multiplayerToggle) { multiplayerStatus = "TRUE" }
    if (this.props.multiplayerToggle === false) { multiplayerStatus = "FALSE" };
    return (
      <div className="multi-bar search-section">
          <button className="button multi-all" onClick={this.handleToggle}> MULTIPLAYER
            <p>{multiplayerStatus}</p>
          </button>
      </div>
    )
  }
}