import React, { Component } from "react";
import PostCard from "./PostCard";

export default class Posts extends Component {
	
	state = {
		item: [],
	};
	async componentDidMount() {
		async function postData() {
			let data = await fetch("https://jsonplaceholder.typicode.com/photos");
			let d = await data.json();
			return d;
		}
		let dItem = await postData();
		// console.log(dItem);
		this.setState({
			item: dItem.slice(0, 100),
		});
	}
	// shouldComponentUpdate() {
	// 	return true;
	// }
	componentDidCatch() {
		console.log("componentDidCatch");
	}

	render() {
		const { item } = this.state;
		//  console.log(item);
		return (
			<div
				className="post-Card"
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}
			>
				{item.map((d) => (
					<PostCard id={d.id} name={d.title} img={d.url} />
				))}
			</div>
		);
	}
}
