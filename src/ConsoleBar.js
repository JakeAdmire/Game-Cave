import React, { Component } from 'react';
import './ConsoleBar.css';

// Requires 'state' to keep track of consoles the user selects?
export default class ConsoleBar extends Component {
  constructor() {
    super();
    this.state = { platformsToFilter: [] };
  }
  updatePlatforms = () => {
    let checked = []
    const checkboxes = document.querySelectorAll('.platformCheckBox:checked')
    checkboxes.forEach((elem) => {
        checked.push(elem.value)
    })
    this.setState({platformsToFilter: checked});
    // this.props.dataUP
    }
  render() {
    return(
      <div className="console-bar search-section">
        <button className="button">PLATFORM</button>
      </div>
    )
  }
}
