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
      currentImage: '',
      titleFilter: '',
      genres: []
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
  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState, this.state)
    if (prevProps !== this.props) {
    this.setState({
      titleFilter: this.props.titleFilter,
      genres: this.props.genresToFilter
    })
  }
}
  filterGamesTitle = (games) => {
    return games.filter(game => game.title.toLowerCase().includes(this.state.titleFilter))
  }

  filterByKey = (games, key) => {
    return games.filter(val => {
        return this.state[key].every(elem => val[key].includes(elem))
    })
  } 
    //   games = games.filter(val => {
  //     return this.state.genresToFilter.every(elem => val.genres.includes(elem))
  //   })
  render () {
    let games = this.props.games;
    if(this.state.titleFilter){
      games = this.filterGamesTitle(games)
    }
    if (this.state.genres.length){
      games = this.filterByKey(games, 'genres')
    }
    const popupOverlay = 
      ( this.state.popup && <Popup {...this.state}
        setPopup={this.statePopup}/> )
  return(
    <div className= 'game-shelf'>
      {popupOverlay}
      <article className='card-container'>
        { games.map((game, index) => {
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