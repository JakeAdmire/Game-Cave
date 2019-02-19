import React, { Component } from 'react';
import Header from './Header.js';
import GameShelf from './GameShelf.js';
import Footer from './Footer.js';
import './styles/App.css';

export default class App extends Component {
  constructor () {
    super();
    this.state = { 
      games: [],
      genres: [],
      genresToFilter: [],
      mainGenres: [],
      multiplayer: [null, true, false],
      platforms: [],
      platformsToFilter: [],
      titleFilter: '',
      isLucky: false
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
  updateChecks = (event) => {
    const key = event.target.classList[0]
    let checks= this.state[key];
    const add = () => checks.push(event.target.id)
    const remove = () => checks.splice(checks.indexOf(event.target.id), 1)
    event.target.checked ? add() : remove();
    this.setState({[key]: checks})
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
                updateChecks= {this.updateChecks}
                updateState= {this.updateState}/>
      </div>
    );
  }
}