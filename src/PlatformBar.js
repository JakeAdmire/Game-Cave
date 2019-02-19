import React, { Component } from 'react';
import CheckBox from './CheckBox'
import './styles/PlatformBar.css';

// Requires 'state' to keep track of consoles the user selects?
export default class ConsoleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //! FIX: Cant use query selector here
  // checkPlatforms = () => {
  //   let checked = [];
  //   const checkboxes = document.querySelectorAll('.platform-check-box')
  //   checkboxes.forEach((elem) => {
  //     if (elem.checked === true) {
  //       checked.push(elem.id)
  //     }
  //   })
  //   this.updatePlatforms(checked);
  // }
  // updatePlatforms = (checked) => {
  //   this.props.updateState({platformsToFilter: checked})
  // }
  render() {
    return (
      <div className="console-bar search-section">
          <form className="platform-check">
            {
              this.props.platforms.map((val, i) => {
                return <CheckBox name={val}
                  updateChecks= {this.props.updateChecks}
                  class="platformsToFilter check-box"
                  key={i} />
              })
            }
          </form>
        <button className="button">PLATFORM</button>
      </div>
    )
  }
}
