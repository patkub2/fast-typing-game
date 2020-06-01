import { useState, useEffect } from "react";
import "../App.css";
import quotes from "./Quotes.json";
import Timer from "./Timer";
import useToggler from "./useToggler";

function useGame() {
  const [quote] = useState([
    quotes[Random()],
    quotes[Random()],
    quotes[Random()],
    quotes[""],
    quotes[""],
    quotes[""],
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
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
  }
  String.prototype.removeCharAt = function (i) {
    var tmp = this.split(""); // convert to an array
    tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(""); // reconstruct the string
  };

  function handleKeyDown(e) {
    const value = e.key;
    if (value === text.charAt(0)) {
      setText(text.removeCharAt(1));
      setCorrect((prevCorrect) => prevCorrect + value);
    }
  }

  function WordCount(str) {
    if (str === "") return 0;
    else
      return setWords((prevWords) => prevWords + str.trim().split(" ").length);
  }

  if (correct === upText && rest === 1) {
    setTime(counter.toFixed(0));
    WordCount(correct);
    resetQuote();
  }

  function resetQuote() {
    if (i < 2) {
      setI((prev) => prev + 1);
      setUpText(quote[1 + i].quoteText);
      setText(quote[1 + i].quoteText);
      setCorrect("");
    } else {
      toggle();
      setRest(2);
    }
  }

  useEffect(() => {
    document.getElementById("mainHeader").focus();
  });
  useEffect(() => {
    let ddds = 60 / time;
    let dds = ddds * words;
    setWps(dds.toFixed(0));
  }, [time]);

  return { handleKeyDown, show, wps, time, quote, correct, text, counter };
}

export default useGame;
