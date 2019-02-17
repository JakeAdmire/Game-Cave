import React, { Component } from 'react';
import './Popup.css';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closePopup = () => {
    this.props.setPopup()
  }

  render() {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <button className="close" onClick={this.closePopup}>X</button>
            <h2>Test</h2>
          <section className="text-container">
            <h4>{this.props.title}</h4>
          </section>
        </div>
      </div>
    )
  }
}