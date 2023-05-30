import React from 'react';
import './styles/HowTo.css';
import { Link } from 'react-router-dom';

export default function HowTo () {
  return(
    <div className="how-to-screen" >
      <div className='card'>
        <p className="text">Try to find the following characters on the photo:</p>

        <div className="character-photos">
          <div className="spongebob photo">
            <img 
              src={require('./styles/photos/spongebob-photo.jpeg')}
              alt='spongebob' />
          </div>

          <div className="hellboy photo">
            <img 
              src={require('./styles/photos/hellboy-photo.jpg')}
              alt='hellboy' />
          </div>

          <div className="yoshi photo">
            <img 
              src={require('./styles/photos/yoshi-photo.png')}
              alt='yoshi' />
          </div>

          <div className="mickey photo">
            <img 
              src={require('./styles/photos/mickey-photo.png')}
              alt='mickey' />
          </div>

          <div className="beavis-butthead photo">
            <img 
              src={require('./styles/photos/beavis-butthead-photo.jpeg')}
              alt='beavis and butthead' />
          </div>
        </div>

        <p className='text'>Click on a character in the photo, and guess which character it is by clicking on the menu which appears.</p>
        <p className='text'>See how fast you can find all the characters, and submit your score!</p>
      <Link to='/' className='back-button'>Back</Link>
      </div>
    </div>
  )
}
