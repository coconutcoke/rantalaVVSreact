import Home from "./pages/Home";
import OmOss from "./pages/OmOss";
import Pelletsfakta from "./pages/Pelletsfakta";
import Produktsida from "./pages/Produktsida";
import VillkorInfo from "./pages/VillkorInfo";
import Utvecklas from "./pages/Utvecklas";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="om-oss" element={<OmOss />} />
          <Route path="pelletsfakta" element={<Pelletsfakta />} />
          <Route path="produktsida" element={<Produktsida />} />
          <Route path="villkor-info" element={<VillkorInfo />} />
          <Route path="utvecklas" element={<Utvecklas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Header />}>
    <Route index element={<Home />} />
    <Route path="blogs" element={<omOss />} />
  </Route>
</Routes>
</BrowserRouter> */

/* <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="om-oss" element={<omOss />} />
      </Routes>
      <Footer />
    </BrowserRouter> */
