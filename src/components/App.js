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
  const [correct, setCorrect] = useState("");
  const [rest, setRest] = useState("");

  function Random() {
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  }

  function handleChange(e) {
    const { value } = e.target;
    setTyped(value);
  }

  String.prototype.removeCharAt = function(i) {
    var tmp = this.split(""); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(""); // reconstruct the string
  };

  //console.log("crt/r2002_2".removeCharAt(4));

  console.log(typed);
  return (
    <div className="App">
      <header className="App-header">
        <a>{time}</a>
        <a>
          {typed}
          {text}
        </a>
        <Timer />
        <textarea onChange={handleChange} value={typed} />
      </header>
    </div>
  );
}

export default App;
