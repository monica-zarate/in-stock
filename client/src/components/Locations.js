import React, { Component } from "react";
import axios from "axios";

import ArrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

class Locations extends Component {
  state = {
    warehouseList: [],
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
        {this.state.warehouseList.map((warehouse) => {
          return (
            <ul className="warehouse-list">
              <li className="warehouse-list__item">
                <div className="warehouse-list__warehouse-wrapper">
                  {/* <Link
                    to={`/warehouse/${warehouse.id}`}
                    className="warehouse-list__link"
                  > */}
                  <span className="warehouse-list__text--name">
                    {warehouse.name}
                  </span>
                  {/* </Link> */}
                  <p className="warehouse-list__text--address">
                    {warehouse.address}
                  </p>
                  <button className="warehouse-list__btn">
                    <img src={ArrowRight} alt="Arrow Right" />
                  </button>
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
      </div>
    );
  }
}

export default Locations;
