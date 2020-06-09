import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";

export default class CreateNewItem extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      locations: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/locations")

      .then((response) => {
        this.setState({
          locations: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  closeModal = (event) => {
    let newItemObject = document.getElementsByClassName("new-item")[0];
    newItemObject.style.display = "none";
  };
  saveItem = (event) => {
    let productName = document.getElementById("productName").value;
    let inStock = document.getElementById("checkbox").checked;
    let location = document.getElementById("location").value;
    let description = document.getElementById("description").value;
    let lastOrdered = document.getElementById("lastOrdered").value;
    let quantity = document.getElementById("quantity").value;
    let newItemRequest = {
      productName: productName,
      description: description,
      inStock: inStock,
      warehouseId: location,
      lastOrdered: lastOrdered,
      quantity: quantity,
    };
    axios
      .post("http://localhost:5000/inventory", newItemRequest)
      .then((response) => {
        this.closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="new-item">
        <div className="new-item__container">
          <h1 className="new-item__title">Create New</h1>

          <ul className="new-item__list">
            <li className="new-item__input">
              <p className="new-item__input--title">PRODUCT</p>
              <input
                className="new-item__input--content"
                type="text"
                id="productName"
                placeholder="Item Name"
              />
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">LAST ORDERED</p>
              <input
                className="new-item__input--content"
                type="text"
                id="lastOrdered"
                placeholder="yyyy-mm-dd"
              />
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">CITY</p>
              <input
                className="new-item__input--content"
                type="text"
                placeholder="City"
              />
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">COUNTRY</p>
              <select className="new-item__input--content-select" id="location">
                {this.state.locations.map((location) => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.location}
                    </option>
                  );
                })}
              </select>
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">QUANTITY</p>
              <input
                className="new-item__input--content"
                type="text"
                id="quantity"
                placeholder="0"
              />
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">STATUS</p>
              <div className="label__wrapper">
                <label className="label">
                  In Stock
                  <Switch
                    id="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </label>
              </div>
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">ITEM DESCRIPTION</p>
              <textarea
                className="new-item__input--content-text"
                name="new-item__input--content"
                id="description"
                placeholder="(Optional)"
              ></textarea>
            </li>
          </ul>

          <div className="new-item__cta">
            <button className="new-item__cta--save" onClick={this.saveItem}>
              SAVE
            </button>
            <button className="new-item__cta--cancel" onClick={this.closeModal}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    );
  }
}
