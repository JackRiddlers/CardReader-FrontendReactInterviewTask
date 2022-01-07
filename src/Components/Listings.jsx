import React from "react";

const Listings = ({ cards }) => {
  return (
    <React.Fragment>
      {cards.map((card, id) => (
        <div key={"card" + id}>{card}</div>
      ))}
    </React.Fragment>
  );
};

export default Listings;
