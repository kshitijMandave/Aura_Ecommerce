import { useEffect, useState } from "react";
import Carasole from "../Carasole/Carasole";
import Crad from "../Card/Card";
import "./Products.css";
import { getProductsData } from "./Services/ProductsServices";

function Products({ url }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData(setProducts, url);
  }, [url]);

  return (
    <div>
      <Carasole />

      <div className="sorting">
        <div className="rateSorting">
          <select name="" id="">
            <option value="">Under</option>
          </select>
        </div>
        <div className="priceSorting"></div>
      </div>

      <div className="productsDataContainer">
        {products.length === 0 ? (
          <p className="loading-text">Loading products...</p>
        ) : (
          products.map((productsData) => (
            <Crad key={productsData.id} data={productsData} />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
