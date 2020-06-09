import React, { Component } from "react";
import axios from "axios";
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

class App extends Component {
  state = {
    warehouseList: [],
    warehouseDetail: {},
  };

  componentDidMount() {
    this.getWarehouses();
    this.getWarehouseDetail();
  }

  /**
   * This function will get all the warehouses and update state
   */
  getWarehouses() {
    axios
      .get(`/warehouses`)
      .then((response) => {
        this.setState({
          warehouseList: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  /**
   *  This function will get detail about warehouse
   */
  getWarehouseDetail(id) {
    axios
      .get(`/warehouses/${id}`)
      .then((response) => {
        this.setState({
          warehouseDetail: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.warehouseList);
    return (
      <div className="App">
        <Router>
          <Header />
          <Redirect from="/" to="/inventory" />
          <Switch>
            <Route path="/inventory" component={Inventory} exact />
            <Route
              path="/warehouses"
              render={(props) => (
                <Warehouses warehouses={this.state.warehouseList} {...props} />
              )}
            />
            <Route
              path="/warehouses/:id"
              render={(props) => (
                <WarehouseDetail
                  warehouse={this.state.warehouseDetail}
                  {...props}
                />
              )}
            />
            <Route path="/product/:id" component={Products} exact />
            <Redirect to="/inventory" from="/" exact />
            <Redirect to="/inventory" from="/product" exact />
          </Switch>
          <CreateNewItem />
          <CreateNewLocation />
        </Router>
      </div>
    );
  }
}
export default App;
