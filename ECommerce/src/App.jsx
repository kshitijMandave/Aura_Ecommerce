import "./App.css";
import Nav from "./Component/Nav/Nav";
import Electronics from "./Component/Electronics/Electronics";
import Home from "./Component/Home/Home";
import Jewellery from "./Component/Jewellery/Jewellery";
import Mens from "./Component/Mens/Mens";
import Womens from "./Component/Womens/Womens";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Electronics />
      <Jewellery />
      <Mens />
      <Womens />
    </>
  );
}

export default App;
