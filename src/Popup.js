import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closePopup = () => {
    this.props.setPopup( false );
    console.log(this.props.currentMulti)
  }

  render() {
    let multi = ""
    console.log(this.props.img)
    this.props.currentMulti ? multi="true" : multi="false";
    const styleImg = { backgroundImage: 'url(' + this.props.currentImage + ')', backgroundSize: 'cover',  };

    return (
      <div className="popup-overlay">
        <div className="popup">
          <div className="popup-img-container">
            <section className="popup-img" style={styleImg}></section>
          </div>
          <article className="popup-text-container">
            <button className="close" onClick={this.closePopup}>X</button>
            <h3 className="popup-title">Game Title: 
              <span className="value"> {this.props.currentTitle}</span></h3>
            <h4 className="popup-score">MetaCritic Score: 
              <span className="value"> {this.props.currentScore}</span></h4>
            <h4 className="popup-multi">Multiplayer: 
              <span className="value"> {multi}</span></h4>
            <h4 className="popup-plat">Available On: 
              <span className="value"> {this.props.currentPlatforms}</span></h4>
            <h4 className="popup-genre">Genres: 
              <span className="value"> {this.props.currentGenres}</span></h4>
          </article>
        </div>
      </div>
    )
  }
}