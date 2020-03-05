import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import quotes from "./Quotes.json";
import Timer from "./Timer";
import useToggler from "./useToggler";

// quotes[Random()].quoteText
function App() {
  const [text, setText] = useState("lol lol");
  const [upText, setUpText] = useState(text);
  const [time, setTime] = useState(5);
  const [correct, setCorrect] = useState("");
  const [rest, setRest] = useState(1);
  const [words, setWords] = useState(0);
  const [wps, setWps] = useState(0);
  const { counter } = Timer(20);
  const [show, toggle] = useToggler(false);

  function Random() {
    var maxNumber = 400;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  }
  String.prototype.removeCharAt = function(i) {
    var tmp = this.split(""); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(""); // reconstruct the string
  };

  function handleKeyDown(e) {
    //console.log(upText);
    //console.log(text);
    const value = e.key;
    if (value == text.charAt(0)) {
      setText(text.removeCharAt(1));
      setCorrect(prevCorrect => prevCorrect + value);
    }
  }

  function WordCount(str) {
    if (str == "") return 0;
    else return setWords(str.trim().split(" ").length);
  }

  if (correct == upText && rest == 1) {
    setRest(2);
    console.log("You win");
    setTime(counter.toFixed(2));
    WordCount(correct);
    toggle();
    //console.log(time);
  }

  useEffect(() => {
    document.getElementById("mainHeader").focus();
    //console.log(time);
  });
  useEffect(() => {
    console.log(time);
    let ddds = 60 / time;
    let dds = ddds * words;
    //  console.log(ddds);
    //  console.log(words);
    //  console.log(dds);
    setWps(dds.toFixed(1));
  }, [time]);

  return (
    <div className="App" tabIndex="0" onKeyDown={handleKeyDown} id="mainHeader">
      <header className="App-header">
        <a style={{ display: show ? "block" : "none" }}>
          You typed {wps} words per minute.
        </a>
        <a>
          <span className="App-correct-char">{correct}</span>
          {text}
        </a>
        {counter.toFixed(2)}
      </header>
    </div>
  );
}

export default App;
