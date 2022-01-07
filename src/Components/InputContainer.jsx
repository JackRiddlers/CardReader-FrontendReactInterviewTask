import React from "react";
import InputTab from "./InputTab";

const InputContainer = ({ getData }) => {
  const nextFocus = (val, idNo) => {
    getData(val);
    if (idNo > 4) {
      document.getElementById("adder").focus();
      return;
    }
    document.getElementById(idNo).focus();
  };
  let iDs = [1, 2, 3, 4];
  return iDs.map((value) => <InputTab idNo={value} nextFocus={nextFocus} />);
};
export default InputContainer;
