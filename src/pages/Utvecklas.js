import React from "react";
import { NavLink, Link } from "react-router-dom";

class Pelletsfakta extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <h1>Denna sida är under utveckling.</h1>
        <NavLink to="/">
          <p id="center">Klicka här för att återgå till startsidan.</p>
        </NavLink>
      </section>
    );
  }
}

export default Pelletsfakta;
