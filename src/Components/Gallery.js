import React, { Component } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: space-between;

	width: ${props => props.width};
	margin: 0 auto;
	margin-top: 2em;
	overflow: hidden;

	@supports (display: grid) {
		display: grid;

		grid-column-gap: 0.75em;
		grid-row-gap: 0.75em;

		grid-template-columns: repeat(auto-fill, minmax(${props => props.columnWidth}, 1fr));
	}
`

class Gallery extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<GalleryContainer width={this.props.width} columnWidth={this.props.columnWidth}>
				{ this.props.children }
			</GalleryContainer>
		);
	}
}

export default Gallery;
