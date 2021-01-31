import ReactDOM from "react-dom";
import React from "react";
import NavBar from "./js/pages/NavBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./js/pages/Login";
// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";
import "./styles/bootswatch.min.css";
import "./bootstrap";
import { Link } from "react-router-dom";
import { Switch } from "react-router";
import About from "./js/pages/About";
import Contact from "./js/pages/Contact";
import Model from "./js/pages/Model";
import Home from "./js/pages/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/model" component={Model} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
