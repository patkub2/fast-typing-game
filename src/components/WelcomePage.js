import React, { useEffect } from "react";
import "../App.css";
import styled from "styled-components";

function WelcomPage({ gamestart }) {
  useEffect(() => {
    document.getElementById("mainHeader").focus();
  });

  const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  return (
    <div className="App" tabIndex="0" onKeyDown={gamestart} id="mainHeader">
      <Header>Press any key to start...</Header>
    </div>
  );
}

export default WelcomPage;
