import React, { createContext } from "react";



const mc = createContext();
export function Context(props) {
	let men = {
		name: "amad",
		age: 21,
	};
	return (
		<div>
			<mc.Provider value={men}>{props.children}</mc.Provider>
		</div>
	);
}

export default mc;
