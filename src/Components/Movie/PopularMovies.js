import React, { Component } from 'react';

import Gallery from '../Gallery';
import MovieCard from './MovieCard';


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
			let popularMovies = data.results.map(movie => {
				return <MovieCard key={movie.title} movieInfo={movie}></MovieCard> 
			})

			this.setState({ movies : popularMovies });
		})

	}

	render() {
		let gallery = this.state.movies;

		// Create a temporary render
		if (gallery.length == 0) {
			let movie = {
				title : "Loading Movie",
				overview : "Loading Description",
			}

			for (let i = 0; i < 25; i++) {
				gallery.push(<MovieCard key={i} movieInfo={movie}></MovieCard>); 
			}
		}

		return (
			<Gallery width="80%" columnWidth="400px" dynamic>
				{ gallery }
			</Gallery>
		);
	}
}


export default PopularMovies;
