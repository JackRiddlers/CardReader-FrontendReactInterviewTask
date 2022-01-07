import React, { useEffect, useState } from "react";
import "./styles.css";
import InputContainer from "./Components/InputContainer";
import Listings from "./Components/Listings";

export default function App() {
  const [cards, setCard] = useState([]);
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
    const obj = { id: cards.length, cardNumber: cardNum };
    setCard((prevState) => [...prevState, obj]);
    console.log(cards);
  };
  const deletion = (idVal) => {
    let toNextStage = cards.filter((card) => idVal !== card.id);
    setCard(toNextStage);
  };
  return (
    <div className="App">
      <InputContainer getCardNumber={getCardNumber} />
      <Listings cards={cards} deletion={deletion} />
    </div>
  );
}
