import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ArrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";
import addBtn from "../assets/Icons/SVG/Icon-add.svg";

class Warehouses extends Component {
  state = {
    warehouseList: [],
    warehouseDetail: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/locations")
      .then((response) => {
        this.setState({
          warehouseList: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  newItemClick = (event) => {
    let newItemObject = document.getElementsByClassName("new-location")[0];
    newItemObject.style.display = "block";
  };

  render() {
    return (
      <div className="container location">
        <div className="location__top-wrapper">
          <h1 className="location__title">Locations</h1>
          <form className="location__form">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="location__search-box"
            />
          </form>
        </div>
        <ul className="location__labels-wrapper">
          <li className="location__label-item">
            <span className="location__labels--text">WAREHOUSE</span>
          </li>
          <li className="location__label-item">
            <span className="location__labels--text">CONTACT</span>
          </li>
          <li className="location__label-item">
            <span className="location__labels--text">CONTACT INFORMATION</span>
          </li>
          <li className="location__label-item">
            <span className="location__labels--text">CATEGORIES</span>
          </li>
        </ul>
        {this.state.warehouseList.map((warehouse) => {
          return (
            <ul className="warehouse-list">
              <li className="warehouse-list__item">
                <div className="warehouse-list__warehouse-wrapper">
                  <span className="warehouse-list__text--name">
                    {warehouse.name}
                  </span>

                  <p className="warehouse-list__text--address">
                    {warehouse.address}
                  </p>
                  <Link
                    key={warehouse.id}
                    to={`/warehouse/${warehouse.id}`}
                    className="warehouse-list__link"
                  >
                    <button className="warehouse-list__btn">
                      <img
                        src={ArrowRight}
                        alt="Arrow Right"
                        className="warehouse-list__img"
                      />
                    </button>
                  </Link>
                </div>
              </li>
              <li className="warehouse-list__item">
                <div className="warehouse-list__contact-wrapper">
                  <p className="warehouse-list__text--contact-name">
                    {warehouse.contactName}
                  </p>
                  <p className="warehouse-list__text--contact-position">
                    {warehouse.position}
                  </p>
                </div>
              </li>
              <li className="warehouse-list__item">
                <div className="warehouse-list__contact-info-wrapper">
                  <p className="warehouse-list__text--number">
                    +1 {warehouse.phoneNumber}
                  </p>
                  <p className="warehouse-list__text--email">
                    {warehouse.email}
                  </p>
                </div>
              </li>
              <li className="warehouse-list__item">
                <div className="warehouse-list__categories-wrapper">
                  <p className="warehouse-list__text--categories">
                    {warehouse.categories}
                  </p>
                </div>
              </li>
            </ul>
          );
        })}
        <div className="add-new" onClick={this.newItemClick}>
          <img className="add-new__img" src={addBtn} alt="" />
        </div>
      </div>
    );
  }
}

export default Warehouses;
