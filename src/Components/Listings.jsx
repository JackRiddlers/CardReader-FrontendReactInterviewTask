import React from "react";
import { MdDelete } from "react-icons/md";
const Listings = ({ cards, deletion }) => {
  const deleting = (e) => {
    deletion(e.target.id);
  };
  return (
    <React.Fragment>
      <div className="card-set">
        {cards.map((card, value) => (
          <div className="card-name-container">
            <span className="cardNumber" key={"card" + value}>
              {card.cardNumber}
            </span>
            <button
              className="delete"
              key={"delete" + value}
              id={card.id}
              onClick={deleting}
            >
              <MdDelete className="del-icon" />
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Listings;
