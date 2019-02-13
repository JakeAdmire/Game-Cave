import React, { Component } from 'react';
import './GameCard.css';

export default class GameCard extends Component {
  constructor() {
    super();
    this.state = { expanded: false };
  }
  render() {
    return(
      <div class="game-card">
        <h4>Game Title</h4>   
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