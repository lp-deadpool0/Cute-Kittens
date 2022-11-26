import React from "react";
import { Logo } from "./Logo";

export const StartScreen = ({ updateData }) => {
  return (
    <div className="start-screen">
      <Logo />

      <button
        onClick={() => {
          updateData("Game");
        }}
        className="start-btn">
        Start
      </button>
      <a href="https://t.me/lp_deadpool" className="autor">
        Made by lp_deadpool
      </a>
    </div>
  );
};
