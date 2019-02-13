import React, { Component } from 'react';
import Header from './Header.js';
import GameShelf from './GameShelf.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = { value: 0 }
  }
  render() {
    return (
      <div class="app">
        <Header />
        <GameShelf />
        <Footer />
      </div>
    );
  }
}

export default App;