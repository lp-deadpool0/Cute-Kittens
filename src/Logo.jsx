import React from "react";

export const Logo = ({ className }) => {
  return (
    <div className={"logo" + " " + className}>
      <img src="/logo.svg" alt="logo" />
    </div>
  );
};
