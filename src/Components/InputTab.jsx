import React from "react";

const InputTab = ({ idNo, nextFocus, complete, passout }) => {
  const inputTag = (e) => {
    complete();
    var target = e.target;
    var len = target.value.length;
    var maxLength = parseInt(target.attributes["maxLength"].value, 10);
    if (len === maxLength) {
      nextFocus(target.value, idNo);
    }
  };
  // const pasted = (e) => {
  //   const text = e.target.value;
  //   console.log(text);
  //   passout(text, idNo);
  // };
  return (
    <React.Fragment>
      <input
        id={idNo}
        maxLength="4"
        onKeyUp={inputTag}
        // onPaste={pasted}
      />
    </React.Fragment>
  );
};
export default InputTab;
{
  /* onkeyup input tag function is called .
    if length of string in input is equal to 4 and if it is pointing to one of the 4 input tag.
    then the function nextFocus is called and value inside input and the next input or id is passed
*/
}
