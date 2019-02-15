import React from 'react';

export default function Footer (props) {
    return (
        <div>
        <input type="checkbox" className={props.class} id={`${props.class}${props.key}`}/><label htmlFor={`${props.class}${props.key}`}>{props.name}</label>
        </div>
    )
}