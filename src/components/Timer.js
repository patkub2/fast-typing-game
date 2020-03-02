import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [counter, setCounter] = React.useState(0.1);

  useEffect(() => {
    const timer =
      counter < 10 && setInterval(() => setCounter(counter + 0.01), 10);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>{counter.toFixed(2)}</div>
    </div>
  );
}
export default Timer;
