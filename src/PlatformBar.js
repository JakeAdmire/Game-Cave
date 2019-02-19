import React, { Component } from 'react';
import CheckBox from './CheckBox.js';

export default class PlatformBar extends Component {
  constructor(props) {
    super(props);
    this.state = {showPlatforms: false};
  }
  togglePlatforms = () => {
    this.state.showPlatforms ? 
      (this.setState({ showPlatforms: false })) : 
      (this.setState({ showPlatforms: true }));
    }
  render() {
    let hidePlatforms = "";
    this.state.showPlatforms ? 
      (hidePlatforms = "platform-check") : 
      (hidePlatforms = "platform-check hide");
    let platforms = this.props.platforms.sort();
    return (
      <div className="console-bar search-section">
          <form className={hidePlatforms}>
            {
              platforms.map((val, i) => {
                return <CheckBox name={val}
                  updateChecks= {this.props.updateChecks}
                  class="platformsToFilter check-box"
                  key={i} />
              })
            }
          </form>
        <button onClick={this.togglePlatforms} className="button">PLATFORM</button>
      </div>
    )
  }
}
