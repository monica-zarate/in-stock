import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";

import "./style/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/inventory" component={Inventory} exact />
          <Route path="/locations" component={Locations} exact />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
