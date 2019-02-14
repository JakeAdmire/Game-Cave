import React, { Component } from 'react';
import './ConsoleBar.css';

// Requires 'state' to keep track of consoles the user selects?
export default class ConsoleBar extends Component {
  constructor() {
    super();
    this.state = { selectedConsoles: [] };
  }
  updateConsoles = () => {

  }
  render() {
    return(
      <div className="console-bar search-section">
        <form onChange={this.updateConsoles} className="console-check">
          {/* <CheckBox props={props}/> */}
        </form>
      </div>
    )
  }
}