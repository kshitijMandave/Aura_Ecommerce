import { useEffect, useState } from "react";
import Carasole from "../Carasole/Carasole";
import Crad from "../Card/Card";
import "./Jewellery.css";
import { getJewelleryData } from "./Services/JwellariesServices";

function Jewellery() {
  const [jewellery, setJewellery] = useState([]);

  useEffect(() => {
    getJewelleryData(setJewellery);
  }, []);

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
      <div className="jewelleryDataContainer">
        {jewellery.map((jewelleryData) => {
          return <Crad data={jewelleryData} />;
        })}
      </div>
    </div>
  );
}

export default Jewellery;
