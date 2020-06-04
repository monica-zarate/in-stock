import React, { Component } from "react";

class Locations extends Component {
  render() {
    return (
      <div className="container location">
        <div className="location__top-wrapper">
          <span className="location__title">Locations</span>
          <form className="location__form">
            <input
              type="search"
              name="search"
              className="location__search-input"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Locations;
