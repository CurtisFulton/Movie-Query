import React, { Component } from 'react';
import styled from 'styled-components';

import ImageContainer from '../ImageContainer';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 350px;
	margin: auto;

	background-color: hsl(0, 0%, 95%);

	box-shadow: 0 1px 3px rgba(0,0,0,0.3);

	transition: all 0.3s ease-in-out;
	overflow: hidden;

	&:hover {
		box-shadow: 0 8px 20px rgba(0,0,0,0.4);
		cursor: pointer;
	}

	@supports (display: grid) {
		display: grid;

		grid-template-areas: 
		"img title title"
		"img description description"
		"img footer footer";

		grid-template-columns: 2fr 2fr 1fr;
		grid-template-rows: auto 1fr auto;

		max-width: 100%;
		margin: 0;
	}
`

const InfoContainer = styled.div`
	flex-grow: 2;
	height: 100%;
`

const MovieTitle = styled.h1`
	grid-area: title;

	display:block;
	font-size: 1em;
	padding-left: 0.5em;
	color: #6F6A6A;
`

const Description = styled.p`
	grid-area: description;
	font-size: 0.75em;
	padding-left: 0.5em;

	color: hsl(0, 0%, 30%);
	
`

class MovieCard extends Component {
	constructor() {
		super();
		this.state = {
			title : "",
			releaseDate : "",
			description : "",
			imgURL : ""
		}
	}

	componentDidMount() {
		let movie = this.props.movieInfo;

		let title;
		let releaseDate;
		let description;
		let imgURL;

		title = movie.title;

		if (movie.release_date){
			releaseDate = movie.release_date.substr(0, movie.release_date.indexOf('-'));
			title += " (" + releaseDate + ")"
		}


		description = movie.overview;

		if (movie.poster_path)
			imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

		let maxLength = 200;

		// If the description is longer than the max length
		if (description.length > maxLength) {
			// Find the last full word that is within the max character length
			let truncateIndex = Math.min(description.length, description.lastIndexOf(' ', maxLength));

			// Truncate the string, remove any commas that may be at the end and add "..." to the end.
			description = description.substr(0, truncateIndex);
			description = description.replace(/,\s*$/, '')  + "...";
		}


		this.setState({ 
			title : title,
			releaseDate : releaseDate,
			description : description,
			imgURL : imgURL
		});
	}

	render() {
		return (
			<div>
				<Card>
					<ImageContainer width="auto" height="275px" src={ this.state.imgURL }></ImageContainer>
					
						<MovieTitle>{ this.state.title }</MovieTitle>
						<Description>{ this.state.description }</Description>
					
				</Card>
			</div>
		);
	}
}

export default MovieCard;
