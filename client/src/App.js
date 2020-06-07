import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./style/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";

import "./style/main.css";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Redirect from="/" to="/inventory" />
        <Switch>
          <Route path="/inventory" component={Inventory} exact />
          <Route path="/locations" component={Locations} exact />
          <Route path="/product/:id" component={Products} exact />
          <Redirect to="/inventory" from="/" exact />
          <Redirect to="/inventory" from="/product" exact />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
