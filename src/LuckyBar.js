import React, {Component} from 'react';

export default class LuckyBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleLucky = () => {
    this.props.updateState({isLucky: this.props.isLucky ? false : true});
  }
render() {
  return(
    <div className="lucky-bar search-section">
      <button className="button lucky random-all" onClick={this.handleLucky}>RANDOM</button>
    </div>
  )}
}