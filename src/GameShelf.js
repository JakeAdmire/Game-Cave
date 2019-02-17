import React, { Component } from 'react';
import GameCard from './GameCard';
import Popup from './Popup';
import './GameShelf.css';

export default class GameShelf extends Component {
  constructor (props) {
    super (props);
    this.state = {
      popup: false,
      currentTitle: '',
      currentScore: 0,
      currentGenres: [],
      currentPlatforms: [],
      currentMulti: false,
      currentImage: ''
    }
  }
  statePopup = (popup, title, score, genre, plat, multi, img) => {
    this.setState(
      {
        popup: popup,
        currentTitle: title,
        currentScore: score,
        currentGenres: genre,
        currentPlatforms: plat,
        currentMulti: multi,
        currentImage: img
      }
    )
  }

  render () {
    let filteredGames = this.props.filteredGames
    const popupOverlay = 
      ( this.state.popup && <Popup {...this.state}
        setPopup={this.statePopup}/> )
  return(
    <div className= 'game-shelf'>
      {popupOverlay}
      <article className='card-container'>
        { filteredGames.map((game, index) => {
            return(
              <GameCard {...game}
                setPopup={this.statePopup}
                key={game.title}/>
            )
          })
        }
        </article>
      </div>
    )
  }
}