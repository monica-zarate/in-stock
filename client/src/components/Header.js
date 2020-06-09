import React from "react";
import Logo from "../assets/Logo/Logo-instock.svg";
import { NavLink, Link } from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.inventoryHeader = React.createRef();
    this.locationHeader = React.createRef();
  }

  // componentDidMount = () => {
  // // handle active page underline for the header
  //   const inventory__header = document.getElementsByClassName(
  //     "inventory__header"
  //   );
  //   const location__header = document.getElementsByClassName(
  //     "location__header"
  //   );


    //if locations page, underline location option
    if (window.location.pathname === "/warehouses") {
      location__header[0].classList.add("active");
      inventory__header[0].classList.remove("active");
    } else {
      //else underline the inventory
      inventory__header[0].classList.add("active");
      location__header[0].classList.remove("active");
    }
  };


  // Do I need to do a componentDidUpdate?

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

              <Link to="/warehouses" className="navigation__link">

                <h2 className="navigation__options-text">Locations</h2>
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
