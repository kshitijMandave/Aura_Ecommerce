import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

function ProductDetails() {
  const [product, setProducts] = useState({
    id: 0,
    category: "",
    image: "",
    price: "",
    title: "",
    description: "",
    rating: { rate: 0, count: 0 },
  });
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        alert("error while getting the data");
      });
  }, []);

  // useParams retun one object, where all the parameter present in property (keyVal) Pair {id: 10} so, we can destucture id from
  return (
    <>
      <div className="Details">
        <div className="leftDiv">
          <img src={product.image} width={"100%"} height={"100%"} alt="" />
        </div>
        <div className="rightDiv">
          <dl>
            <dt>
              <b>Product Name</b>
            </dt>
            <dd>
              <h5>{product.title}</h5>
            </dd>
            <br />
            <dt>
              <b>Product Description</b>
            </dt>
            <dd>
              <h5>{product.description}</h5>
            </dd>
            <br />
            <dt>
              <b>Product Price</b>
            </dt>
            <dd>
              <h5>{product.price}</h5>
            </dd>
            <br />
            <dt>
              <b>Product Rating</b>
            </dt>
            <dd>
              <h5>{product.rating.rate}</h5>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
