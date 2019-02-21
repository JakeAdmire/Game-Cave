import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGenre: false,
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
            <button className="showGame" onClick={() => {this.setState({showGenre: false})}}>Show Game</button>
            <div className="scroll">
              {this.state.genreData.map(genre => {
                return (
                  <div className="genre-info">
                    <h3>{genre.genre}</h3>
                    <p>{genre.description}</p>
                  </div>
                ) 
              })}
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="popup-overlay">
        <div className="popup">
          <button className="close" onClick={this.closePopup}>X</button>
          <section className="popup-img" style={styleImg}></section>
          <article className="popup-text">
            <h3 className="popup-title">{(this.props.currentTitle).toUpperCase()}</h3>
            <h4 className="popup-score">
              <p>MetaCritic</p>
              <p>{this.props.currentScore}</p>
              <p>SCORE</p>
            </h4>
            <h4 className="popup-genre">{this.props.currentGenres.join(", ")}</h4>
            <button className="showGenre" onClick={this.getGenreDescript}>Show Genre Info..</button>
            <h4 className="popup-plat">
              <p>Available On:</p>
              <p>{this.props.currentPlatforms.join(", ")}</p>
            </h4>
            <h4 className="popup-multi">
              <p>Multiplayer:</p>
              <p>{(this.props.currentMulti).toString().toUpperCase()}</p>
            </h4>
          </article>
        </div>
      </div>
    )
  }
}



          
          
              