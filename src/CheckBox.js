import React from 'react';

export default function Footer (props) {
    return (
        <div>
        <input type="checkbox" class="form-checkbox" id={"check-one"}/><label for={"check-one"}>{props}</label>
        </div>
    )
}