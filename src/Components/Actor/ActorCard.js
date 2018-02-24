import React, { Component } from 'react';
import styled from 'styled-components';

import ImageContainer from '../ImageContainer';

const Card = styled.div`
	display: inline-block;
	max-width: 100%;
	background-color: hsl(0, 0%, 95%);

	box-shadow: 0 1px 3px rgba(0,0,0,0.3);

	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 8px 20px rgba(0,0,0,0.4);
		cursor: pointer;
	}
`

const ActorName = styled.h1`
	font-size: 1em;
	padding-left: 0.5em;
	margin-bottom: 0.25em;
	color: #6F6A6A;
`

const KnownFor = styled.ul`
	font-size: 0.75em;

	color: hsl(0, 0%, 30%);
	
	list-style: none;
	margin-top: 0em;
	margin-left: 0;
	padding-left: 1.5em;
	text-indent: -1em;
`

class ActorCard extends Component {
	constructor() {
		super();
		this.state = {
			knownFor : [],
		}
	}

	componentDidMount() {
		let knownFor = this.props.knownFor.map(movie => {
			let maxLength = 35;

			// If the description is longer than the max length
			if (movie.length > maxLength) {
				movie = movie.substr(0, maxLength) + "...";
			}

			return (
			<li key={movie}>
				&ndash; {movie}
			</li>
			)
		});


		this.setState({ knownFor : knownFor });
	}

	render() {
		return (
			<Card>
				<ImageContainer width="100%" height="auto" src={ "https://image.tmdb.org/t/p/w300" + this.props.profileURL }></ImageContainer>
				<ActorName>{this.props.name}</ActorName>
				<KnownFor>{ this.state.knownFor }</KnownFor>
			</Card>
		);
	}
}

export default ActorCard;
