import { Link } from "react-router-dom";
import '../styles/SubmitScore.css';

export default function ScoreSubmitted ({ toggleScoreSubmitted }) {
  return(
    <div className="submitted-screen">
      <div className="submitted-screen-card">
        <p className="text">Score submitted!</p>
        <Link to='/' onClick={toggleScoreSubmitted} className="submit-button">OK</Link>
      </div>
    </div>
  )
}