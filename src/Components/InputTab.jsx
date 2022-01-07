import React from "react";

const InputTab = ({ idNo, nextFocus }) => {
  const inputTag = (e) => {
    var target = e.target;
    var maxLength = parseInt(target.attributes["maxLength"].value, 10);
    var len = target.value.length;
    if (len === maxLength) {
      console.log(idNo);
      nextFocus(target.value, idNo);
    }
  };
  return (
    <React.Fragment>
      <input id={idNo} maxLength="4" onKeyUp={inputTag} />
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
