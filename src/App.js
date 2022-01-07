import React, { useState } from "react";
import "./styles.css";
import InputContainer from "./Components/InputContainer";
import Listings from "./Components/Listings";

export default function App() {
  const [cards, setCard] = useState([]);
  const getData = (val) => {
    setCard((prevState) => [...prevState, val]);
  };
  return (
    <div className="App">
      <InputContainer getData={getData} />
      <p id="loot"></p>
      <Listings cards={cards} />
    </div>
  );
}
