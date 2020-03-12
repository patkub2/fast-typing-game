import React, { useState, useEffect } from "react";
import "../App.css";
import useGame from "./useGame";

function Game({ endcard }) {
  const {
    handleKeyDown,
    show,
    wps,
    time,
    quote,
    correct,
    text,
    counter
  } = useGame();

  if (show === true) {
    endcard(wps, time, quote);
  }
  //useEffect(
  //
  //  () => {
  //    endcard();
  //  },
  //  { show }
  //);

  return (
    <div className="App" tabIndex="0" onKeyDown={handleKeyDown} id="mainHeader">
      <header className="App-header">
        <nav>
          <p>
            <span className="App-correct-char">{correct}</span>
            {text}
          </p>
          <p>{counter.toFixed(2)}</p>
        </nav>
      </header>
    </div>
  );
}

export default Game;
