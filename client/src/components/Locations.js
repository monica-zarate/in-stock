import React, { Component } from "react";
import ArrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

import ArrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

class Locations extends Component {
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
        <ul className="warehouse-list">
          <li className="warehouse-list__item">
            <div className="warehouse-list__warehouse-wrapper">
              <span className="warehouse-list__text--name">
                Warehouse Number 1
              </span>
            </div>
            <div className="warehouse-list__warehose-wrapper">
              <h3 className="warehouse-text--name">Warehouse Number 1</h3>

              <p className="warehouse-list__text--address">Location...</p>
              <button className="warehouse-list__btn">
                <img src={ArrowRight} alt="Arrow Right" />
              </button>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__contact-wrapper">
              <p className="warehouse-list__text--contact-name">First Last</p>
              <p className="warehouse-list__text--contact-position">
                Position...
              </p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__contact-info-wrapper">
              <p className="warehouse-list__text--number">+1 111 111 111</p>
              <p className="warehouse-list__text--email">something@email.com</p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__categories-wrapper">
              <p className="warehouse-list__text--categories">
                Industrial, Automotive, Heavy, Mechanical, Engineering
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Locations;
