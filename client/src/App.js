import React from "react";
import "./style/main.css";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Locations />
=======
      <Router>
        <Header />
        <Switch>
          <Route path="/inventory" component={Inventory}></Route>
          <Route path="/locations" component={Locations}></Route>
        </Switch>
      </Router>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
