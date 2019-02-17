import React from 'react';

export default function Footer (props) {
    return (
        <div>
        <input type="checkbox" className={props.class} id={props.name}/><label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}