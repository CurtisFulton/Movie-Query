import React, { Component } from 'react';
import styled from 'styled-components';

import ActorCard from './ActorCard';

const ActorList = styled.section`
	width: 75%;
	margin: 0 auto;
	margin-top: 2em;
`

class PopularActors extends Component {
	constructor() {
		super();
		this.state = {
			actors: [],
		}
	}

	componentDidMount() {
		fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=' + process.env.REACT_APP_API_KEY)
		.then(results => results.json())
		.then(data => {
			if (!data) // Check that any data was returned.
				return;

			let popularActors = data.results.map(actor => {
				let knownFor = actor.known_for.map((movie, index) => {
						return movie.title;
				});

				return <ActorCard key={actor.id} name={actor.name} knownFor={knownFor}></ActorCard>
			})

			this.setState({ actors : popularActors });
		})

	}

	render() {
		return (
			<ActorList>
				{ this.state.actors }
			</ActorList>
		);
	}
}

export default PopularActors;
