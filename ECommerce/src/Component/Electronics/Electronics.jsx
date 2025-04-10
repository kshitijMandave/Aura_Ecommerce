import Products from "../Products/Products";
import "./Electronics.css";
function Electronics() {
  return (
    <div id="electronics">
      <Products url={"http://localhost:3000/electronics"} />
    </div>
  );
}

export default Electronics;
