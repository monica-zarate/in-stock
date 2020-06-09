import React, { Component } from "react";
import axios from "axios";

export default class CreateNewLocation extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
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
    let newItemObject = document.getElementsByClassName("new-location")[0];
    newItemObject.style.display = "none";
    this.clearForm();
  };
  saveLocation = (event) => {
    let warehouseName = document.getElementById("wareHouseName").value;
    let address = document.getElementById("address").value;
    let location = document.getElementById("wareHouseLocation").value;
    let contactName = document.getElementById("contactName").value;
    let position = document.getElementById("position").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let categories = document.getElementById("categories").value;
    let newWarehouse = {
      wareHouseName: warehouseName,
      address: address,
      location: location,
      contactName: contactName,
      position: position,
      phoneNumber: phoneNumber,
      email: email,
      categories: categories,
    };
    axios
      .post("http://localhost:5000/locations", newWarehouse)
      .then((response) => {
        this.closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  clearForm() {
    document.getElementById("wareHouseName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("contactName").value = "";
    document.getElementById("position").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("categories").value = "";
  }
  render() {
    return (
      <div className="new-location">
        <div className="new-location__container">
          <h1 className="new-location__title">Add New</h1>

          <ul className="new-location__list">
            <li className="new-location__input table-full-width">
              <p className="new-location__input--title">WAREHOUSE</p>
              <input
                className="new-location__input--content"
                type="text"
                id="wareHouseName"
                placeholder="Name &amp; ID"
              />
            </li>
            <li className="new-location__input">
              <p className="new-location__input--title">ADDRESS</p>
              <input
                className="new-location__input--content"
                type="text"
                id="address"
                placeholder="Enter Address"
              />
            </li>
            <li className="new-location__input">
              <p className="new-location__input--title">LOCATION</p>
              <select
                className="new-location__input--content-select"
                id="wareHouseLocation"
              >
                {this.state.locations.map((location) => {
                  return (
                    <option key={location.id} value={location.location}>
                      {location.location}
                    </option>
                  );
                })}
              </select>
            </li>
            <li className="new-location__input">
              <p className="new-location__input--title">CONTACT NAME</p>
              <input
                className="new-location__input--content"
                type="text"
                id="contactName"
                placeholder="Enter Name"
              />
            </li>
            <li className="new-location__input">
              <p className="new-location__input--title">POSITION</p>
              <input
                className="new-location__input--content"
                type="text"
                placeholder="Enter Position"
                id="position"
              />
            </li>
            <li className="new-location__input">
              <p className="new-location__input--title">PHONE NUMBER</p>
              <input
                className="new-location__input--content"
                name="new-location__input--content"
                id="phoneNumber"
                placeholder="(000) 000 - 0000"
                type="text"
              />
            </li>
            <li className="new-location__input">
              <p className="new-location__input--title">EMAIL</p>
              <input
                className="new-location__input--content"
                name="new-location__input--content"
                id="email"
                placeholder="email@instock.com"
                type="text"
              />
            </li>
            <li className="new-item__input">
              <p className="new-item__input--title">ITEM DESCRIPTION</p>
              <textarea
                className="new-item__input--content-text"
                name="new-item__input--content"
                id="categories"
                placeholder="Use commas to separate each category"
              ></textarea>
            </li>
          </ul>

          <div className="new-location__cta">
            <button
              className="new-location__cta--save"
              onClick={this.saveLocation}
            >
              SAVE
            </button>
            <button
              className="new-location__cta--cancel"
              onClick={this.closeModal}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    );
  }
}
