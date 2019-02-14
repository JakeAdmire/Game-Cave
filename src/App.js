import React, { Component } from 'react';
import Header from './Header.js';
import GameShelf from './GameShelf.js';
import Footer from './Footer.js';
import './App.css';


// componentDidMount( ) {
//   fetch('http://whateverly-datasets.herokuapp.com/api/v1/games1811')
//     .then(response => response.JSON())
//     .then(games => {
//       this.setState({
//         games: games.result
//       })
//     })
//     .catch(error => {
//       throw new Error(error)
//     })
//     fetch('http://whateverly-datasets.herokuapp.com/api/v1/genres1811')
//     .then(response => response.JSON())
//     .then(genres => {
//       this.setState({
//         genres: genres.result
//       })
//     })
//     .catch(error => {
//       throw new Error(error)
//     })
// }

const gameCardArr = [
  {
    "name": "The Last of Us",
    "platforms": ["Playstation 3", "Playstation 4"],
    "genre": ["Action", "Adventure", "Horror"],
    "multiplayer": true,
    "metaScore": 95,
    "img": "https://i.ebayimg.com/images/g/ZX4AAOSw1vlUrlTm/s-l300.jpg"
  },
  {
    "name": "Super Smash Bros. Ultimate",
    "platforms": ["Switch"],
    "genre": ["Beat-'Em-Up", "Fighting"],
    "multiplayer": true,
    "metaScore": 93,
    "img": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
  },
  {
    "name": "The Binding of Isaac: Rebirth",
    "platforms": ["PC", "Playstation 4", "Xbox One"],
    "genre": ["Rouge-like", "Horror", "Strategy"],
    "multiplayer": false,
    "metaScore": 83,
    "img": "https://static.giantbomb.com/uploads/scale_small/8/87790/2768049-box_tobir.jpg"
  },
  {
    "name": "The Last of Us",
    "platforms": ["Playstation 3", "Playstation 4"],
    "genre": ["Action", "Adventure", "Horror"],
    "multiplayer": true,
    "metaScore": 95,
    "img": "https://i.ebayimg.com/images/g/ZX4AAOSw1vlUrlTm/s-l300.jpg"
  },
  {
    "name": "Super Smash Bros. Ultimate",
    "platforms": ["Switch"],
    "genre": ["Beat-'Em-Up", "Fighting"],
    "multiplayer": true,
    "metaScore": 93,
    "img": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
  },
  {
    "name": "The Binding of Isaac: Rebirth",
    "platforms": ["PC", "Playstation 4", "Xbox One"],
    "genre": ["Rouge-like", "Horror", "Strategy"],
    "multiplayer": false,
    "metaScore": 83,
    "img": "https://static.giantbomb.com/uploads/scale_small/8/87790/2768049-box_tobir.jpg"
  }
]
class App extends Component {
  constructor () {
    super();
    this.state = { 
      value: 0,
      genres: [],
      platforms: [],
      genresToFilter: [],
      platformsToFilter: [],
      multiplayer: [null, true, false]
     }
  }
  componentWillMount(){
    let filters = [];
    let filtersTwo = [];
    gameCardArr.forEach(game => {
      game.platforms.forEach(val => {
        if (!filters.includes(val)){
          filters.push(val)
        }
      })
    })
    gameCardArr.forEach(game => {
      game.genre.forEach(val => {
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
    console.log("platforms", this.state.platforms);
    console.log("genre", this.state.genres);
    return (
      <div className="app">
        <Header />
        <GameShelf 
          games={gameCardArr}/>
        <Footer {...this.state}
                updateState={this.updateState}/>
      </div>
    );
  }
}

export default App;