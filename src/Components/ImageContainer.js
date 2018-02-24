import React, { Component } from 'react';

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
			paddingBottom: "0%" || this.props.padding,
			overflow: "hidden",

			gridArea: "img"
		}

		const imgStyle = {
			width: "100%",
			height: "100%"
		}

		return (
			<div style={divStyle}>
				<img src={this.props.src} style={imgStyle} padding={this.props.padding}></img>
			</div>
		);
	}
}

export default ImageContainer;
