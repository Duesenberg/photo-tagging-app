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
      <div>loading</div> :
      <div>
        {scoreData.map((data) => {
          return(
            <div key={uniqid()}>{data.name}: {data.time}</div>
          )
        })}
      </div>}
    </div>
  )
}