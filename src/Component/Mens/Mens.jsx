import Products from "../Products/Products";
import "./Mens.css";

function Mens() {
  return (
    <div id="mens">
      <Products url={"http://localhost:3001/mensclothing"} />
    </div>
  );
}

export default Mens;
