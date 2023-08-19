import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		a: 0,
	};

	onClickBtn = () => {
		this.setState((pr) => ({
			a: pr.a + 1,
		}));
	};
	render() {
		return (
			<div>
				<h1>{this.state.a}</h1>
				<button onClick={this.onClickBtn}>Click</button>
			</div>
		);
	}
}
