import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="blue">
          <div className="menucontainer displaystatus">
            <nav className="menubox" id="topmenu">
              <ul className="menu">
                <li className="menuitem">
                  <NavLink to="#" className="hamburger" onclick="hideMenu()">
                    <img
                      src={require("../pictures/menu.png")}
                      className="iconCogwheel"
                      alt="Meny-ikon"
                    />
                  </NavLink>
                </li>
                <li className="menuitem">
                  <NavLink to="utvecklas">Kontakt</NavLink>
                </li>
                <li className="menuitem">
                  <NavLink to="om-oss">Om oss</NavLink>
                </li>
                <li className="menuitem">
                  <NavLink to="villkor-info">Villkor &amp; info</NavLink>
                </li>
                <li className="menuitem">
                  <NavLink to="pelletsfakta">Pelletsfakta</NavLink>
                </li>
              </ul>
            </nav>

            <div className="flexContentCentered">
              <div className="addressItems">
                <div>
                  <p className="smallHide"> SVENSKA / SEK / INKL. MOMS</p>
                </div>
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/cogwheel.png")}
                    className="iconCogwheel smallHide"
                    alt="Kugghjul"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="headercontainer">
          <div className="flexContentCentered">
            <NavLink to="utvecklas">
              <img
                className="iconSearch"
                src={require("../pictures/search.png")}
                alt="picture"
              />
              <h3 className="textcolor smallHide">Sök</h3>
            </NavLink>
          </div>

          <div className="flexContentCentered">
            <NavLink to="/">
              <img
                src={require("../pictures/logga-transp.png")}
                alt="picture"
                className="logo"
              />
            </NavLink>
          </div>

          <div className="flexContentCentered">
            <NavLink to="utvecklas">
              <img
                className="iconTrolley"
                src={require("../pictures/cart.jpg")}
                alt="picture"
              />
              <h3 className="textcolor smallHide">Varukorg</h3>
            </NavLink>
          </div>
        </div>

        <div className="menucontainer displaystatus">
          <nav className="menubox2" id="shopmenu">
            <ul className="menu">
              <li className="dropdown">
                <NavLink
                  to="#"
                  className="shoppingbag"
                  onclick="hideShopMenu()"
                >
                  <img
                    src={require("../pictures/shop.png")}
                    className="iconShoppingbag"
                    alt="Meny-ikon"
                  />
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="utvecklas" className="dropdown-button">
                  Pelletskaminer
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="produktsida">Produktsida</NavLink>
                  <NavLink to="utvecklas">Exempellänk</NavLink>
                </div>
              </li>
              <li className="dropdown">
                <NavLink to="utvecklas" className="dropdown-button">
                  Pelletsbrännare
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="utvecklas">Exempellänk</NavLink>
                </div>
              </li>
              <li className="dropdown">
                <NavLink to="utvecklas" className="dropdown-button">
                  Janfirepannor
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="utvecklas" className="dropdown-button">
                  VVS-produkter
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="utvecklas">Exempellänk</NavLink>
                </div>
              </li>
              <li className="dropdown">
                <NavLink to="utvecklas" className="dropdown-button">
                  Pelletsförvaring
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="utvecklas" className="dropdown-button">
                  Gott &amp; blandat
                </NavLink>
                <div className="dropdown-content">
                  <NavLink to="utvecklas">Exempellänk</NavLink>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
