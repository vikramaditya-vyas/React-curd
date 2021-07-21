import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import HomeCard from "./components/pages/HomeCard"

import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
       <Navbar />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={HomeCard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
         
        </Switch>
    </div>
    </Router>
  );
}

export default App;
