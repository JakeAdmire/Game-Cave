import React from 'react';
import './LuckyBar.css';
// import './button.css';

export default function LuckyBar(props) {
  console.log(props)
  return(
    <div className="lucky-bar search-section">
      <button className="random-all" onClick={props.filter}>Random from All</button>
      <button className="random-filter" onClick={props.randomFilter}>Random from Filters</button>
    </div>
  )
}