import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from '../Gallery';
import ActorCard from './ActorCard';

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
			let popularActors = data.results.map(actor => {
				let knownFor = actor.known_for.map((movie, index) => {
						return movie.title;
				});

				return <ActorCard key={actor.id} name={actor.name} knownFor={knownFor} profileURL={actor.profile_path}></ActorCard>
			})

			this.setState({ actors : popularActors });
		})
	}

	render() {
		return (
			<Gallery width="80%" columnWidth="250px">
				{ this.state.actors }
			</Gallery>
		);
	}
}

export default PopularActors;
