import axios from "axios";

// buissness logic in Client App
export const getProductsData = (setProducts, url) => {
  axios
    .get(url)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => {
      alert("Error while getting the data");
    });
};
