import React from 'react';
import GameCard from './GameCard';
import './GameShelf.css';

export default function Gameshelf(props) {
  return(
    <div className= 'Gameshelf'>
      <h1>GameShelf</h1>
      <GameCard/>
    </div>
  )
}
      // {
      //   props.gamecard.filter((gamecard, index) => {
      //     console.log("In Gamecard");
      //     return(
      //       <Gamecard  gamecard= {gamecard}/>
      //     )
      //   })
      // }