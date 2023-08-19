import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const API = `https://fakestoreapi.com/products/`;
export default function Products() {
	
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	
	useEffect(() => {
		async function FetchData(id) {
			let apiData = await fetch(API);
			let d = await apiData.json();
			setData(d);
			setLoading(false);
		}
		FetchData();
	}, []);
	return (
		<div>
			<Navbar />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					padding: "10px",
				}}
				className="product-list"
			>
				{loading && <div>Loading</div>}
				{data.map((d,index) => (
					<Card key={index}
						name={d.title}
						id={d.id}
						description={d.description}
						imageUrl={d.image}
					/>
				))}
			</div>
		</div>
	);
}
