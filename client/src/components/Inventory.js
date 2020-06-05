import React, { Component } from "react";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import kebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";
import axios from "axios";
// import { Link } from "react-router-dom";

export default class Inventory extends Component {
  state = {
    inventoryList: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("http://localhost:5000/inventory").then((response) => {
      this.setState({ inventoryList: response.data, loading: false });
    });
  }

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
        {this.state.inventoryList.map((inv) => {
          return (
            <div className="inventory__container">
              <div className="inventory__flex">
                <label className="inventory__product-margin inventory__mobile">
                  ITEM
                </label>
                <div className="inventory__tablet-product">
                  {/* <Link
                    to={`/product/${inv.productId}`}
                    className="inventory__product"
                  > */}
                  <p className="inventory__product-name"> {inv.productName} </p>
                  {/* </Link> */}
                  <p className="inventory__shrink">{inv.description}</p>
                </div>
                <div className="inventory__tablet-stats">
                  <label className="inventory__mobile">LAST ORDERED</label>
                  <p className="inventory__tablet-right">05/24/2018</p>
                  <label className="inventory__mobile">LOCATION</label>
                  <p className="inventory__tablet-right">Toronto, CAN</p>
                  <label className="inventory__mobile">QUANTITY</label>
                  <p className="inventory__tablet-right">12,000</p>
                  <label className="inventory__mobile">STATUS</label>
                  <p className="inventory__tablet-right kebab">{inv.inStock}</p>
                </div>
              </div>
              <div className="inventory__options">
                <img src={kebabIcon} alt="options" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
