import React from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inventoryHeader = React.createRef();
    this.locationHeader = React.createRef();
  }

  componentDidMount = () => {
    //handle active page underline for the header
    const inventory_header = document.getElementsByClassName(
      "inventory__header"
    );
    const location_header = document.getElementsByClassName("location__header");

    //if warehouses page, underline location option
    if (window.location.pathname === "/locations/") {
      location_header[0].classList.add("active");
      inventory_header[0].classList.remove("active");
    } else {
      //else underline the inventory
      inventory_header[0].classList.add("active");
      location_header[0].classList.remove("active");
    }
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <a href="/" className="header__anchor">
              <img className="header__logo" src={Logo} alt="Instock Logo" />
            </a>
          </div>
          <nav className="navigation">
            <div
              ref={this.inventoryHeader}
              className="navigation__options inventory__header"
            >
              <Link to="/inventory" className="navigation__link">
                <h2 className="navigation__options-text">Inventory</h2>
              </Link>
            </div>
            <div
              ref={this.locationHeader}
              className="navigation__options location__header"
            >
              <Link to="/locations" className="navigation__link">
                <h2 className="navigation__options-text">Locations</h2>
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
