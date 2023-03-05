import React from "react";
import { NavLink } from "react-router-dom";

class Produktsida extends React.Component {
  render() {
    return (
      <div>
        <section className="contentBox">
          <h1>Produktnamn</h1>
          <div className="container">
            <div className="flexContent2">
              <img
                className="productimg"
                src={require("../pictures/media(7).jpg")}
                alt="Pelletskamin"
              />
            </div>
            <div className="flexContent">
              <span id="price">12000</span>
              <h2 id="displayprice">12000 kr</h2>
              <form>
                <input
                  id="nPurchase"
                  className="field full"
                  type="number"
                  defaultValue={1}
                  max={99}
                  min={1}
                />
              </form>
              <button
                onclick="priceChange()"
                className="button full"
                id="buybutton"
              >
                Köp
              </button>
              <p>
                Lorem ipsum dolor sit amet. Aut ipsam magnam hic nostrum harum
                et optio modi ut perspiciatis corporis quo quia quaerat ut quos
                ea fuga reprehenderit. Eos veritatis itaque qui blanditiis
                reiciendis non maxime necessitatibus sit quidem nihil. Non natus
                inventore et dicta quasi vel galisum quos non exercitationem
                soluta. <span id="dots">...</span>{" "}
                <span id="showmore">
                  Est porro quos et rerum autem eum veritatis necessitatibus.
                  Aut voluptas totam At molestiae perspiciatis aut eveniet
                  necessitatibus nam quam magnam. Quo accusantium odit ut
                  voluptate illum qui nulla rerum sit voluptatibus veritatis. Ut
                  pariatur saepe aut voluptatem voluptatem est vero eaque! Lorem
                  ipsum dolor sit amet. Aut ipsam magnam hic nostrum harum et
                  optio modi ut perspiciatis corporis quo quia quaerat ut quos
                  ea fuga reprehenderit. Eos veritatis itaque qui blanditiis
                  reiciendis non maxime necessitatibus sit quidem nihil. Non
                  natus inventore et dicta quasi vel galisum quos non
                  exercitationem soluta.{" "}
                </span>
              </p>
              <button
                onclick="showfunction()"
                className="button"
                id="showbutton"
              >
                Visa mer
              </button>
            </div>
          </div>
        </section>
        <div className="blue">
          <section className="contentBox">
            <h1>Senast besökta</h1>
            <div className="container">
              <div className="gallery">
                <NavLink to="#">
                  <img
                    src={require("../pictures/media(1).png")}
                    alt="Pelletskamin"
                    className="galleryimg"
                  />
                  <div className="desc">
                    <h3>Pelletskaminer</h3>
                  </div>
                </NavLink>
              </div>
              <div className="gallery">
                <NavLink to="#">
                  <img
                    src={require("../pictures/media(2).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg"
                  />
                  <div className="desc">
                    <h3>Pelletsbrännare</h3>
                  </div>
                </NavLink>
              </div>
              <div className="gallery">
                <NavLink to="#">
                  <img
                    src={require("../pictures/media(3).jpg")}
                    alt="Pelletskamin"
                    className="galleryimg"
                  />
                  <div className="desc">
                    <h3>Janfirepannor</h3>
                  </div>
                </NavLink>
              </div>
            </div>
          </section>
        </div>
        <section className="contentBox">
          <h1>Rekommenderas</h1>
          <div className="container">
            <div className="gallery">
              <NavLink to="#">
                <img
                  src={require("../pictures/media(1).png")}
                  alt="Pelletskamin"
                  className="galleryimg"
                />
                <div className="desc">
                  <h3>Pelletskaminer</h3>
                </div>
              </NavLink>
            </div>
            <div className="gallery">
              <NavLink to="#">
                <img
                  src={require("../pictures/media(2).jpg")}
                  alt="Pelletskamin"
                  className="galleryimg"
                />
                <div className="desc">
                  <h3>Pelletsbrännare</h3>
                </div>
              </NavLink>
            </div>
            <div className="gallery">
              <NavLink to="#">
                <img
                  src={require("../pictures/media(3).jpg")}
                  alt="Pelletskamin"
                  className="galleryimg"
                />
                <div className="desc">
                  <h3>Janfirepannor</h3>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Produktsida;
