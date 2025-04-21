import Products from "../Products/Products";
import "./Electronics.css";
function Electronics() {
  return (
    <div id="electronics">
      <Products url={"http://localhost:3001/electronics"} />
    </div>
  );
}

export default Electronics;
