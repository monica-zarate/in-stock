import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import KebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";
class WarehouseDetail extends Component {
  componentDidUpdate(prevProps) {
    const oldWarehouseId = prevProps.match.params.id;
    const newWarehouseId = this.props.match.params.id;

    if (newWarehouseId !== oldWarehouseId) {
      this.getWarehouseDetail(newWarehouseId);
    }
  }
  render() {
    const {
      id,
      name,
      address,
      location,
      contactName,
      position,
      email,
      phoneNumber,
    } = this.props.warehouse;

    if (id === undefined) {
      return <p>Loading</p>;
    }
    return (
      <div className="warehouse">
        <div className="warehouse-detail">
          <div className="warehouse-detail__top-wrapper">
            <Link to={`/warehouses`} className="warehouse-product-list__link">
              <button className="warehouse-detail__btn">
                <img
                  src={BackArrow}
                  alt="Back Arrow"
                  className="warehouse-detail__img"
                />
              </button>
            </Link>
            <span className="warehouse-detail__name">{name}</span>
          </div>
          <div className="warehouse-detail__info-wrapper">
            <div className="warehouse-detail__address-wrapper">
              <span className="warehouse-detail__text--subheader">ADDRESS</span>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--address">{address}</p>
                <p className="warehouse-detail__text--address">{address}</p>
              </div>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--address">{location}</p>
                <p className="warehouse-detail__text--address">{location}</p>
              </div>
            </div>
            <div className="warehouse-detail__contact-wrapper">
              <span className="warehouse-detail__text--subheader">CONTACT</span>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--name">{contactName}</p>
                <p className="warehouse-detail__text--position">{position}</p>
              </div>
              <div className="warehouse-detail__text-wrapper">
                <p className="warehouse-detail__text--number">{phoneNumber}</p>
                <p className="warehouse-detail__text--email">{email}</p>
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
