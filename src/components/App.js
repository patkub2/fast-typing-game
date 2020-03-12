import React, { useState, useEffect } from "react";
import "../App.css";
import Game from "./Game";
import EndCard from "./EndCard";
import WelcomePage from "./WelcomePage";
import { Router, navigate } from "@reach/router";

function App() {
  const gamestart = () => {
    navigate("game");
  };
  const endcard = () => {
    console.log(endcard);
    navigate("endcard");
  };
  const gamerestart = () => {
    navigate("/");
  };
  return (
    <div>
      <Router>
        <Game path="game" endcard={endcard} />
        <EndCard path="endcard" />
        <WelcomePage path="/" gamestart={gamestart} />
      </Router>
    </div>
  );
}

export default App;
