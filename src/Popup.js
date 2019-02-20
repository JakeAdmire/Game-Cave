import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGenres: false,
      genreData: []
    };
  }

  closePopup = () => {
    this.props.setPopup( false );
  }

  getGenreDescript = () => {
    let allGenres = this.props.mainGenres.filter(ea => {
      return this.props.currentGenres.includes(ea.genre);
    });
    this.setState({genreData: allGenres, showGenre: true})
  }

  render() {
    const styleImg = { backgroundImage: 'url(' + this.props.currentImage + ')', backgroundSize: 'cover',  };
    if(this.state.showGenre) {
      return (
        <div className="popup-overlay">
          <div id="genre" className="popup">
            <button className="close" onClick={this.closePopup}>X</button>
              {this.state.genreData.map(genre => {
                return (
                  <div>
                    <h3>{genre.genre}</h3>
                    <p>{genre.description}</p>
                  </div>) 
                })}
              <button className="showGame" onClick={() => {this.setState({showGenre: false})}}>Show Game</button>
          </div>
        </div>
      )
    }
    return (
      <div className="popup-overlay">
        <div className="popup">
        <button className="close" onClick={this.closePopup}>X</button>
          <div className="popup-img-container">
            <section className="popup-img" style={styleImg}></section>
          </div>
          <article className="popup-text-container">
            <h3 className="popup-title">Game Title: 
              <span className="value"> {this.props.currentTitle}</span></h3>
            <h4 className="popup-score">MetaCritic Score: 
              <span className="value"> {this.props.currentScore}</span></h4>
            <h4 className="popup-multi">Multiplayer: 
              <span className="value"> {(this.props.currentMulti).toString()}</span></h4>
            <h4 className="popup-plat">Available On: 
              <span className="value"> {this.props.currentPlatforms.join(" - ")}</span></h4>
            <h4 className="popup-genre">Genres: 
              <span className="value genre"> {this.props.currentGenres.join(" - ")}</span></h4>
              <button className="showGenre" onClick={this.getGenreDescript}>Show Genre Details</button>
          </article>
        </div>
      </div>
    )
  }
}