import React, { useState } from "react";
import InputTab from "./InputTab";

const InputContainer = ({ getData }) => {
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  let iDs = [1, 2, 3, 4];
  const passout = (text, idNo) => {
    iDs.map((id) => {
      let start = id * 4 - 4;
      let end = id * 4 - 1;
      document.getElementById(id).value = text.slice(start, end);
    });
    document.getElementById("adder").focus();
  };
  const nextFocus = (val, idNo) => {
    if (idNo <= 3) {
      document.getElementById(idNo + 1).focus();
    } else if (idNo === 4) document.getElementById("adder").focus();
    switch (idNo) {
      case 1:
        setCardNumber(val + cardNumber.slice(4, 17));
        console.log(cardNumber);
        break;
      case 2:
        setCardNumber(cardNumber.slice(0, 4) + val + cardNumber.slice(8, 17));
        console.log(cardNumber);
        break;
      case 3:
        setCardNumber(cardNumber.slice(0, 8) + val + cardNumber.slice(12, 17));
        console.log(cardNumber);
        break;
      case 4:
        setCardNumber(cardNumber.slice(0, 12) + val);
        console.log(cardNumber);
        break;
      default:
    }
  };
  const clear = () => {
    iDs.map((ids) => (document.getElementById(ids).value = ""));
    setButtonState(true);
    setCardNumber("0000000000000000");
  };
  const [buttonState, setButtonState] = useState(true);
  const complete = () => {
    //checks if all inputs are filled
    iDs.map((val) => {
      //maps each input element
      let element = document.getElementById(val).value; //takes the value of input
      if (element == null) {
        //check if its null
        //if any input is null button is deactivated
        setButtonState(true);
        return null;
        //if input is null,checks if input length is 4
      } else if (element.length < 4) {
        //if not button is disabled
        setButtonState(true);
        return null;
      }
      setButtonState(false);
    });
  };

  return (
    <React.Fragment>
      {iDs.map((value) => (
        <InputTab
          key={"INPUT" + value}
          idNo={value}
          nextFocus={nextFocus}
          complete={complete}
          passout={passout}
        />
      ))}
      <button
        disabled={buttonState}
        id="adder"
        onClick={() => {
          clear();
          console.log(cardNumber);
          getData(cardNumber);
        }}
      >
        Add Card
      </button>
    </React.Fragment>
  );
};
export default InputContainer;
