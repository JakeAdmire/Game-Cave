import React, { Component } from 'react';
import GameCard from './GameCard';
import Popup from './Popup';
import './GameShelf.css';

export default class GameShelf extends Component {
  constructor (props) {
    super (props);
    this.state = {}
  } 
  render () {
    let filteredGames = this.props.filteredGames
  return(

    <div className= 'game-shelf'>
      <section className="popup-container">
        {// <Popup {...props}/>
        }
      </section>
      <article className='card-container'>
      {
        filteredGames.map((game, index) => {
          return(
            <GameCard {...game}
                      key={game.title}/>
          )
        })
      }
      </article>
    </div>
  )
}
}