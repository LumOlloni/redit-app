import React, { Fragment, useState, useContext } from "react";
import "./sass/App.scss";
import "./sass/Navbar.scss";
import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/posts/Search";
import Alert from "./components/layout/Alert";
import RedditState from "./context/reddit/RedditState";

const App = () => {
  return (
    <div id='page-content'>
      <RedditState>
        <Router>
          <NavBar icon='fab fa-reddit f1a1' title='React Reddit' />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route
              exact
              path='/search'
              // component={Search}
              render={props => (
                <Fragment>
                  <Alert />
                  <Search />
                </Fragment>
              )}
            ></Route>
          </Switch>
        </Router>
        <Footer />
      </RedditState>
    </div>
  );
};

export default App;
