import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import KebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";
class WarehouseDetail extends Component {
  state = {
    warehouse: null,
  };

  componentDidMount() {
    console.log("Warehouse Detail", this.props);
    console.log(this.props.warehouses);
    this.setState({
      warehouse: this.props.warehouses.filter((warehouse) => {
        return warehouse.id === Number(this.props.match.params.id);
      }),
    });
    console.log(this.state.warehouse);
  }

  kebabClick(event) {
    console.dir(event.target);
    event.target.parentNode.parentNode.parentNode.classList.toggle(
      "btn-active"
    );
  }
  render() {
    if (this.state.warehouse == null) {
      return <p>Loading</p>;
    }
    const {
      id,
      name,
      address,
      location,
      contactName,
      position,
      email,
      phoneNumber,
      products,
    } = this.state.warehouse[0];

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
              </div>
              <div className="warehouse-detail__text-wrapper">
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
          {products.map((product) => {
            return (
              <ul key={product.productId} className="warehouse-product-list">
                <li className="warehouse-product-list__item">
                  <span className="warehouse-product-list__text--label">
                    ITEM
                  </span>
                  <div className="warehouse-product-list__text-wrapper">
                    <p className="warehouse-product-list__text--product-name">
                      {product.productName}
                    </p>
                    <p className="warehouse-product-list__text--para">
                      {product.description}
                    </p>
                  </div>
                  <button
                    onClick={this.kebabClick}
                    className="warehouse-product-list__btn"
                  >
                    <img
                      src={KebabIcon}
                      alt="Kebab Icon"
                      className="warehouse-product-list__img"
                    />
                  </button>
                  <button className="delete-btn">Remove</button>
                </li>
                <li className="warehouse-product-list__item">
                  <span className="warehouse-product-list__text--label">
                    LAST ORDERED
                  </span>
                  <div className="warehouse-product-list__text-wrapper">
                    <p className="warehouse-product-list__text--para">
                      {product.lastOrdered}
                    </p>
                  </div>
                </li>
                <li className="warehouse-product-list__item">
                  <span className="warehouse-product-list__text--label">
                    LOCATION
                  </span>
                  <div className="warehouse-product-list__text-wrapper">
                    <p className="warehouse-product-list__text--para">
                      {product.location}
                    </p>
                  </div>
                </li>
                <li className="warehouse-product-list__item">
                  <span className="warehouse-product-list__text--label">
                    QUANTITY
                  </span>
                  <div className="warehouse-product-list__text-wrapper">
                    <p className="warehouse-product-list__text--para">
                      {product.quantity}
                    </p>
                  </div>
                </li>
                <li className="warehouse-product-list__item">
                  <span className="warehouse-product-list__text--label">
                    STATUS
                  </span>
                  <div className="warehouse-product-list__text-wrapper">
                    <p className="warehouse-product-list__text--para">
                      {product.inStock}
                    </p>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WarehouseDetail;
