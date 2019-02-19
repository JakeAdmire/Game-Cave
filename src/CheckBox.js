import React from 'react';

export default function CheckBox (props) {
	return (
		<div className="genre-container">
			<label htmlFor={props.name}>
				<input type="checkbox" className={props.class} id={props.name} onChange= {props.updateChecks}/>
				<div className="faux-box"></div>
				<p className="genre-title">{props.name}</p>
			</label>
		</div>
	);
}