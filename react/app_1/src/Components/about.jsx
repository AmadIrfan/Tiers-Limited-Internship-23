import React, { useState } from "react";

export default function About() {
	let onClickBtn = () => {
		setText("this is my About");
	};
	const [Text, setText] = useState("About");
	return (
		<div>
			<h1>{Text}</h1>
			<button onClick={onClickBtn}>Click </button>
		</div>
	);
}
