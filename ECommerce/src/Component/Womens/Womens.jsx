import Products from "../Products/Products";
import "./Womens.css";

function Womens() {
  return (
    <div id="womens">
      <Products url={"http://localhost:3000/womensclothing"} />
    </div>
  );
}

export default Womens;
