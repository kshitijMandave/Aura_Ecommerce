import { useEffect, useState } from "react";
import Carasole from "../Carasole/Carasole";
import Crad from "../Card/Card";
import "./Electronics.css";
import { getElectronicsData } from "./Services/ElectronicsServices";
function Electronics() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    getElectronicsData(setElectronics);
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
      <div className="electronicsDataContainer">
        {electronics.map((electronicData) => {
          return <Crad data={electronicData} />;
        })}
      </div>
    </div>
  );
}

export default Electronics;
