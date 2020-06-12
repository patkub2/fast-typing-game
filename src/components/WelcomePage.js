import React, { useEffect } from "react";
import "../App.css";

function WelcomPage({ gamestart }) {
  useEffect(() => {
    document.getElementById("mainHeader").focus();
  });

  return (
    <div className="App" tabIndex="0" onKeyDown={gamestart} id="mainHeader">
      <header class="welcompage__header">Press any key to start...</header>
    </div>
  );
}

export default WelcomPage;
