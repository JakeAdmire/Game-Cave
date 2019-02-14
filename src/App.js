import React, { Component } from 'react';
import Header from './Header.js';
import GameShelf from './GameShelf.js';
import Footer from './Footer.js';
import './App.css';

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
    this.state = { value: 0,
     }
  }
  render() {
    console.log(gameCardArr);
    return (
      <div className="app">
        <Header />
        <GameShelf 
          games={gameCardArr}/>
        <Footer />
      </div>
    );
  }
}

export default App;