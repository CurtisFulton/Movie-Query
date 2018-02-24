import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Components/Layout';

import DiscoverMovies from './Components/Movie/DiscoverMovies';

import PopularMovies from './Components/Movie/PopularMovies';
import Movie from './Components/Movie/Movie';

import PopularActors from './Components/Actor/PopularActors';
import Actor from './Components/Actor/Actor';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<Layout className="App">
				<Switch>
					<Route exact path='/' component={DiscoverMovies}/>

					<Route path='/movies' component={PopularMovies}/>
					<Route path='/movies/:movie' component={Movie}/>

					<Route path='/actors' component={PopularActors}/>
					<Route path='/actors/:actor' component={Actor}/>

					<Route path='/search' component={InDevelopment}/>

					<Route path='*' component={NotFound}/>
				</Switch>
			</Layout>
		);
	}
}

const NotFound = () =>
	<div>
		<h3>404 page not found</h3>
		<p>We are sorry but the page you are looking for does not exist.</p>
	</div>

const InDevelopment = () =>
	<div style={{textAlign: "center"}}>
		<h3>This page is still under construction</h3>
	</div>

export default App;
