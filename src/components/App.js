import React from "react";
import "../App.css";
import Game from "./Game";
import EndCard from "./EndCard";
import WelcomePage from "./WelcomePage";
import { Router, navigate } from "@reach/router";

function App() {
  const gamestart = () => {
    navigate("game");
  };

  const gamerestart = () => {
    navigate("/");
  };
  return (
    <div>
      <Router>
        <Game path="game" gamerestart={gamerestart} />
        <EndCard path="endcard" />
        <WelcomePage path="/" gamestart={gamestart} />
      </Router>
    </div>
  );
}

export default App;
