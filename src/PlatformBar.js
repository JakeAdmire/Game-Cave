import React, { Component } from 'react';
import CheckBox from './CheckBox'
import './styles/PlatformBar.css';

export default class ConsoleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {showPlatforms: false};
  }
  togglePlatforms = () => {
        if (this.state.showPlatforms) {
            this.setState({showPlatforms: false})
        } else {
            this.setState({ showPlatforms: true });   
        }
    }
  render() {
    let hidePlatforms = "";
        if (this.state.showPlatforms) {
            hidePlatforms = "platform-check";
        } else {
            hidePlatforms = "platform-check hide"
        }
    return (
      <div className="console-bar search-section">
          <form className={hidePlatforms}>
            {
              this.props.platforms.map((val, i) => {
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
