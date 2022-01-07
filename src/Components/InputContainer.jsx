import React, { useState } from "react";
import InputTab from "./InputTab";
const InputContainer = ({ getCardNumber }) => {
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const fourInputs = [1, 2, 3, 4];
  const pastedDataGet = (pastedValue) => {
    let pattern = /\D/g;
    let result = pastedValue.match(pattern);
    if (!result) {
      setCardNumber(pastedValue);
      focusMethod(4);
      fourInputs.map((id) => {
        var end = id * 4 - 1;
        var start = end - 3;
        document.getElementById(id).value = pastedValue.slice(start, end + 1);
      });
    }
  };

  const clear = () => {
    fourInputs.map((id) => (document.getElementById(id).value = ""));
  };

  const getCardNo = () => {
    let hasContent = fourInputs.filter(
      (id) => document.getElementById(id).value.length !== 4
    );
    let notAlphabet = fourInputs.filter((id) => {
      let txt = document.getElementById(id).value;
      let pattern = /\D/g;
      let result = txt.match(pattern);
      return result;
    });
    if (hasContent.length === 0 && notAlphabet.length === 0) {
      clear();
      getCardNumber(cardNumber);
      setCardNumber("0000000000000000");
    }
  };

  const focusMethod = (x) => {
    document.getElementById(x).focus();
  };
  const nextfocus = (fourDigitValue, id) => {
    switch (id) {
      case 1:
        setCardNumber(fourDigitValue + cardNumber.slice(4, 17));
        focusMethod(2);
        break;
      case 2:
        setCardNumber(
          cardNumber.slice(0, 4) + fourDigitValue + cardNumber.slice(8, 17)
        );
        focusMethod(3);
        break;
      case 3:
        setCardNumber(
          cardNumber.slice(0, 8) + fourDigitValue + cardNumber.slice(12, 17)
        );
        focusMethod(4);
        break;
      case 4:
        setCardNumber(cardNumber.slice(0, 12) + fourDigitValue);
        focusMethod("add");
        break;
      default:
    }
  };
  return (
    <React.Fragment>
      {fourInputs.map((data) => (
        <InputTab
          key={"input" + data}
          id={data}
          nextfocus={nextfocus}
          pastedDataGet={pastedDataGet}
        />
      ))}
      <button id="add" onClick={getCardNo}>
        Submit
      </button>
    </React.Fragment>
  );
};
export default InputContainer;
