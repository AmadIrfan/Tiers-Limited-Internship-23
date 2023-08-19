import React, { useContext } from "react";
import Context from "./Context";

export default function UseContext() {
	const myC = useContext(Context);

	return (
		<div>
			my name is : {myC.name} my age is : {myC.age}
		</div>
	);
}
