import React, { Component } from 'react';
import styled from 'styled-components';

class ImageContainer extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	componentDidMount() {

	}

	render() {
		const divStyle = {
			position: "relative",
			width: this.props.width,
			height: this.props.height,
			paddingBottom: "10%",
			overflow: "hidden"
		}

		const imgStyle = {
			width: "100%",
		}

		return (
			<div style={divStyle}>
				<img src={this.props.src} style={imgStyle}></img>
			</div>
		);
	}
}

export default ImageContainer;
