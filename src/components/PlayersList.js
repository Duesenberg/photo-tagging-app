import { doc, getDoc } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import uniqid from 'uniqid';

export default function PlayersList ({ db }) {
  const [scoreData, setScoreData] = useState(null);

  //Getting leaderboard data from Cloud Firestore
  const getScoreData = async () => {
    try {
      //Get the doc from Firebase
      const docRef = doc(db, "scoreBoard", "scores");
      const boardDoc = (await getDoc(docRef)).data().board;
      //Parse
      const parsedBoardDoc = JSON.parse(boardDoc);
      setScoreData(parsedBoardDoc);
    } catch (err) {
      console.log("error:", err.message);
    }
  }

  //Run getScoreData when page loads
  useEffect(() => {
    getScoreData();
  }, []);

  return(
    <div className='players-list'>
      {scoreData === null ? 
      <div className="text">Loading...</div> :
      <div>
        {scoreData.map((data) => {
            // Minutes calculation
            const minutes = Math.floor((data.time % 360000) / 6000);

            // Seconds calculation
            const seconds = Math.floor((data.time % 6000) / 100);

            // Milliseconds calculation
            const milliseconds = data.time % 100;

          return(
            <div 
              className="text" 
              key={uniqid()}>
                {data.name}:   {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </div>
          )
        })}
      </div>}
    </div>
  )
}