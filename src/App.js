import React, { Component } from 'react';
import Header from './Header.js';
import GameShelf from './GameShelf.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = { 
      games: [],
      mainGenres: [],
      genres: [],
      platforms: [],
      genresToFilter: [],
      platformsToFilter: [],
      multiplayer: [null, true, false]
     }
  }
  componentDidMount = () => {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/games1811')
      .then(response => response.json())
      .then(games => {
        this.setState({
          games: games.games1811
        })
      })
      .then(() => this.getFilters())
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
      .then(() => this.getFilters())
      .catch(error => {
        throw new Error(error)
      })
  }
  getFilters = () => {
    let filters = [];
    let filtersTwo = [];
    this.state.games.forEach(game => {
      game.platforms.forEach(val => {
        console.log("in filter1")
        if (!filters.includes(val)){
          filters.push(val)
        }
      })
    })
    this.state.games.forEach(game => {
      game.genres.forEach(val => {
        if (!filtersTwo.includes(val)){
          filtersTwo.push(val)
        }
      })
    })
    this.setState({platforms: filters})
    this.setState({genres: filtersTwo})
                  
  }
  updateState = (newState) => {
    this.setState(newState);
  }
 
  render() {
    console.log("games", this.state.games);
    console.log("plat", this.state.platforms);
    console.log("genre", this.state.genres);
    return (
      <div className="app">
        <Header />
        <GameShelf 
          games={this.state.games}/>
        <Footer {...this.state}
                updateState={this.updateState}/>
      </div>
    );
  }
}

export default App;