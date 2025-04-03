import { useEffect, useState } from "react";
import Carasole from "../Carasole/Carasole";
import Crad from "../Card/Card";
import "./Mens.css";

import { getMensData } from "./Services/MensServices";

function Mens() {
  const [mens, setMens] = useState([]);

  useEffect(() => {
    getMensData(setMens);
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
      <div className="mensDataContainer">
        {mens.map((mensData) => {
          return <Crad data={mensData} />;
        })}
      </div>
    </div>
  );
}

export default Mens;
