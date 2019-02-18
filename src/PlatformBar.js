import React, { Component } from 'react';
import CheckBox from './CheckBox'
import './PlatformBar.css';

// Requires 'state' to keep track of consoles the user selects?
export default class ConsoleBar extends Component {
  constructor(props) {
    super(props);
    this.state = { platformsToFilter: [] };
  }
  updatePlatforms = () => {
    let checked = [];
    const checkboxes = document.querySelectorAll('.platform-check-box')
    checkboxes.forEach((elem) => {
      if (elem.checked === true) {
        checked.push(elem.id)
      }
    })
    console.log(checked)
    this.props.updateState({platformsToFilter: checked})
  }
  render() {
    return (
      <div className="console-bar search-section">
        <div className="platform-check">
          <form onChange={this.updatePlatforms} className="platform-check">
            {
              this.props.platforms.map((val, i) => {
                return <CheckBox {...this.props}
                  name={val}
                  class="platform-check-box"
                  key={i} />
              })
            }
          </form>
        </div>
        <button className="button">PLATFORM</button>
      </div>
    )
  }
}
