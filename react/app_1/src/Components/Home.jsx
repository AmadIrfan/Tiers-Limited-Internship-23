import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import Context from "./Context";

export default function Home() {
	let useC = useContext(Context);
	let a = useC.name;
	const [text, setText] = useState(a);
	let counter = useRef(0);
	useEffect(() => {
		counter.current = counter.current + 1;
	});
	return (
		<div>
			<h1>Home</h1>
			<h4>{text}</h4>
			<h4>{a}</h4>
			<h4>{counter.current}</h4>
			<button
				onClick={() => {
					setText("adas");
				}}
			>
				Click
			</button>
		</div>
	);
}
