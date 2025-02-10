import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Media from "./Components/Media/Media";
import Carasole from "./Components/Carasole/Carasole";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Media />
      {/* <Carasole /> */}
    </>
  );
}

export default App;
