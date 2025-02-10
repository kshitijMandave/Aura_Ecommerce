import axios from "axios";
export const getElectronicsData = (setElectronics) => {
  axios
    .get("http://localhost:3000/electronics")
    .then((res) => {
      setElectronics(res.data);
    })
    .catch((error) => {
      alert("Error while getting the data");
    });
};
