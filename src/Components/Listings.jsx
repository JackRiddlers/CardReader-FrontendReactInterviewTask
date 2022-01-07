import React from "react";

const Listings = ({ cards }) => {
  return (
    <React.Fragment>
      {cards.map((card) => (
        <div>
          <span>{card.cardNumber}</span>
          <button>Delete</button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Listings;
