import React from "react";
import "./style/main.css";
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
