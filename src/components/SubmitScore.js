import React from 'react';
import { Link } from 'react-router-dom';

export default function SubmitScore ({ time }) {
    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);
  
    // Milliseconds calculation
    const milliseconds = time % 100;

  return(
    <div className='submit-score-screen'>
      <p>Your time:</p>
      <p className="stopwatch-time">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <form>
        <label for='name'>Name:</label>
        <input type='text' name='name' placeholder='Your name here' required />
        <button type='submit'>Submit</button>
        <Link to='/'>Cancel</Link>
      </form>
    </div>
  )
}