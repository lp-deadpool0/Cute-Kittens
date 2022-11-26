import React from "react";
import "./null.scss";
import "./style.scss";
import { StartScreen } from "./StartScreen";
import { Game } from "./Game";

function App() {
  const [screen, setScreen] = React.useState("Start");

  const updateData = (value) => {
    setScreen(value);
  };
  switch (screen) {
    case "Start":
      return <StartScreen updateData={updateData} />;
    case "Game":
      return <Game updateData={updateData} />;
    default:
      return <StartScreen updateData={updateData} />;
  }
}

export default App;
