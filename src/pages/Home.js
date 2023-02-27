import React from "react";
import { NavLink, Link } from "react-router-dom";

import Form from "../components/Form";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bannercontainer">
          <img
            src={require("../pictures/pelletsheader.jpg")}
            alt="Pellets"
            className="bannerimg displaystatus"
          />
        </div>

        <section className="contentBox">
          <h1>Välkommen till Rantala VVS webbutik!</h1>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam magnam hic nostrum harum et
            optio modi ut perspiciatis corporis quo quia quaerat ut quos ea fuga
            reprehenderit. Eos veritatis itaque qui blanditiis reiciendis non
            maxime necessitatibus sit quidem nihil. Non natus inventore et dicta
            quasi vel galisum quos non exercitationem soluta.
          </p>
          <p>
            Est porro quos et rerum autem eum veritatis necessitatibus. Aut
            voluptas totam At molestiae perspiciatis aut eveniet necessitatibus
            nam quam magnam. Quo accusantium odit ut voluptate illum qui nulla
            rerum sit voluptatibus veritatis. Ut pariatur saepe aut voluptatem
            voluptatem est vero eaque!
          </p>
          <p>
            Qui expedita voluptates ea dignissimos voluptas sit quaerat ullam et
            voluptatem atque non esse fugit id magnam ducimus. Et voluptas
            eveniet id rerum vitae qui sunt veniam non assumenda modi.
          </p>
          <div className="container">
            <div className="flexContentCentered">
              <button className="button" onclick="alert('Hello World!')">
                Lorem ipsum dolor sit amet
              </button>
            </div>
            <div className="flexContentCentered">
              <button className="button" onclick="alert('Hello World!')">
                Aut ipsam magnam hic nostrum
              </button>
            </div>
          </div>
        </section>
        <div className="blue">
          <section className="contentBox">
            <h1>Vårt utbud</h1>
            <div className="container">
              <div className="gallery">
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/media(1).png")}
                    alt="Pelletskamin"
                    className="galleryimg displaystatus"
                  />
                  <div className="desc">
                    <h2>Pelletskaminer</h2>
                  </div>
                </NavLink>
              </div>
              <div className="gallery">
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/media(2).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg displaystatus"
                  />
                  <div className="desc">
                    <h2>Pelletsbrännare</h2>
                  </div>
                </NavLink>
              </div>
              <div className="gallery">
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/media(3).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg displaystatus"
                  />
                  <div className="desc">
                    <h2>Janfirepannor</h2>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="container">
              <div className="gallery">
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/media(4).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg displaystatus"
                  />
                  <div className="desc">
                    <h2>VVS-produkter</h2>
                  </div>
                </NavLink>
              </div>
              <div className="gallery">
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/media(5).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg displaystatus"
                  />
                  <div className="desc">
                    <h2>Pelletsförvaring</h2>
                  </div>
                </NavLink>
              </div>
              <div className="gallery">
                <NavLink to="utvecklas">
                  <img
                    src={require("../pictures/media(6).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg displaystatus"
                  />
                  <div className="desc">
                    <h2>Gott och blandat</h2>
                  </div>
                </NavLink>
              </div>
            </div>
          </section>
        </div>

        <section className="contentBox">
          <h1>Nyhetsbrev</h1>
          <p id="center">
            Vill du prenumerera på vårt nyhetsbrev? Ange din mejladress nedan! </p> <br></br>

          <Form />
          <div className="container">
            <div className="flexContentCentered">
              <form action="/action_page.php">
                <input
                  className="field"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Din mejladress..."/>
                <input className="button" type="submit" defaultValue="Skicka" />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
