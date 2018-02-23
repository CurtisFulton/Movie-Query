import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from 'styled-components';

const HeaderContainer = styles.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	width: 100%;
	height: 5em;

	padding: 0 15%;
	box-sizing: border-box;

	background: #455a64;
	background: linear-gradient(to right, #455a64 0%, #546e7a 50%, #455a64 100%);

	a {
		text-decoration: none;
		color: inherit;
	}
`

const HeaderTitle = styles.h1`
	color: white;
	font-size: 2.5em;
`

const Nav = styles.nav`
	color: white;

	& > a {
		margin: 0 1em;
		font-size: 1.5em;
	}
`

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<Link to="/"><HeaderTitle>{this.props.title}</HeaderTitle></Link>
				<Nav>{this.props.children}</Nav>
			</HeaderContainer>
		);
	}
}

export default Header;
