// Import of React Librabry
import ReactDOM from "react-dom";
import React from "react";
import { Switch } from "react-router";
import { Route, BrowserRouter as Router, HashRouter } from "react-router-dom";
// Import of CSS
import "./styles/app.css";
import "./styles/bootswatch.min.css";
import "./bootstrap";
// Import of Component Page
import Login from "./js/component/Login";
import NavBar from "./js/pages/NavBar";
import About from "./js/pages/About";
import Contact from "./js/pages/Contact";
import Model from "./js/pages/Model";
import Home from "./js/pages/Home";
import Footer from "./js/pages/Footer";
import $ from "jquery"
import Registration from "./js/component/Registration";

const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <main className="container mt-3">
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/model" component={Model} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>

      <Footer />
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
