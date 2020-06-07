import React, { Component } from "react";
import axios from "axios";

export default class Products extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:5000/inventory")
      .then((response) => {
        const res = response.data.filter((item) => {
          return item.productId === id;
        });
        this.setState({
          product: res,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="product">
        {this.state.product.map((item) => {
          return (
            <div className="product__container" key={item.productId}>
              <div className="product__header">
                <h1 className="product__label-page">{item.productName}</h1>
                <div className="product__instock-status">
                  <span className="product__instock-status-text">
                    {item.inStock}
                  </span>
                </div>
              </div>
              <hr className="product__hr"></hr>

              <div className="product__description-details-container">
                <div className="product__description-container">
                  <h4 className="product__label-description">
                    ITEM DESCRIPTION
                  </h4>
                  <p className="product__item-description">
                    {item.description}
                  </p>
                </div>
                <div className="product__details-container">
                  <div className="product__info-details">
                    <div className="product__label-value-container">
                      <h4 className="product__label-last-ordered">
                        LAST ORDERED
                      </h4>
                      <p className="product__last-ordered">
                        {item.lastOrdered}
                      </p>
                    </div>
                    <div className="product__label-value-container">
                      <h4 className="product__label-location">LOCATION</h4>
                      <p className="product__location">{item.location}</p>
                    </div>
                  </div>

                  <h4 className="product__label-quantity">QUANTITY</h4>
                  <p className="product__quantity">{item.quantity}</p>

                  <h4 className="product__label-categories">CATEGORIES</h4>
                  <p className="product__categories">{item.categories}</p>
                </div>
              </div>
              <hr className="product__hr"></hr>
              <div className="product__btn-container">
                <button className="product__edit-btn">EDIT</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
