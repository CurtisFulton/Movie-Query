import React, { Component } from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';

const MovieList = styled.section`
	width: 60em;
	margin: 0 auto;
	margin-top: 2em;
`

class DiscoverMovies extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
		}
	}

	componentDidMount() {
		fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&api_key=' + process.env.REACT_APP_API_KEY)
		.then(results => results.json())
		.then(data => {
			if (!data) // Check that any data was returned.
				return;

			let discoverMovies = data.results.map(movie => {
				return <MovieCard key={movie.title} title={movie.title} description={movie.overview}></MovieCard> 
			})

			this.setState({ movies : discoverMovies });
		})

	}

	render() {
		return (
			<MovieList>
				{ this.state.movies }
			</MovieList>
		);
	}
}

export default DiscoverMovies;
