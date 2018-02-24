import React, { Component } from 'react';
import styled from 'styled-components';

class Movie extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

export default Movie;
