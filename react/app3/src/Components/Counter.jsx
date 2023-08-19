import React, { Component } from "react";

export class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log("componentDidMount");
	}
	componentDidUpdate(priv, next) {
		console.log(priv);
		console.log(next);
		console.log("componentDidUpdate");
	}
	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
	}
	onClickBtn(e) {
		this.setState((prev) => ({
			count: prev.count + 1,
		}));
	}
	render() {
		return (
			<div>
				<h1> {this.state.count}</h1>
				<h1> {this.props.name}</h1>
				<button onClick={() => this.onClickBtn()}> Click</button>
			</div>
		);
	}
}

export default Counter;
