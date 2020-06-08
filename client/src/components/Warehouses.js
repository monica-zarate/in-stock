import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import KebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";
class WarehouseDetail extends Component {
  render() {
    return (
      <div className="warehouse">
        <div className="warehouse-detail">
          <div className="warehouse-detail__top-wrapper">
            <Link to={`/locations`} className="warehouse-product-list__link">
              <button className="warehouse-detail__btn">
                <img
                  src={BackArrow}
                  alt="Back Arrow"
                  className="warehouse-detail__img"
                />
              </button>
            </Link>
            <span className="warehouse-detail__name">Warehouse Name</span>
          </div>
          <div className="warehouse-detail__info-wrapper">
            <div className="warehouse-detail__address-wrapper">
              <span className="warehouse-detail__text--subheader">ADDRESS</span>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--address">
                  123 Main Street W.
                </p>
                <p className="warehouse-detail__text--address">Suite 201</p>
              </div>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--address">Toronto, ON</p>
                <p className="warehouse-detail__text--address">M65GB7 CA</p>
              </div>
            </div>
            <div className="warehouse-detail__contact-wrapper">
              <span className="warehouse-detail__text--subheader">CONTACT</span>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--name">Mara Weinberg</p>
                <p className="warehouse-detail__text--position">
                  Warehouse Manager
                </p>
              </div>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--number">
                  +1 416 678 2345
                </p>
                <p className="warehouse-detail__text--email">
                  weinberg@instock.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="warehouse-product">
          <ul className="warehouse-product-list">
            <li className="warehouse-product-list__item">
              <span className="warehouse-product-list__text--label">ITEM</span>
              <p className="warehouse-product-list__text--product-name">
                Product Name Here
              </p>
              <p className="warehouse-product-list__text--para">
                Here is a very brief description of the product in the
                inventory...
              </p>
              <button className="warehouse-product-list__btn">
                <img
                  src={KebabIcon}
                  alt="Kebab Icon"
                  className="warehouse-detail__img"
                />
              </button>
            </li>
            <li className="warehouse-product-list__item">
              <span className="warehouse-product-list__text--label">
                LAST ORDERED
              </span>
              <p className="warehouse-product-list__text--para">05/24/2018</p>
            </li>
            <li className="warehouse-product-list__item">
              <span className="warehouse-product-list__text--label">
                LOCATION
              </span>
              <p className="warehouse-product-list__text--para">Toronto, CA</p>
            </li>
            <li className="warehouse-product-list__item">
              <span className="warehouse-product-list__text--label">
                QUANTITY
              </span>
              <p className="warehouse-product-list__text--para">12,000</p>
            </li>
            <li className="warehouse-product-list__item">
              <span className="warehouse-product-list__text--label">
                STATUS
              </span>
              <p className="warehouse-product-list__text--para">In Stock</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WarehouseDetail;
