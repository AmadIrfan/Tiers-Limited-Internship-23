import { useEffect, useRef, useState } from "react";
import "../App.css";
import Navbar from "./navbar";
// import React, { useState } from "react";

// const [color, setColor] = useState("white");
// let myStyle = { backgroundColor: color, color: "white", opacity: 0.7 };
// function onBtnClick(e) {
// 	e.preventDefault();

// 	document.getElementsByClassName("billing")[0].style.backgroundColor =
// 		myStyle.backgroundColor;
// 	document.getElementsByClassName("billing")[0].style.color = myStyle.color;
// 	document.getElementsByTagName("form")[0].style.backgroundColor =
// 		myStyle.backgroundColor;
// }
// function onColorChange() {
// 	let color = document.getElementById("cBox");
// 	setColor(color.value);
// }
function Home() {
	const [c, setC] = useState("");
	const count = useRef(0);
	useEffect(() => {
		count.current = count.current + 1;
	});
	return (
		<div className="home">
			<Navbar />
			<h1>home is {count.current}</h1>
			<input
				type="number"
				onChange={(e) => {
					setC(e.target.value);
				}}
			/>
			<h2>{c}</h2>
		</div>
	);
}
export default Home;

/* <h1>Color Picker</h1>
			<h1 className="billing">Billing Details</h1>
			<form>
				<div>
					<input
						type="text"
						name="first-name"
						id="FName"
						placeholder="First Name"
					/>
				</div>
				<div>
					<input
						type="text"
						name="last-name"
						id="LName"
						placeholder="Last Name"
					/>
				</div>
				<div>
					<input
						type="tel"
						name="Phone No"
						id="pNo"
						placeholder="Phone Number"
					/>
				</div>
				<div className="color-picker">
					<label htmlFor="cBox">Color picker </label>
					<input
						type="color"
						name="color"
						id="cBox"
						placeholder="Choose Color"
						onChange={onColorChange}
					/>
				</div>
				<div className="btn">
					<button className="change-btn" onClick={onBtnClick}>
						Change Color
					</button>
				</div>
			</form> */
