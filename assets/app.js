import ReactDOM, { HashRouter } from "react-dom";
import React from "react";

// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";

// start the Stimulus application
import "./bootstrap";
import NavBar from "./js/pages/NavBar";
import { Route, Router, Switch } from "react-router";
import LoginPage from "./js/pages/LoginPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
