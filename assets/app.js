// Import of React Librabry
import ReactDOM from "react-dom";
import React from "react";
import { Switch } from "react-router";
import { Route, BrowserRouter as Router } from "react-router-dom";
// Import of CSS
import "./styles/app.css";
import "./styles/bootswatch.min.css";
import "./bootstrap";
// Import of Component Page
import Login from "./js/pages/Login";
import NavBar from "./js/pages/NavBar";
import About from "./js/pages/About";
import Contact from "./js/pages/Contact";
import Model from "./js/pages/Model";
import Home from "./js/pages/Home";
import Footer from "./js/pages/Footer";
import $ from "jquery"

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/model" component={Model} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
