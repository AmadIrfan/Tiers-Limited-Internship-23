import React, { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";

export default function MyBlogs() {
	let HtmlToCode = ({ htmlText, index }) => {
		let style = {
			container: {
				with: "100%",
				wordWrap: "break-word",
				backgroundColor: "gray",
				margin: " 20px 20px",
				// width: "100vw",
				overflowY: "auto",
			},
			code: {
				display: "block",
				lineHeight: "1.2",
				padding: "30px",
				color: "white",
				textAlign: "justify",
			},
		};

		return (
			<div className="container" style={style.container}>
				<code
					className="code"
					style={style.code}
					dangerouslySetInnerHTML={{ __html: htmlText }}
				></code>
			</div>
		);
	};
	const [item, SetItem] = useState([]);
	const [isLoading, SetIsLoading] = useState(true);
	useEffect(() => {
		async function getData() {
			let getS = JSON.parse(await window.localStorage.getItem("blogs")) || [];
			SetItem(getS);
			SetIsLoading(false);
		}
		getData();
	}, []);

	return (
		<div>
			<Navbar />
			{isLoading && <div> Is Loading</div>}
			{item.map((d, index) => (
				<HtmlToCode key={index} htmlText={d} index={index} />
			))}
		</div>
	);
}
