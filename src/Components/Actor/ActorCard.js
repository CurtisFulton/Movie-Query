import React, { Component } from 'react';
import styled from 'styled-components';

class ActorCard extends Component {
	constructor() {
		super();
		this.state = {
			knownFor : ""
		}
	}

	componentDidMount() {
		let knownFor = this.props.knownFor.join(', ');
		let maxLength = 100;

		// If the description is longer than the max length
		if (knownFor.length > maxLength) {
			// Find the last full word that is within the max character length
			let truncateIndex = Math.min(knownFor.length, knownFor.lastIndexOf(' ', maxLength));

			// Truncate the string, remove any commas that may be at the end and add "..." to the end.
			knownFor = knownFor.substr(0, truncateIndex);
			knownFor = knownFor.replace(/,\s*$/, '')  + "...";
		}

		this.setState({ knownFor : knownFor });
	}

	render() {
		return (
			<div>
				<strong>{this.props.name}</strong> - { this.state.knownFor }
			</div>
		);
	}
}

export default ActorCard;
