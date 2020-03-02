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
  const [rest, setRest] = useState(text);

  function Random() {
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  }
  String.prototype.removeCharAt = function(i) {
    var tmp = this.split(""); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(""); // reconstruct the string
  };

  function handleChange(e) {
    const { value } = e.target;
    //setTyped(value);
    //console.log(value);
    //console.log(text.charAt(0));
    if (value == text.charAt(0)) {
      setText(text.removeCharAt(1));
      setCorrect(prevCorrect => prevCorrect + value);
    }

    console.log(correct);
  }

  //console.log("crt/r2002_2".removeCharAt(4));

  return (
    <div className="App">
      <header className="App-header">
        <a>
          <span className="correct-char">{correct}</span>
          {text}
        </a>

        <textarea onChange={handleChange} value={typed} />
      </header>
    </div>
  );
}

export default App;
