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
    const checkboxes = document.querySelectorAll('.platformCheckBox:checked')
    checkboxes.forEach((elem) => {
      checked.push(elem.value)
    })
    this.setState({ platformsToFilter: checked });
    this.props.updateState({ platformsToFilter: this.state.platformsToFilter })
  }
  render() {
    return (
      <div className="console-bar search-section">
      <div className="platform-check">
        {
          this.props.platforms.map((val, i) => {
            return <CheckBox {...this.props}
              name={val}
              class="platform-check-box"
              key={i} />
          })
        }
        </div>
        <button className="button">PLATFORM</button>
      </div>
    )
  }
}
