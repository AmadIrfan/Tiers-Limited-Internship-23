import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

export default function ABout() {
	const [data, setData] = useState([]);
	useEffect((a) => {
		async function fetchData(params) {
			let response = await fetch("https://fakestoreapi.com/products");
			let responseData = await response.json();
			setData(responseData);
		}
		fetchData();
	}, []);

	return (
		<div>
			{/* <Navbar /> */}
			{data.map((d, index) => (
				<h5 className="data">
					{index}, {d.title}
				</h5>
			))}
		</div>
	);
}
