import React from 'react';
import PlayersList from "./components/PlayersList";
import './styles/Leaderboard.css';
import { Link } from "react-router-dom";

export default function LeaderBoard ({ db }) {
  return(
    <div className="leaderboard-screen">
      <div className="card">
        <p className="title">Leaderboard</p>
        <PlayersList db={db} />
        <Link className="back-button" to="/">Back</Link>
      </div>
    </div>
  )
}
