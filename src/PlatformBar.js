import React, { Component } from 'react';
import CheckBox from './CheckBox';
import './styles/PlatformBar.css';

export default class ConsoleBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let platforms = this.props.platforms.sort();
		return (
			<div className="console-bar search-section">
				<form className="platform-check">
					{
						platforms.map((val, i) => {
							return <CheckBox name={val}
								updateChecks= {this.props.updateChecks}
								class="platformsToFilter check-box"
								key={i} />;
						})
					}
				</form>
				<button className="button">PLATFORM</button>
			</div>
		);
	}
}
