import React from 'react';
import './LuckyBar.css';

export default function LuckyBar(props) {
  return(
    <div className="lucky-bar">
      <button className="random-all" onClick={props.randomAll}>Random from All</button>
      <button className="random-filter" onClick={props.randomFilter}>Random from Filters</button>
    </div>
  )
}