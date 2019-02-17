import React from 'react';
import GameCard from './GameCard';
import Popup from './Popup';
import './GameShelf.css';

export default function Gameshelf(props) {
  return(
    <div className= 'game-shelf'>
      <section className="popup-container">
        {// <Popup {...props}/>
        }
      </section>
      <article className='card-container'>
      {
        props.games.map((game, index) => {
          return(
            <GameCard {...game}/>
          )
        })
      }
      </article>
    </div>
  )
}