import React from "react";

const Listings = ({ cards, deletion }) => {
  const deleting = (e) => {
    deletion(e.target.id);
  };
  return (
    <React.Fragment>
      {cards.map((card, value) => (
        <div>
          <span key={"card" + value}>{card.id + " " + card.cardNumber}</span>
          <button key={"delete" + value} id={card.id} onClick={deleting}>
            Delete
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Listings;
