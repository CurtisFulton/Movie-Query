import React, { Component } from 'react';

import Gallery from '../Gallery';
import MovieCard from './MovieCard';


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
			let discoverMovies = data.results.map(movie => {

				return <MovieCard key={movie.title} movieInfo={movie}></MovieCard> 
			})

			this.setState({ movies : discoverMovies });
		})

	}

	render() {		
		let gallery = this.state.movies;

		// Create a temporary render
		if (gallery.length == 0) {
			let movie = {
				title : "Loading Movie",
				release_date : "",
				overview : "Loading Description"
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

export default DiscoverMovies;
