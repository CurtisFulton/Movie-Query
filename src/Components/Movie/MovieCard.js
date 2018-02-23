import React, { Component } from 'react';
import styled from 'styled-components';

class MovieCard extends Component {
	constructor() {
		super();
		this.state = {
			description : ""
		}
	}

	componentDidMount() {
		let description = this.props.description;
		let maxLength = 100;

		// If the description is longer than the max length
		if (description.length > maxLength) {
			// Find the last full word that is within the max character length
			let truncateIndex = Math.min(description.length, description.lastIndexOf(' ', maxLength));

			// Truncate the string, remove any commas that may be at the end and add "..." to the end.
			description = description.substr(0, truncateIndex);
			description = description.replace(/,\s*$/, '')  + "...";
		}

		this.setState({ description : description });
	}

	render() {
		return (
			<div>
				<strong>{this.props.title}</strong> - { this.state.description }
			</div>
		);
	}
}

export default MovieCard;
