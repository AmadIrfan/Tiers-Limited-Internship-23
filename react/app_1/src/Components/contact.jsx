import React, { useState } from "react";

export default function Contact() {
	let onClickBtn = () => {
		setText("this is my Contact");
	};
	const [Text, setText] = useState("Contact");
	return (
		<div>
			<h1>{Text}</h1>
			<button onClick={onClickBtn}>Click </button>
		</div>
	);
}
