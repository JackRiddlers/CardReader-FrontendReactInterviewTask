import React, { useState } from "react";
import InputTab from "./InputTab";

const InputContainer = ({ getData }) => {
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  let iDs = [1, 2, 3, 4];
  const nextFocus = (val, idNo) => {
    if (idNo <= 3) {
      document.getElementById(idNo + 1).focus();
    } else if (idNo === 4) document.getElementById("adder").focus();

    switch (idNo) {
      case 1:
        setCardNumber(val + cardNumber.slice(4, 17));
        break;
      case 2:
        setCardNumber(cardNumber.slice(0, 4) + val + cardNumber.slice(8, 17));
        break;
      case 3:
        setCardNumber(cardNumber.slice(0, 8) + val + cardNumber.slice(12, 17));
        break;
      case 4:
        setCardNumber(cardNumber.slice(0, 12) + val);
        break;
      default:
        console.log(cardNumber);
    }
  };
  const clear = () => {
    iDs.map((ids) => (document.getElementById(ids).value = ""));
  };
  return (
    <React.Fragment>
      {iDs.map((value) => (
        <InputTab key={"INPUT" + value} idNo={value} nextFocus={nextFocus} />
      ))}
      <button
        id="adder"
        onClick={() => {
          nextFocus();
          clear();
        }}
      >
        Add Card
      </button>
    </React.Fragment>
  );
};
export default InputContainer;
