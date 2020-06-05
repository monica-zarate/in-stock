import React, { Component } from "react";

import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import kebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";

export default class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <div className="inventory__top-flex">
          <h1 className="inventory__title">Inventory</h1>
          <form className="inventory__search">
            <input
              className="inventory__search-image"
              type="image"
              src={searchIcon}
              alt="search"
            />
            <input
              className="inventory__search-bar"
              name="search"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="inventory__tablet">
          <label className="inventory__tablet-item">ITEM</label>
          <div className="inventory__tablet-stats">
            <label className="inventory__tablet-right">LAST ORDERED</label>
            <label className="inventory__tablet-right">LOCATION</label>
            <label className="inventory__tablet-right">QUANTITY</label>
            <label className="inventory__tablet-right inventory__tablet-spacing">
              STATUS
            </label>
          </div>
        </div>

        <div className="inventory__container">
          <div className="inventory__flex">
            <label className="inventory__product-margin inventory__mobile">
              ITEM
            </label>
            <div className="inventory__tablet-product">
              <p className="inventory__shrink">description...</p>
            </div>
            <div className="inventory__tablet-stats">
              <label className="inventory__mobile">LAST ORDERED</label>
              <p className="inventory__tablet-right">Ordered date...</p>
              <label className="inventory__mobile">LOCATION</label>
              <p className="inventory__tablet-right">Location...</p>
              <label className="inventory__mobile">QUANTITY</label>
              <p className="inventory__tablet-right">quantity</p>
              <label className="inventory__mobile">STATUS</label>
              <p className="inventory__tablet-right kebab">In Stock</p>
            </div>
          </div>
          <div className="inventory__options">
            <img src={kebabIcon} alt="options" />
          </div>
        </div>
      </div>
    );
  }
}
