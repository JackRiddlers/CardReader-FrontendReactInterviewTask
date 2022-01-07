import React, { useState } from "react";
import "./styles.css";
import InputContainer from "./Components/InputContainer";
import Listings from "./Components/Listings";

export default function App() {
  const [value, setValue] = useState("");
  const [cards, setCard] = useState([]);
  if (value.length === 16) {
    console.log(value);
  }
  const getData = (val) => {
    setValue((prevState) => prevState + val);
  };
  const clear = () => {
    [1, 2, 3, 4].map((ids) => (document.getElementById(ids).value = ""));
  };
  return (
    <div className="App">
      <InputContainer getData={getData} />
      <button
        id="adder"
        onClick={() => {
          console.log(value);
          setCard((prevState) => [...prevState, value]);
          setValue("");
          clear();
        }}
      >
        Add Card
      </button>
      <Listings cards={cards} />
    </div>
  );
}
