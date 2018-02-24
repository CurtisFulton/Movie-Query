import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from 'styled-components';
import Header from './Header.js';

const Main = styles.main`
	overflow: auto;
`

const LayoutContainer = styles.div`
	width: 100%;
	min-height: 100vh;
	background-color: #D1D5Da;
`

class Layout extends Component {
	render() {
		return (
			<LayoutContainer>
				<Header title="Movie Query">
					<Link to="/">Home</Link>
					<Link to="/movies">Movies</Link>
					<Link to="/actors">Actors</Link>
					<Link to="/search">Search</Link>
				</Header>

				<Main>
					{this.props.children}
				</Main>
			</LayoutContainer>
		);
	}
}

export default Layout;
