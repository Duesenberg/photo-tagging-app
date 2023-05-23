import { React } from 'react';
import { Link } from 'react-router-dom';

export default function GameInProcess ({ toggleGameStarted }) {
  return(
    <div className='game-in-process-screen'>
      <Link to="/" onClick={toggleGameStarted}>Back to Menu</Link>
      <img 
        src='https://firebasestorage.googleapis.com/v0/b/photo-tagging-app-b3302.appspot.com/o/game-image.jpg?alt=media&token=5162c8cf-d746-452a-8ea8-1f39fb59a7eb' 
        alt='game characters collage' />
    </div>
  )
}
