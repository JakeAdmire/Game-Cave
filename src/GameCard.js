import React, { Component } from 'react';
import './GameCard.css';

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    return(
      <div class="game-card">
        <section className="img">
          <img className="gamecover" src={this.props.img} />
        </section>
        <section className="text-container">
          <h4>{this.props.name}</h4>
        </section>
        <section className="btn">
          <button> + </button>
        </section>
      </div>
    )
  }
}
    // if (!this.state.expanded) {
    //     <div>
    //       <img src={/*Game thumbnail*/} />
    //       <button onClick={/*Expand Card*/}>More Info</button>
    //       <button onClick={/*'Add to Library'*/}>+</button>
    //     </div>
    //   )
    // } else {
    //   return(
    //     <div>
    //       <img src={/*Game thumbnail*/} />
    //       <h4>Game Title</h4>
    //       <p>{/*Genres*/}</p>
    //       <p>{/*Consoles*/}</p>
    //       <p>{/*Multiplayer*/}</p>
    //       <button onClick={/*Shrink card*/}>X</button>
    //       <button onClick={/*'Add to Library'*/}>+</button>
    //     </div>