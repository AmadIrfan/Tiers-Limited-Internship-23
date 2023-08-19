import "./App.css";
// import { Switch, Route } from "react-router-dom";
// import Home from "./Components/home";
// import Navbar from "./Components/navbar";
import ABout from "./Components/about";
// import StateCount from './Components/StateCount'
function App() {
	return (
		<div className="App">
			<ABout></ABout>
			{/* 			
			<Switch>
				<Route exact path='/' component={Navbar} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/about' component={ABout} />
				<Route exact path='/state' component={StateCount} />
				<StateCount />
			</Switch> */}
		</div>
	);
}

export default App;
