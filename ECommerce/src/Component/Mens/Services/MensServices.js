import axios from "axios";

// buissness logic in Client App
export const getMensData = (setMens) => {
  axios
    .get("http://localhost:3000/mensclothing")
    .then((res) => {
      setMens(res.data);
    })
    .catch((error) => {
      alert("Error while getting the data");
    });
};
