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
import Warehouses from "./components/Warehouses";
import Products from "./components/Products";
import CreateNewItem from "./components/CreateNewItem";
import CreateNewLocation from "./components/CreateNewLocation";

import WarehouseDetail from "./components/WarehouseDetail";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Redirect from="/" to="/inventory" />
          <Switch>
            <Route path="/inventory" component={Inventory} exact />
            <Route path="/warehouses" component={Warehouses} exact />
            <Route path="/warehouse/:id" component={WarehouseDetail} />
            <Route path="/product/:id" component={Products} exact />
            <Redirect to="/inventory" from="/" exact />
            <Redirect to="/inventory" from="/product" exact />
          </Switch>
        </Router>
        <CreateNewItem />
        <CreateNewLocation />
      </div>
    </>
  );
}
export default App;
