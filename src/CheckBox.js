import React from 'react';
import './CheckBox.css';

export default function Footer (props) {
    return (
        <div className="genre-container">
          <label htmlFor={props.name}>
            <input type="checkbox" className={props.class} id={props.name}/>
            <div className="faux-box"></div>
            <p className="genre-title">{props.name}</p>
          </label>
        </div>
    )
}