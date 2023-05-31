import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDoc, doc, setDoc } from "firebase/firestore";
import ScoreSubmitted from './ScoreSubmitted';
import '../styles/SubmitScore.css';

export default function SubmitScore ({ time, db }) {
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const toggleScoreSubmitted = () => {setScoreSubmitted(!scoreSubmitted)}

  const addScore = async (e) => {
    //Create an object with player name & time
    const formName = document.getElementById('name');
    const player = {
      name: formName.value,
      time: time
    }
    //Get parsed data & add player score to it
    let parsedBoardDoc = await getScoreData();
    parsedBoardDoc.push(player);
    //Sort array of scores
    parsedBoardDoc = sortScoreData(parsedBoardDoc);
    //Add to Firebase
    storeScoreData(parsedBoardDoc);
  }

  //Store score data to Firebase
  const storeScoreData = async (boardDoc) => {
    const stringifiedBoardDoc = JSON.stringify(boardDoc);
    const docRef = doc(db, "scoreBoard", "scores");
    await setDoc(docRef, {board: stringifiedBoardDoc});
  }

  //Get score data from Firebase
  const getScoreData = async () => {
    try {
      //Get the doc from Firebase
      const docRef = doc(db, "scoreBoard", "scores");
      const boardDoc = (await getDoc(docRef)).data().board;
      //Parse
      const parsedBoardDoc = JSON.parse(boardDoc);
      return parsedBoardDoc;
    } catch (err) {
      console.log("error:", err.message);
    }
  }

  const sortScoreData = (scoreArray) => {
    scoreArray.sort((a, b) => a.time - b.time)
    return scoreArray;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addScore(e);
    toggleScoreSubmitted();
  }

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  return(
    <div className='submit-score-screen'>
      {scoreSubmitted ?
      <ScoreSubmitted toggleScoreSubmitted={toggleScoreSubmitted} /> :
      <div className='not-submitted-screen'>
        <p className='title'>Congratulations!</p>

        <div className='your-time-container'>
          <p className='text'>Your time:</p>
          <p className="stopwatch-time text">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </p>
        </div>

        <form className='submit-score-form' onSubmit={handleSubmit}>
          <div className='name-input-container'>
            <label htmlFor='name' className='text'>Name:</label>
            <input type='text' name='name' id='name' className='name-input' placeholder='Your Name Here' required />
          </div>

          <div className='buttons'>
            <button type='submit' className='submit-button'>Submit</button>
            <Link to='/' className='cancel-button'>Cancel</Link>
          </div>
        </form>
      </div> 
      }
    </div>
  )
}