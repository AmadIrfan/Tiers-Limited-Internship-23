import React, { useEffect, useState } from "react";

export default function GetUser() {
	const [data, SetData] = useState([]);
	useEffect(() => {
		async function getData() {
			let d = await fetch("");
			let a = await d.json();
			SetData(a);
		}
        getData();
	}, []);
	return <div>{data}</div>;
}
