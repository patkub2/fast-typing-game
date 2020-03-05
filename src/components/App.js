import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import quotes from "./Quotes.json";
import Timer from "./Timer";
import useToggler from "./useToggler";

// quotes[Random()].quoteText
function App() {
  const [quote, setQuote] = useState([
    quotes[Random()],
    quotes[Random()],
    quotes[Random()]
  ]);
  const [text, setText] = useState(quote[0].quoteText);
  const [upText, setUpText] = useState(quote[0].quoteText);
  const [time, setTime] = useState(5);
  const [correct, setCorrect] = useState("");
  const [rest, setRest] = useState(1);
  const [words, setWords] = useState(0);
  const [wps, setWps] = useState(0);
  const { counter } = Timer(999);
  const [show, toggle] = useToggler(false);
  const [i, setI] = useState(0);

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
    else return setWords(prevWords => prevWords + str.trim().split(" ").length);
  }

  if (correct == upText && rest == 1) {
    //setRest(2);
    //console.log("You win");
    setTime(counter.toFixed(2));
    WordCount(correct);
    //toggle();
    //console.log(time);
    resetQuote();
  }

  function resetQuote() {
    if (i < 2) {
      setI(prev => prev + 1);
      setUpText(quote[1 + i].quoteText);
      setText(quote[1 + i].quoteText);
      setCorrect("");
      //toggle();
      console.log(i);
    } else {
      toggle();
      setRest(2);
    }
  }

  useEffect(() => {
    document.getElementById("mainHeader").focus();
    //console.log(time);
  });
  useEffect(() => {
    //console.log(time);
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
        <nav style={{ display: show ? "block" : "none" }}>
          <p>
            <a>
              You are able to type{" "}
              <span className="App-correct-char">{wps}</span> words per minute.
              Nice.
            </a>
          </p>
          <p>
            <a>
              You typed 3 quotes in{" "}
              <span className="App-correct-char">{time}</span> seconds
            </a>
          </p>
          <p>
            <a className="App-quotes">
              {quote[0].quoteText}- {quote[0].quoteAuthor}
            </a>
          </p>
          <p>
            <a className="App-quotes">
              {quote[1].quoteText}- {quote[1].quoteAuthor}
            </a>
          </p>
          <p>
            <a className="App-quotes">
              {quote[2].quoteText}- {quote[2].quoteAuthor}
            </a>
          </p>
        </nav>

        <nav style={{ display: show ? "none" : "block" }}>
          <a>
            <span className="App-correct-char">{correct}</span>
            {text}
          </a>
          <p>
            <a>{counter.toFixed(2)}</a>
          </p>
        </nav>
      </header>
    </div>
  );
}

export default App;
