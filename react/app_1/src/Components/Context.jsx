import React, { createContext } from "react";

const myContext = createContext();
export  function Context(props) {
	const d = {
		name: "Amad",
		age: 21,
	};
	return (
		<div>
			<myContext.Provider value={d}>{props.children}</myContext.Provider>
		</div>
	);
}
export default myContext;
