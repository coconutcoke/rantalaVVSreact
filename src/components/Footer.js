import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="blue">
        <footer className="footercontainer">
          <address>
            <div className="addressItems">
              <img
                src={require("../pictures/location.jpg")}
                alt="Plats"
                className="iconStyle"
              />
              <div className="addresstext">
                <p>
                  Sörgissjö 144
                  <br />
                  896 93 <br />
                  Gideå
                </p>
              </div>
            </div>
            <div className="addressItems">
              <img
                src={require("../pictures/phone.png")}
                alt="Telefonnummer"
                className="iconStyle"
              />
              <div className="addresstext">
                <p>
                  Jens 070 6070 374
                  <br />
                  Pernilla 076 8145 551
                </p>
              </div>
            </div>
            <div className="addressItems">
              <img
                src={require("../pictures/mail.png")}
                alt="Mejladress"
                className="iconStyle"
              />
              <div className="addresstext">
                <p>
                  <a href="mailto:rantalavvs@gmail.com">rantalavvs@gmail.com</a>
                </p>
              </div>
            </div>
          </address>
          <nav className="flexContent">
            <h3>Följ oss</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/rantalavvs/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/rantalavvs/">Instagram</a>
              </li>
            </ul>
          </nav>
          <nav className="flexContent">
            <h3>Länkar</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/rantalavvs/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/rantalavvs/">Instagram</a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;
