import React from "react";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StateCount from "./StateCount";
export default function Navbar() {
	return (
		<div>
			<div className="navbar">
				<div className="logo">AI</div>
				<nav className="nav-bar">
					<ul>
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/Contact">Contact</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<div className="primary">
					<button className="login-btn">LogIn</button>
					<button className="signUp-btn">SignUp</button>
				</div>
			</div>
			<StateCount />
		</div>
	);
}
