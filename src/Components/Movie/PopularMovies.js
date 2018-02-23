import React, { Component } from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';

const MovieList = styled.section`
	width: 75%;
	margin: 0 auto;
	margin-top: 2em;
`

class PopularMovies extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
		}
	}

	componentDidMount() {
		fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=' + process.env.REACT_APP_API_KEY)
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

export default PopularMovies;
