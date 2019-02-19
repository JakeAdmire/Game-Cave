import React, { Component } from 'react';
import './Popup.css';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closePopup = () => {
    this.props.setPopup( false );
  }

  render() {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <button className="close" onClick={this.closePopup}>X</button>
          <article className="text-container">
            <h3>{this.props.currentTitle}</h3>
            <h4>{this.props.currentScore}</h4>
            <h4>{this.props.currentMulti}</h4>
            <h4>{this.props.currentPlatforms}</h4>
            <h4>{this.props.currentGenres}</h4>
          </article>
          <section>
            <img src={this.props.currentImage} />
          </section>
        </div>
      </div>
    )
  }
}