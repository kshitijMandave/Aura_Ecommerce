import "./App.css";
import Nav from "./Component/Nav/Nav";
import Electronics from "./Component/Electronics/Electronics";
import Home from "./Component/Home/Home";
import Jewellery from "./Component/Jewellery/Jewellery";
import Mens from "./Component/Mens/Mens";
import Womens from "./Component/Womens/Womens";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Electronics"} element={<Electronics />} />
        <Route path={"/Jewellery"} element={<Jewellery />} />
        <Route path={"/Mens"} element={<Mens />} />
        <Route path={"/Womens"} element={<Womens />} />
      </Routes>
    </>
  );
}

export default App;
