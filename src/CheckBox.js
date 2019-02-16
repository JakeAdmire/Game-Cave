import React from 'react';

export default function Footer (props) {
    return (
        <div>
        <input type="checkbox" class={props.class} id={`genre${props.key}`}/><label for={`genre${props.key}`}>{props.genre}</label>
        </div>
    )
}