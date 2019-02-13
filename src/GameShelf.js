import React, {Component} from 'react';
import Gamecard from './GameCard';
import './GameShelf.css';

export default function Gameshelf(props) {
  return(
    <div className= 'Gameshelf'>
      <div className=''
      {
        props.gamecard.filter((gamecard, index) => {
          console.log("In Gamecard");
          return(
            <gamecard />
          )
        })
      }
    </div>
  )
}