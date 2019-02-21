import React, { Component } from 'react';
import GameCard from './GameCard';
import Popup from './Popup';

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
      genres: [],
      platforms: [],
      isLucky: false,
      isMulti: null
    }
  }
  statePopup = (popup, title, score, genre, plat, multi, img) => {
    this.setState(
      {
        currentGenres: genre,
        currentImage: img,
        currentMulti: multi,
        currentPlatforms: plat,
        currentScore: score,
        currentTitle: title,
        popup: popup
      }
    );
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
    this.setState({
      titleFilter: this.props.titleFilter,
      genres: this.props.genresToFilter,
      platforms: this.props.platformsToFilter,
      isLucky: this.props.isLucky,
      isMulti: this.props.multiplayerToggle
    });
  }
}
  filterGamesTitle = (games) => {
    return games.filter(game => game.title.toLowerCase().includes(this.state.titleFilter));
  }

  filterByKey = (games, key) => {
    return games.filter(val => {
        return this.state[key].every(elem => val[key].includes(elem));
    })
  } 
  filterByMulti = (games) => {
    return games.filter(game => game.multiplayer === this.state.isMulti);
  }
  shuffle = (games) => {
    let randoArr = games.sort(() => 0.5 - Math.random());
    return [randoArr[0]];
	}
	
	displayGames = (games) => {
    if (games.length) {
  		games = games.sort((a, b) => a.title.localeCompare(b.title));
  		return games.map((game) => {
  			return (
  				<GameCard {...game}
  					setPopup={this.statePopup}
  					key={game.title} />
  			);
  		});
    } else {
      return (
        <h1 className="empty-shelf">NO RESULTS FOUND</h1>
        )
    }
	}

  render () {
    let games = this.props.games;

    games = this.state.titleFilter ? this.filterGamesTitle(games) : games;
    games = this.state.genres.length ? this.filterByKey(games, 'genres') : games;
    games = this.state.platforms.length ? this.filterByKey(games, 'platforms') : games;
    games = this.state.isMulti !== null ? this.filterByMulti(games) : games;
    games = this.state.isLucky && games.length ? this.shuffle(games) : games;

    const popupOverlay = 
      (this.state.popup && <Popup {...this.state}
        mainGenres={this.props.mainGenres}
        setPopup={this.statePopup}/> )
  return(
    <div className= 'game-shelf'>
      {popupOverlay}
      <article className='card-container'>
        {this.displayGames(games)}
        </article>
      </div>
    )
  }
}