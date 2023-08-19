import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import CardDetails from './Components/CardDetails';
import Posts from './Components/Posts';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/navbar' component={Navbar} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/carousel' component={Carousel} />
        <Route exact path='/card' component={Card} />
        <Route exact path='/card-details/:id' component={CardDetails} />
        <Route exact path='/posts' component={Posts} />

      </Switch>
    </div>
  );
}

export default App;
