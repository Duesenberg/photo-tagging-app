import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import GameInProcess from "./components/GameInProcess";

export default function Game () {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleGameStarted = () => {
    gameStarted === false ? setGameStarted(true) : setGameStarted(false);
  }

  return(
    <div className="game-screen">
      {gameStarted === false ?
      <IntroScreen toggleGameStarted={toggleGameStarted} /> :
      <GameInProcess toggleGameStarted={toggleGameStarted} />}
    </div>
  )
}
