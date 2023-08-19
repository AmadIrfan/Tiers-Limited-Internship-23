import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<Link to="/home">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		);
	}
}

export default Navbar;
