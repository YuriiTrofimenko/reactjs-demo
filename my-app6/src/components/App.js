/* Заказной компонент App v6.1 */

import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class App extends Component {
  render() {
  
    const Routing = () => (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <NavLink to="/" className="navbar-brand">Navbar</NavLink>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    <div className="navbar-nav">
			      <NavLink exact to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></NavLink>
			      <NavLink to="/about" className="nav-item nav-link">About Us</NavLink>
			      <NavLink to="/signup" className="nav-item nav-link">Sign Up</NavLink>
			    </div>
			  </div>
		  </nav>
    
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/signup" component={Signup}/>
        </div>
      </Router>
    )
   
    return (
      <Routing/>
    );
  }
}

export default App;
