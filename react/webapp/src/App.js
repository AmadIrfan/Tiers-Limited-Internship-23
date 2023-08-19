import './App.css';
import { Switch, Route } from 'react-router-dom'
// import { Context } from './Components/Context';
import UseContext from './Components/UseContext';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import CreateBlog from './Components/Create_blog';
// import MyBlogs from './Components/My_blogs';
function App() {
  return (
    <div className="App">
        <Switch>

          <Route exact path='/' component={UseContext} />
        </Switch>
    </div>
  );
}

export default App;

/*
<Route exact path='/myBlogs' component={MyBlogs} />
<Route exact path='/navbar' component={Navbar} />
<Route exact path='/createBlogs' component={CreateBlog} /> */