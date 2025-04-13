import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  // useParams retun one object, where all the parameter present in property (keyVal) Pair {id: 10} so, we can destucture id from
  return (
    <div>
      <h1>Product Details : {id}</h1>
    </div>
  );
}

export default ProductDetails;
