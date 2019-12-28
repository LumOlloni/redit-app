import React, { Component } from "react";
import "./sass/App.scss";
import "./sass/Navbar.scss";
import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/posts/Search";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div id='page-content'>
        <Router>
          <NavBar icon='fab fa-reddit f1a1' title='React Reddit' />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route
              exact
              path='/search'
              component={Search}
              // render={props => (
              //   <Fragment>
              //     <Search searchUsers={this.searchUsers} />
              //   </Fragment>
              // )}
            ></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
