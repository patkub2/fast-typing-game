import React, { useEffect } from "react";

function Timer(prop = 10) {
  const [counter, setCounter] = React.useState(0.1);
  useEffect(() => {
    const timer =
      counter < prop && setInterval(() => setCounter(counter + 0.01), 10);
    return () => clearInterval(timer);
  }, [counter]);

  return { counter };
}
export default Timer;
