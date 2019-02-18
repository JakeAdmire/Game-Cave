import React, { Component } from 'react';
import Header from './Header.js';
import GameShelf from './GameShelf.js';
import Footer from './Footer.js';
import './App.css';

export default class App extends Component {
  constructor () {
    super();
    this.state = { 
      games: [],
      mainGenres: [],
      genres: [],
      platforms: [],
      genresToFilter: [],
      platformsToFilter: [],
      filteredGames: [],
      multiplayer: [null, true, false],
      titleFilter: '',
      genresToFilter: []
     }
  }
  componentDidMount = () => {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/games1811')
      .then(response => response.json())
      .then(games => {
        this.setState({
          games: games.games1811,
          filteredGames: games.games1811
        })
      })
      .then(() => this.getFilters('platforms'))
      .then(() => this.getFilters('genres'))
      .catch(error => {
        throw new Error(error)
      })
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/genres1811')
      .then(response => response.json())
      .then(genres => {
        this.setState({
          mainGenres: genres.genres1811
        })
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  getFilters = (key) => {
    let filters = [];
    this.state.games.forEach(game => {
      game[key].forEach(val => {
        if (!filters.includes(val)){
          filters.push(val)
        }
      })
    })
    this.setState({[key]: filters})
  }
  updateState = (newState) => {
    this.setState(newState);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <GameShelf {...this.state}/>
        <Footer {...this.state}
                updateState={this.updateState}/>
      </div>
    );
  }
}