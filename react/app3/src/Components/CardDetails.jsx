import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const API = `https://fakestoreapi.com/products/`;

export default function CardDetails() {
	let { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	useEffect(() => {
		async function getData(id) {

			try {
				let d = await fetch(API + id)
				let a = await d.json();
				setData(a)
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
		getData(id);

	}, [])


	return <div>{loading && <div>Loading ....</div>} {data.title}  </div>;
}
