import React, { Component } from 'react';
import './GameCard.css';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    return(
      <div className="game-card">
        <section className="img">
          <img className="gamecover" src={this.props.img} alt="not avail" />
        </section>
        <section className="text-container">
          <h4>{this.props.name}</h4>
        </section>
        <section className="btn">
          <button className="add-to-library"> + </button>
        </section>
      </div>
    )
  }
}