import React from 'react';
import GameCard from './GameCard';
import './GameShelf.css';

export default function Gameshelf(props) {
  return(
    <div className= 'game-shelf'>
      <article className='card-container'>
      {
        props.games.map((game, index) => {
          console.log("In Gamecard");
          console.log(game)
          return(
            <GameCard  game= {game}/>
          )
        })
      }
      </article> 
    </div>
  )
}