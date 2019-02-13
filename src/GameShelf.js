import React from 'react';
import Gamecard from './GameCard';
import './GameShelf.css';

export default function Gameshelf(props) {
  return(
    <div className= 'Gameshelf'>
      {
        props.gamecard.filter((gamecard, index) => {
          console.log("In Gamecard");
          return(
            <Gamecard  gamecard= {gamecard}/>
          )
        })
      }
    </div>
  )
}