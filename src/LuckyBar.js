import React, {Component} from 'react';

export default class LuckyBar extends Component {
  handleLucky = () => {
    this.props.updateState({isLucky: this.props.isLucky ? false : true});
  }
  render() {
    let buttonSelector = this.props.isLucky ? "button lucky current" : "button lucky";
    return(
      <div className="lucky-bar search-section">
        <button className={buttonSelector} onClick={this.handleLucky}>RANDOM</button>
      </div>
    )
  }
}