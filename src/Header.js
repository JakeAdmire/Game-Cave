import React from 'react';

export default function Header (props) {
	return (
		<div className="header">
			<h1 className="title">GameCave</h1>
      <p>View Library</p>
      <p onClick={props.resetState}>Clear Search</p>
		</div>
	);
}
