import React from 'react';
import './LuckyBar.css';

export default function LuckyBar(props) {
  return(
    <div className="lucky-bar search-section">
      <button className="button lucky random-all" onClick={props.filter}>Random from All</button>
      <button className="button lucky random-filter" onClick={props.randomFilter}>Random from Filters</button>
    </div>
  )
}