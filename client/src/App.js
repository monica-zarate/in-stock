import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.css";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Locations from "./components/Locations";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/inventory" component={Inventory}></Route>
          <Route path="/locations" component={Locations}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
