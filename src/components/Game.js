import React, { useState, useEffect } from "react";
import "../App.css";
import useGame from "./useGame";

function Game({ gamerestart }) {
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

  function Gamerestart() {
    gamerestart();
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
        <nav style={{ display: show ? "block" : "none" }}>
          <p>
            <span>
              You are able to type{" "}
              <span className="App-correct-char">{wps}</span> words per minute.
            </span>
          </p>
          <p>
            <span>
              You typed 3 quotes in{" "}
              <span className="App-correct-char">{time}</span> seconds.
            </span>
          </p>
          <p>
            <span>
              <button className="button" onClick={Gamerestart}>
                Restart
              </button>
            </span>
          </p>
          <p>
            <span className="App-quotes">
              {quote[0].quoteText}- {quote[0].quoteAuthor}
            </span>
          </p>
          <p>
            <span className="App-quotes">
              {quote[1].quoteText}- {quote[1].quoteAuthor}
            </span>
          </p>
          <p>
            <span className="App-quotes">
              {quote[2].quoteText}- {quote[2].quoteAuthor}
            </span>
          </p>
        </nav>

        <nav style={{ display: show ? "none" : "block" }}>
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
