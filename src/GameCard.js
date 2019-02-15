import React, { Component } from 'react';
import './GameCard.css';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    let inLibraryStatus = " + "
    const style = { backgroundImage: 'url(' + this.props.img + ')', backgroundSize: 'cover' };
    return(
      <div className="game-card">
        <section className="img">
          <div className="gamecover" style={style}></div>
        </section>
        <section className="text-container">
          <h4>{this.props.name}</h4>
        </section>
        <section className="btn">
          <button className="add-to-library"> {inLibraryStatus} </button>
        </section>
      </div>
    )
  }
}