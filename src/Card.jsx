import React from "react";

export const Card = ({ img, id }) => {
  const getID = () => {
    console.log(id);
  };

  const guess = () => setGuessed(!guessed);

  const [guessed, setGuessed] = React.useState(false);

  if (!guessed) {
    return (
      <div id={id} onClick={getID} className="card">
        <div className="front">
          <img src="/img/cardFront.png" alt="img" />
        </div>
        <div className="back">
          <div className="back-content ">
            <img src="/img/cardBack.png" alt="img" />
            <div className="backImg">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
