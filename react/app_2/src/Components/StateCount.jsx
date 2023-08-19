import React, { Component } from "react";

export default class StateCount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	Handle(e) {
		this.setState((p) => ({ count: p.count + 1 }));
	}
	render() {
		return (
			<div>
				<h1>count : {this.state.count}</h1>
				<button onClick={() => this.Handle()}>Click</button>
			</div>
		);
	}
}
