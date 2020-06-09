import React from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { NavLink, Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inventoryHeader = React.createRef();
    this.locationHeader = React.createRef();
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <Link to="/inventory" className="header__anchor">
              <img className="header__logo" src={Logo} alt="Instock Logo" />
            </Link>
          </div>
          <nav className="navigation">
            <div
              ref={this.inventoryHeader}
              className="navigation__options inventory__header"
            >
              <NavLink to="/inventory" className="navigation__link">
                <h2 className="navigation__options-text">Inventory</h2>
              </NavLink>
            </div>
            <div
              ref={this.locationHeader}
              className="navigation__options location__header"
            >
              <NavLink to="/warehouses" className="navigation__link">
                <h2 className="navigation__options-text">Locations</h2>
              </NavLink>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
