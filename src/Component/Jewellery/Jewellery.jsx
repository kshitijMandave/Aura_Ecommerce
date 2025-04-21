import Products from "../Products/Products";
import "./Jewellery.css";

function Jewellery() {
  return (
    <div id="jewellery">
      <Products url={"http://localhost:3001/jewelery"} />
    </div>
  );
}

export default Jewellery;
