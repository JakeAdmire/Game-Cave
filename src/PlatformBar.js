import React, { Component } from 'react';
import CheckBox from './CheckBox.js';

export default class PlatformBar extends Component {
  constructor(props) {
    super(props);
    this.state = {showPlatforms: false, mouseIn: false};
  }
  togglePlatforms = () => {
    this.setState({showPlatforms: this.state.showPlatforms ? false : true});
  }
  toggleMouse = () => {
    this.setState({ mouseIn: this.state.mouseIn ? false : true });
  }
  focusLost = () => {
    this.setState({ showPlatforms: this.state.mouseIn ? true : false })
  }
  render() {
    console.log('platform', this.state.showPlatforms);
    let hidePlatforms = this.state.showPlatforms ? "platform-check" :  "platform-check hide";
    let buttonSelector = this.props.platformsToFilter.length ? "button current" : "button";
    let platforms = this.props.platforms.sort();
    return (
      <div onBlur={this.focusLost} onMouseEnter={this.toggleMouse} onMouseLeave={this.toggleMouse} className="console-bar search-section">
          <form onBlur={this.focusLost} tabIndex="0" className={hidePlatforms}>
            {
              platforms.map((val, i) => {
                return <CheckBox name={val}
                  updateChecks= {this.props.updateChecks}
                  class="platformsToFilter check-box"
                  key={i} />
              })
            }
          </form>
        <button onClick={this.togglePlatforms} className={buttonSelector}>PLATFORM</button>
      </div>
    )
  }
}
