import React, {Component} from 'react';
import './LuckyBar.css';

export default class LuckyBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getLucky() {
    console.log("these are the games:", this.props.games);
  }
render() {
  return(
    <div className="lucky-bar search-section">
      <button className="button lucky random-all" onClick={this.props.getLucky}>Random from All</button>
      <button className="button lucky random-filter" onClick={this.props.randomFilter}>Random from Filters</button>
    </div>
  )}
}