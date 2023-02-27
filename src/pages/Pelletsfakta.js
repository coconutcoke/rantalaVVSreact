import React from "react";

class Pelletsfakta extends React.Component {
  render() {
    return (
      <section className="contentBox">
        <h1>Pelletsfakta</h1>
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
          voluptatem atque non esse fugit id magnam ducimus. Et voluptas eveniet
          id rerum vitae qui sunt veniam non assumenda modi.
        </p>
        <video className="center" width={1000} controls>
          <source src={require("../video/pelletsvideo.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    );
  }
}

export default Pelletsfakta;
