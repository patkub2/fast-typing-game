import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import quotes from "./Quotes.json";
import game from "./Game";
import Timer from "./Timer";

// .charAt(2)
function App() {
  const [text, setText] = useState(quotes.quotes[Random()].quote);
  const [time, setTime] = useState(5);
  const [typed, setTyped] = useState("");

  function Random() {
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  }

  function handleChange(e) {
    const { value } = e.target;
    setTyped(value);
  }

  console.log(typed);
  return (
    <div className="App">
      <header className="App-header">
        <a>{time}</a>
        <a>{text}</a>
        <Timer />
        <textarea onChange={handleChange} value={typed} />
      </header>
    </div>
  );
}

export default App;
