import React, { Component } from 'react';
import 'ConsoleBar.css';

// Requires 'state' to keep track of consoles the user selects?
export default class ConsoleBar extends Component {
  constructor() {
    super();
    this.state = { checkedItems: [] };
  }
  render() {
    return(
      <div>
        <div class="burger">
          <div class="ingredient"></div>
          <div class="ingredient"></div>
          <div class="ingredient"></div>
        </div>
        <div>
          {/*Checkboxes for consoles*/}
        </div>
      </div>
    )
  }
}