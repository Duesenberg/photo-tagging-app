import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Game from "./Game";
import LeaderBoard from "./LeaderBoard";
import HowTo from "./HowTo";

function RouteSwitch({ areasDoc, db }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/play" element={<Game areasDoc={areasDoc} db={db} />} />
        <Route path="/leaderboard" element={<LeaderBoard db={db} />} />
        <Route path="/howtoplay" element={<HowTo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
