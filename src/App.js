import React, { useEffect, useState } from "react";
import "./styles.css";
import InputContainer from "./Components/InputContainer";
import Listings from "./Components/Listings";

export default function App() {
  const [cards, setCard] = useState([]);
  const [counter, setCounter] = useState(6);
  const getDatas = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res) => res.json())
      .then((myJson) => setCard(myJson));
  };
  useEffect(() => {
    getDatas();
  }, []);
  const getCardNumber = (cardNum) => {
    let count = counter + 1;
    setCounter(count);
    const obj = { id: `${count}`, cardNumber: cardNum };
    setCard((prevState) => [...prevState, obj]);
  };
  const deletion = (idVal) => {
    let toNextStage = cards.filter((card) => idVal !== card.id);
    setCard(toNextStage);
    console.log(toNextStage);
  };
  return (
    <div className="App">
      <InputContainer getCardNumber={getCardNumber} />
      <Listings cards={cards} deletion={deletion} />
    </div>
  );
}
