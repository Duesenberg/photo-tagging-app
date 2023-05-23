import React from "react";
import { Link } from "react-router-dom";

export default function Menu () {
  return(
    <div>
      <button>
        <Link to="/play">Play</Link>
      </button>
      <button>
        <Link to="/leaderboard">Leaderboard</Link>
      </button>
      <button>
        <Link to="/howtoplay">How to Play</Link>
      </button>
    </div>
  )
}
