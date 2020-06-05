import React, { Component } from "react";

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
              className="location__search-input"
            />
          </form>
        </div>
        <ul className="warehouse-list">
          <li className="warehouse-list__item">
            <div className="warehouse-list__warehose-wrapper">
              <h3 className="warehouse-text--name">Warehouse Number 1</h3>
              <p className="warehouse-list__text--address">Location...</p>
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
              <p className="warehouse-list__text--number">111-111-111</p>
              <p className="warehouse-list__text--email">something@email.com</p>
            </div>
          </li>
          <li className="warehouse-list__item">
            <div className="warehouse-list__categories-wrapper">
              <p className="warehouse-list__text--categories">Categories...</p>
              <button className="warehouse-list__btn">
                <img src={ArrowRight} alt="Arrow Right" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Locations;
