import React, { Component } from "react";
import ArrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

class Locations extends Component {
  // Component state object
  state = {
    warehouseData: [],
  };

  render() {
    console.log(this.state);
    return (
      <div className="location">
        <div className="location__top-wrapper">
          <span className="location__title">Locations</span>
          <form className="location__form">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="location__search-input"
            />
          </form>
        </div>
        <ul className="warehouse-list">
          <li className="warehouse-list__item">
            <div className="warehouse-list__warehose-wrapper">
              <span className="warehouse-text--name">
                {this.state.warehouseData.name}
              </span>
              <p className="warehouse-list__text--address">
                {this.state.warehouseData.location}
              </p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__contact-wrapper">
              <p className="warehouse-list__text--contact-name">
                {this.state.warehouseData.contactName}
              </p>
              <p className="warehouse-list__text--contact-position">
                {this.state.warehouseData.position}
              </p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__contact-info-wrapper">
              <p className="warehouse-list__text--number">
                {this.state.warehouseData.phoneNumber}
              </p>
              <p className="warehouse-list__text--email">
                {this.state.warehouseData.email}
              </p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__categories-wrapper">
              <p className="warehouse-list__text--categories">
                {this.state.warehouseData.categories}
              </p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <button className="warehouse-list__btn">
              <img src={ArrowRight} alt="Arrow Right" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Locations;
