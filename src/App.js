import React, { Component } from "react";
import "./sass/App.scss";
import "./sass/Navbar.scss";
import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id='page-content'>
        <Router>
          <NavBar icon='fab fa-reddit f1a1' title='SubbReddit' />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
