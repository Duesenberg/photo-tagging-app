import { Link } from "react-router-dom";

export default function ScoreSubmitted ({ toggleScoreSubmitted }) {
  return(
    <div className="submitted-screen">
      Score submitted
      <Link to='/' onClick={toggleScoreSubmitted}>OK</Link>
    </div>
  )
}