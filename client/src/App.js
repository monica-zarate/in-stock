import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.css";

import Locations from "./components/Locations";
import Inventory from "./components/Inventory";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Inventory />
      <Locations />
    </div>
  );
}

export default App;
