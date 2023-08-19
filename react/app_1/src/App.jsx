// import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import "./index.js";
import { Switch, Route } from "react-router-dom";
// import Contact from "./Components/contact";
// import About from "./Components/about";
import { Context } from "./Components/Context";
function App() {
	return (
		<div className="App">
			<Context>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					{/* <Route exact path="/" component={Navbar}></Route>
				<Route exact path="/about" component={About}></Route>
			<Route exact path="/contact" component={Contact}></Route> */}
				</Switch>
			</Context>
		</div>
	);
}

export default App;
