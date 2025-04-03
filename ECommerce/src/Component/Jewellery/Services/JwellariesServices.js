import axios from "axios";

// buissness logic in Client App
export const getJewelleryData = (setJewellery) => {
  axios
    .get("http://localhost:3000/jewelery")
    .then((res) => {
      setJewellery(res.data);
    })
    .catch((error) => {
      alert("Error while getting the data");
    });
};
