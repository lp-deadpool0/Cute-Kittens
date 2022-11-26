import React from "react";
import { Logo } from "./Logo";
import { Card } from "./Card";

export const Game = ({ updateData }) => {
  const [ready, setReady] = React.useState([]);

  const [cardID, setCardID] = React.useState();

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  const images = [
    "/img/image1.svg",
    "/img/image2.svg",
    "/img/image3.svg",
    "/img/image4.svg",
    "/img/image5.svg",
  ];

  shuffle(images);

  return (
    <div className="Game">
      <header className="header">
        <Logo className="mini-logo" />
        <button
          onClick={() => {
            updateData("Start");
          }}
          className="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none">
            <path
              d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM4 10.5H2V13.5H4V10.5Z"
              fill="#fef3dd"
            />
          </svg>
          Back
        </button>
      </header>

      <div className="cards">
        {images.map((img, index) => (
          <Card key={index} id={index} img={img} />
        ))}
        {images.map((img, index) => (
          <Card key={index} id={index} img={img} />
        ))}
      </div>

      <a href="https://t.me/lp_deadpool" className="autor">
        Made by lp_deadpool
      </a>
    </div>
  );
};
