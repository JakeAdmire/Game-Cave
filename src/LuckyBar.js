import React, {Component} from 'react';

export default class LuckyBar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }
  handleLucky = () => {
    this.props.updateState({isLucky: this.props.isLucky ? false : true});
    this.setState({ active: this.state.active ? false : true })
  }
  render() {
    let buttonSelector = this.state.active ? "button lucky current" : "button lucky";
    return(
      <div className="lucky-bar search-section">
        <button className={buttonSelector} onClick={this.handleLucky}>RANDOM</button>
      </div>
    )
  }
}