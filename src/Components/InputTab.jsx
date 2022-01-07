import React from "react";

const InputTab = ({ id, nextfocus, pastedDataGet }) => {
  const lengthCheck = (eventTarget) => {
    var length = eventTarget.value.length;
    if (length === 4) {
      nextfocus(eventTarget.value, id);
    }
  };
  const checkIfNum = (e) => {
    let key = e.key;
    if (/^-?\d*$/.test(key)) {
      lengthCheck(e.target);
    }
  };
  const handlePaste = (e) => {
    var clipboardData, pastedData;

    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData("Text");
    pastedDataGet(pastedData);
  };
  return (
    <React.Fragment>
      <input id={id} maxLength="4" onKeyUp={checkIfNum} onPaste={handlePaste} />
    </React.Fragment>
  );
};

export default InputTab;
