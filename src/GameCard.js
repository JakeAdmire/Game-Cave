import React, { Component } from 'react';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      gameTitle: this.props.title,
      gameScore: this.props.metaScore,
      gameGenres: this.props.genres,
      gamePlatforms: this.props.platforms,
      gameMulti: this.props.multiplayer,
      gameImage: this.props.img,
      inLibrary: false
     }
  }
  toggleInfo = () => {
    console.log(this.state.gameTitle)
    this.props.setPopup(
      true,
      this.state.gameTitle,
      this.state.gameScore,
      this.state.gameGenres,
      this.state.gamePlatforms,
      this.state.gameMulti,
      this.state.gameImage
    )
  }
  changeLibraryStatus = () => {
    this.setState({ inLibrary: this.state.inLibrary ? false : true });
  }
  render() {
    let libraryButtonClass = "add-to-library " + this.state.inLibrary;
    let inLibraryStatus = " + ";
    inLibraryStatus = this.state.inLibrary ? " - " : " + ";
    const style = { backgroundImage: 'url(' + this.props.img + ')', backgroundSize: 'cover' };
    return(
      <div className="game-card">
        <section className="img">
          <div className="gamecover" style={style}></div>
        </section>
        <section className="text-container">
          <h4>{this.props.title}</h4>
          <p className="game-more" onClick={this.toggleInfo}>
            More Info..
          </p>
        </section>
        <section className="btn">
          <button onClick={this.changeLibraryStatus} className={libraryButtonClass}>{inLibraryStatus}</button>
        </section>
      </div>
    )
  }
}