import React from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";

export default function Menu () {
  return(
    <div className="menu-screen">
      <div className="title">
        <p className="text">Where is Everyone?</p>
      </div>
      <div className="buttons">
          <Link className="play-button" to="/play">Play</Link>
          <Link className="leaderboard-button" to="/leaderboard">Leaderboard</Link>
          <Link className="how-to-play-button" to="/howtoplay">How to Play</Link>
      </div>
      <div className="copyright">
        <span>Made by </span> <a href="https://github.com/Duesenberg" rel="noreferrer" target="_blank">Duesenberg</a>
      </div>
    </div>
  )
}
